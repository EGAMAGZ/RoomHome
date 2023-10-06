import { IconLogout, IconMenu2, IconUserCircle } from "@tabler-icons";
import { MenuOption } from "@/data/menu-option.ts";
import { LOGIN_URL, LOGOUT_URL } from "@/utils/config.ts";

interface NavbarProps {
  isLoggedIn: boolean;
  menuOptions: MenuOption[];
}

interface NavbarMenuItemProps {
  href: string;
  name: string;
}

interface NavbarMenuProps {
  menuOptions: MenuOption[];
}

export default function Navbar({ isLoggedIn, menuOptions }: NavbarProps) {
  return (
    <nav class="navbar bg-primary text-primary-content">
      <div class="navbar-start">
        {isLoggedIn && <NavbarMenu menuOptions={menuOptions} />}
        <a class="btn btn-ghost normal-case text-xl font-sans">RoomHome</a>
      </div>
      <div class="navbar-end">
        {isLoggedIn
          ? <NavbarProfile />
          : (
            <a href={LOGIN_URL} class="btn btn-ghost font-sans">
              Iniciar sesión
            </a>
          )}
      </div>
    </nav>
  );
}

function NavbarMenu({ menuOptions }: NavbarMenuProps) {
  return (
    <div class="dropdown">
      <button class="btn btn-ghost">
        <IconMenu2 size={24} />
      </button>
      <ul class="menu menu-sm md:menu-md lg:menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-max text-black">
        {menuOptions.map((option) => (
          <NavbarMenuItem key={option.name} {...option} />
        ))}
      </ul>
    </div>
  );
}

function NavbarMenuItem({ name, href }: NavbarMenuItemProps) {
  return (
    <li>
      <a href={href} class="font-sans">
        {name}
      </a>
    </li>
  );
}

function NavbarProfile() {
  return (
    <div class="dropdown dropdown-end">
      <button class="btn" aria-label="Profile">
        <IconUserCircle size="24" />
      </button>
      <ul class="menu menu-sm md:menu-md lg:menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box text-black font-sans w-max">
        <li>
          <a href={LOGOUT_URL}>
            <IconLogout size="24" />
            <span>
              Cerrar sesion
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}