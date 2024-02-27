import { withAuth } from 'next-auth/middleware';
// export { default } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized: async ({ req, token }) => {
      if (req.nextUrl.pathname.startsWith('/admin'))
        return token?.role === 'admin'; //returns true if the role of the user is admin
      return !!token; // if the user is authenticated, the token is an object and this statement returns true.
      //If the user is not authenticated, thie token is undefined and this statement returns false.
    },
  },
});

export const config = { matcher: ['/admin:path*', '/profile'] };
