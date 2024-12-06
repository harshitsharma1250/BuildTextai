# BuildCaptions  

## Overview  
BuildCaptions is a powerful AI-driven platform that helps users generate creative and personalized social media content, including captions, descriptions, and tweets. With a user-friendly interface and advanced features, BuildCaptions empowers users to create, manage, and analyze high-quality content effortlessly.  

## Features  
- **AI-Powered Content Generation**: Generate unique captions, descriptions, and tweets tailored to your needs.  
- **Multi-Platform Support**: Create content optimized for various social media platforms.  
- **Data Visualization**: Gain insights into your content through interactive charts and analytics powered by ShadCN and Gemini AI.  
- **Secure Authentication**: Integrated with Clerk, supporting Google Sign-In for a seamless and secure user experience.  
- **Membership Plans**: Manage memberships and unlimited content credits via Stripe.  
- **Scalable Architecture**: Handle up to 1,000+ content pieces and 500+ users efficiently.  

## Tech Stack  
- **Frontend**: Next.js, TypeScript, Tailwind CSS  
- **Backend**: Prisma, Clerk, Stripe  
- **AI Integration**: Gemini AI  
- **Data Visualization**: ShadCN  
- **Authentication**: Clerk with Google Sign-In  
- **Payment Management**: Stripe  

## Installation  

### Prerequisites  
- Node.js (v16 or higher)  
- npm or yarn  
- A Clerk account for authentication setup  
- A Stripe account for payment integration  

### Steps  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/harshitsharma1250/BuildCaptions.git  
   cd BuildCaptions  

npm install  


NEXT_PUBLIC_CLERK_FRONTEND_API=your-clerk-frontend-api  
CLERK_API_KEY=your-clerk-api-key  
STRIPE_SECRET_KEY=your-stripe-secret-key  
GEMINI_AI_API_KEY=your-gemini-api-key  
DATABASE_URL=your-database-url  

npx prisma migrate dev  

npm run dev  

