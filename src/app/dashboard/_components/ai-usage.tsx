import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import AIChart from "./ai-chart";

export const AIUsage = async () => {
  
  let availableCredit:number = 0;
  let totalUsage: number = 0;

  try {
    const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

    const userAIOutputs = await db.aIOutput.findMany({
      where: {
        userId: userId as string,
      },
    });
  
    if (userAIOutputs.length > 0) {
      userAIOutputs.forEach((output: { description: string | any[]; }) => {
        totalUsage = totalUsage + Number(output.description?.length);
      });

      // revalidatePath("/");
    }

    const userCredit = await db.user.findUnique({
      where: { userId: userId as string },
    });
  
    availableCredit = userCredit ? Number(userCredit?.totalCredit) : 10000;
  } catch (error) {
  console.error(error)
  }
  

  

  return (
    <div className="bg-white">
      <p>Chart</p>
      <AIChart availableCredit={availableCredit} totalUsage={totalUsage} />
    </div>
  );
};