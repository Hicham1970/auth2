"use client";

import { SignIn, useUser } from "@clerk/nextjs";

export default function SignInPage() {
  const { user } = useUser();

  return (
    <div className="flex items-center justify-center text-center font-semibold text-2xl  bg-green-400 text-red-500">
      <SignIn 
        appearance={{
          elements: {
            rootBox: "mx-2 md:mx-0 max-w-md w-full",
            formFieldInput: "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500",
            card: "shadow-xl"
          }
        }}
      />
      {user && (
        <h1>
          Sign In Page for Mr{user.firstName} {user.lastName} ({user.id})
        </h1>
      )}
    </div>
  );
}