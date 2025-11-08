"use client";
import { authClient } from "@repo/auth/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const Page = () => {
    const router = useRouter();
    useEffect(() => {
        authClient.getSession().then((session) => {
            if (!session.data) {
                router.push("/");
            }
        });
    }, [router]);


    return (
        <div>
            <div>Hello from Home Page</div>;
            <button onClick={() => authClient.signOut({
                fetchOptions: {
                    onSuccess: () => {
                        router.push("/");
                    }
                }
            })}>Logout</button>
        </div>
    );
};

export default Page;
