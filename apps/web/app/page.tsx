"use client"
import { authClient } from "@repo/auth/client"

export default function Home() {


  return (
    <main>
      <button onClick={() => authClient.signIn.social({
        provider: "google",
        callbackURL: `${process.env.NEXT_PUBLIC_CLIENT_URL}/home`,
      })}>
        Login with Google
      </button>
    </main>
  )
}
