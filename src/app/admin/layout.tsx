import { ReactNode } from "react";
import Header from "./Header";
import Nav from "./Nav";

export default async function AdminLayout({ children }: { children: ReactNode }) {

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Nav />
      <div className="grow bg-gray-300">
        {children}
      </div>
    </div>
  )

}