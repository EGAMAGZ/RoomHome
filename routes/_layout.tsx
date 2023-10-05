import { LayoutProps } from "$fresh/server.ts";
// import Navbar from "@/components/Navbar.tsx";
import SessionState from "@/model/session-state.ts";

export default function Layout(
  { Component, state }: LayoutProps<SessionState>,
) {
  return (
    <>
      <div class="navbar bg-base-300 rounded-box">
        <div class="flex-1 px-2 lg:flex-none">
          <a class="text-lg font-bold font-sans">daisyUI</a>
        </div>
        <div class="flex justify-end flex-1 px-2">
          <div class="flex items-stretch">
            <a class="btn btn-ghost rounded-btn">Button</a>
            <div class="dropdown dropdown-end">
              <label tabindex="0" class="btn btn-ghost rounded-btn">
                Dropdown
              </label>
              <ul
                tabindex="0"
                class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {
        /* <Navbar
        isLoggedIn={state.isLoggedIn as boolean}
        isEmployee={state.isEmployee as boolean}
      /> */
      }
    </>
  );
}
