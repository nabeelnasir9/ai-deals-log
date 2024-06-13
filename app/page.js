"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/auth/login"); // Redirect to login page by default
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <HashLoader size={60} color={"black"} />
    </div>
  );
}
