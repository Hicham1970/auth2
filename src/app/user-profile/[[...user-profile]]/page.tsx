import { UserProfile } from "@clerk/nextjs";
// import { auth } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";

export default async function UserProfilePage() {
  // const { userId } = await auth();
  
  // if (!userId) {
  //   redirect("/sign-in");
  // }

  return (
    <div className="flex justify-center items-center py-8">
      <UserProfile path="/user-profile" />
    </div>
  );
}



