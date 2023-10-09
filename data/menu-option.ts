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
  {
    name: "Citas",
    href: "/date",
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
  {
    name: "Citas",
    href: "/admin/date",
  },
  {
    name: "Contratos",
    href: "/admin/contract",
  },
];
