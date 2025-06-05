import { auth, currentUser } from '@clerk/nextjs/server';


export default async function DashboardPage() {
    const authObject = await auth();
    const userObject = await currentUser();

    console.log("Auth Object:", authObject);
    console.log("User Object:", userObject);

    return (
        <h1>
            Welcome to the Dashboard!
            {userObject ? `Hello, ${userObject.firstName}!` : "Please log in."}
        </h1>
    );
}



