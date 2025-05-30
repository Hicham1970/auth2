import Image from "next/image";
import {
    SignInButton,
    SignOutButton,
    // UserButton
} from "@clerk/nextjs";
import Link from "next/link";

export const Navigation = () => {
    return (
        <nav className="bg-[var(--background)] border-b border-[var(--foreground)]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0">
                        <h1 className="text-xl font-semibold text-[var(--foreground)] flex items-center gap-2">
                            <Image 
                                src="/logo.png" 
                                alt="Logo" 
                                width={64} 
                                height={64} 
                            />
                        </h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <SignInButton mode="modal" />
                        <Link href="/user-profile"> User Profile 
                        </Link>
                        <SignOutButton />
                        {/* <UserButton /> */}
                    </div>
                </div>
            </div>
        </nav>
    );
};