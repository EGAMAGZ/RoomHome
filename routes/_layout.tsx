import { LayoutProps } from "$fresh/server.ts";
import SessionState from "@/model/session.ts";

export default function Layout(
  { Component, state }: LayoutProps<SessionState>,
) {
  return (
    <div class="flex flex-col gap-2">
      <nav class="flex justify-between">
        <div>
          <span>RoomHome</span>
        </div>
        <div>
          <span>{String(`Logged in: ${state.isLoggedIn}`)}</span>
          <span>{String(`Employee: ${state.isEmployee}`)}</span>
          {state.isLoggedIn && (
            <a href="/logout" class="text-red-500">Logout</a>
          )}
        </div>
      </nav>
      <Component />
    </div>
  );
}
