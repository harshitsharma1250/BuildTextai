import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AIChart from "./ai-chart";

export const AIUsage = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  let totalUsage: number = 0;

  const userAIOutputs = await db.aIOutput.findMany({
    where: {
      userId: userId as string,
    },
  });

  if (userAIOutputs.length > 0) {
    userAIOutputs.forEach((output) => {
      totalUsage += Number(output.description?.length);
    });
  }

  const userCredit = await db.user.findUnique({
    where: { userId: userId as string },
  });

  const availableCredit = userCredit ? Number(userCredit?.totalCredit) : 10000;

  // Do not call revalidatePath here
  // Instead, handle revalidation in a different way if needed

  return (
    <div className="bg-white">
      <AIChart availableCredit={availableCredit} totalUsage={totalUsage} />
    </div>
  );
};