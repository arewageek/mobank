export { GET, POST } from "@/auth";

// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     Credential({
//       name: "credentials",
//       id: "credentials",
//       credentials: {
//         email: {
//           type: "email",
//           label: "Email Address",
//           placeholder: "email@domain.com",
//         },
//         password: {
//           type: "password",
//           label: "Password",
//           placeholder: "password",
//         },
//       },
//       async authorize(credentials, req) {
//         const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };
//         if (user) {
//           return user;
//         } else {
//           return null;
//         }
//       },
//     }),
//   ],
//   session: {
//     strategy: "jwt",
//   },
//   pages: {
//     signIn: "/login",
//   },
//   callbacks: {
//     async jwt({ token, user })
//   }
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };