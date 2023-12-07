import Link from "next/link";

import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex flex-col items-center justify-center  ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          TekGro
          <span className="m-2 text-[hsl(280,100%,70%)]">
            Client Comunication
          </span>
          Panel
        </h1>
      </div>
    </main>
  );
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  const latestPost = "latest post";

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: latest post</p>
      ) : (
        <p>You have no posts yet.</p>
      )}
    </div>
  );
}
