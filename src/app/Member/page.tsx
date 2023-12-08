import { redirect } from "next/navigation";
import React from "react";
import { getServerAuthSession } from "~/server/auth";

const Member = async () => {
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/Member");
  }
  return (
    <div>
      Member
      <p>{session?.user?.email}</p>
      <p>{session?.user?.role}</p>
    </div>
  );
};

export default Member;
