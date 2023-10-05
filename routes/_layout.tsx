import { LayoutProps } from "$fresh/server.ts";
import Navbar from "@/components/Navbar.tsx";
import SessionState from "../model/session-state.ts";

export default function Layout(
  { Component, state }: LayoutProps<SessionState>,
) {
  return (
    <>
      <Navbar
        isLoggedIn={state.isLoggedIn as boolean}
        isEmployee={state.isEmployee as boolean}
      />
    </>
    // <div class="flex flex-col gap-2">
    //   <nav class="flex justify-between">
    //     <div>
    //       <span>RoomHome</span>
    //     </div>
    //     <div>
    //       <span>{String(`Logged in: ${state.isLoggedIn}`)}</span>
    //       <span>{String(`Employee: ${state.isEmployee}`)}</span>
    //       {state.isLoggedIn && (
    //         <a href="/logout" class="text-red-500">Logout</a>
    //       )}
    //     </div>
    //   </nav>
    //   <Component />
    // </div>
  );
}
