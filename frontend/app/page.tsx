"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "./_components/AuthContext";
import Header from "./_components/Header";

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}></QueryClientProvider>
      <div className="h-lvh w-lvw flex flex-col">
        <div className="w-4/5 h-full mx-auto">
          <Header />
          <div className="border-t-2 w-[95%] border-black mx-auto"></div>
        </div>
      </div>
    </AuthContextProvider>
  );
}
