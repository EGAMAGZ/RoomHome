export type MenuOption = {
  name: string;
  href: string;
};

export const clientMenuOptions: MenuOption[] = [
  {
    name: "Inicio",
    href: "/",
  },
  {
    name: "Explorar",
    href: "/property",
  },
];

export const employeeMenuOptions: MenuOption[] = [
  {
    name: "Inicio",
    href: "/admin",
  },
  {
    name: "Clientes",
    href: "/admin/client",
  },
  {
    name: "Propietarios",
    href: "/admin/owner",
  },
  {
    name: "Inmuebles",
    href: "/admin/property",
  },
];
