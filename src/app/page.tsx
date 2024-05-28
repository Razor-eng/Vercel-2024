"use client";
import Dashboard from "./dashboard";
import VercelHome from "./vercelHome";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Spinner from "@/components/Spinner";

export default function Home() {
  const [user, loading] = useAuthState(auth);

  return (
    <div>
      {loading ?
        <Spinner />
        :
        (!user ?
          <VercelHome />
          :
          <Dashboard userName={user.displayName || ''} email={user.email || ''} />
        )
      }
    </div>
  );
}
