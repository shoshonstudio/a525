import { auth } from "@/auth";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const DashboardPage = async () => {
  const session = await auth();
  return (
    <main className="grid place-items-center h-screen text-white">
      <h1>DashboardPage</h1>
      <Card>
        <CardContent>
          {!session ? (
            <div>Not authenticated</div>
          ) : (
            <pre>{JSON.stringify(session, null, 2)}</pre>
          )}
        </CardContent>
      </Card>
    </main>
  );
};

export default DashboardPage;
