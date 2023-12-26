import { NextResponse } from "next/server";
import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
    publicRoutes: ["/", "/:locale/sign-in"],
    afterAuth(auth, req) {
        if (auth.userId && auth.isPublicRoute) {
        let path = "/home";


        const orgSelection = new URL(path, req.url);
            return NextResponse.redirect(orgSelection);
        }

        if (!auth.userId && !auth.isPublicRoute) {
            return redirectToSignIn({ returnBackUrl: req.url });
        }

        if (auth.userId && !auth.orgId && req.nextUrl.pathname !== "/home") {
            const orgSelection = new URL("/home", req.url);
            return NextResponse.redirect(orgSelection);
        }
    }
});
 
export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 