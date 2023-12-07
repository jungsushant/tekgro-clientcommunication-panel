import React from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";

import { getServerAuthSession } from "~/server/auth";
const Navigation = async () => {
  const session = await getServerAuthSession();
  return (
    <header className="bg-gray-600 text-gray-100">
      <nav className="flex w-full items-center justify-between px-10 py-4">
        <div>
          <Image
            src="/TekGro.png"
            width={200}
            height={1000}
            alt="Tekgro Logo"
          />
        </div>
        <div className="flex gap-10">
          <Link href="/"> Home</Link>
          <Link href="/CreateUser"> Create User</Link>
          <Link href="/ClientMember"> Client Member</Link>
          <Link href="/Member"> Member</Link>
          <Link href="/Public"> Public</Link>
          {session ? (
            <Link href="/api/auth/signout?callbackUrl=/"> Logout</Link>
          ) : (
            <Link href="/api/auth/signin"> Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
