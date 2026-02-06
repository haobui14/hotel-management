export { default as proxy } from "next-auth/middleware";

// export const config = {
//   matcher: ['/users/:path*', '/api/:path*'],
// };

export const config = {
  matcher: ["/users/:path*"],
};
