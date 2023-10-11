import { LayoutProps } from "$fresh/server.ts";
import SessionState from "@/schema/session-state.ts";
import Navbar from "@/components/Navbar.tsx";
import {
  clientMenuOptions,
  employeeMenuOptions,
  MenuOption,
} from "@/data/menu-option.ts";

export default function Layout(
  { Component, state }: LayoutProps<SessionState>,
) {
  const menuOptions: MenuOption[] = state.isEmployee
    ? employeeMenuOptions
    : clientMenuOptions;

  return (
    <>
      <Navbar
        isLoggedIn={state.isLoggedIn as boolean}
        isEmployee={state.isEmployee as boolean}
        menuOptions={menuOptions}
        name={state.name as string}
      />
      <Component />
    </>
  );
}
