declare module "next-auth/jwt" {
  interface JWT {
    // ...other properties
    role: string;
  }
}
