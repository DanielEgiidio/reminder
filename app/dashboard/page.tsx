import { Skeleton } from "@/components/ui/skeleton";
import { currentUser } from "@clerk/nextjs";
import { Suspense } from "react";

export default async function Home() {
  return (
    <Suspense fallback={<WelcomeMsgFallBack />}>
      <WelcomeMsg />
    </Suspense>
  );
}

async function WelcomeMsg() {
  const user = await currentUser();

  if (!user) {
    return <div>Error</div>;
  }

  return (
    <div className="flex w-full">
      <h1 className="text-4xl font-bold">
        Bem vindo, <br /> {user.firstName} {user.lastName}
      </h1>
    </div>
  );
}

function WelcomeMsgFallBack() {
  return (
    <div className="flex w-full">
      <h1 className="text-4xl font-bold">
        <Skeleton className="w-[180px] h-[36px]" />
        <Skeleton className="w-[180px] h-[36px]" />
      </h1>
    </div>
  );
}
