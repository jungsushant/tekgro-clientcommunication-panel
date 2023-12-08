"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
const ClientMember = () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated: () => {
      redirect("/api/auth/signin?callbackUrl=/ClientMember");
    },
  });
  console.log("session", session);
  return (
    <div>
      ClientMember
      <p>{session?.user?.name}</p>
      <p>{session?.user?.role}</p>
    </div>
  );
};

export default ClientMember;
