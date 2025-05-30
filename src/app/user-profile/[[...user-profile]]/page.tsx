import {UserProfile} from "@clerk/nextjs";
// This page is used to display the user profile information

export default function UserProfilePage() {
  return (
      <div className="flex justify-center items-center py-8">
          <UserProfile path="/user-profile" />
    </div>
  )
}



