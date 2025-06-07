import {
  clerkMiddleware,
  // createRouteMatcher
} from '@clerk/nextjs/server';

// Liste des routes publiques qui ne nécessitent pas d'authentification 
// const isPublicRoute = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)"]);
// Par défaut, toutes les autres routes sont protégées incluant /user-profile

// export default clerkMiddleware(async (auth, req) => {
  // const { userId, redirectToSignIn } = await auth();
  // if (!userId && !isPublicRoute(req)) {
    // ajouter custom logic here if needed before redirecting to sign-in
    // For example, you can log the attempt or set a cookie
    // console.log("User not authenticated, redirecting to sign-in");
    // If the user is not authenticated and the route is not public, redirect to sign-in
    // return redirectToSignIn();
  // }

// });

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
