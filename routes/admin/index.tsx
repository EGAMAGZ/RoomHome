import { employeeMenuOptions } from "@/data/menu-option.ts";
import prismaClient from "@/database/prisma.ts";
import { IconHome, IconKey, IconPlus, IconUserCircle } from "@tabler-icons";

export default async function AdminPage() {
  const totalClients = await prismaClient.clientes.count();
  const totalProperties = await prismaClient.inmueblesAlquiler.count();
  const totalPrivateOwners = await prismaClient.propietariosPrivados.count();
  const totalEmpresarialOwners = await prismaClient.propietariosEmpresariales
    .count();

  const totalOwners = totalPrivateOwners + totalEmpresarialOwners;

  return (
    <div class="flex justify-center px-4">
      <div class="container flex flex-col gap-4 py-4 font-sans">
        <span class="text-4xl font-semibold">
          ¡Bienvenido de vuelta!
        </span>
        <div class="stats shadow stats-vertical lg:stats-horizontal">
          <div class="stat">
            <div class="stat-figure">
              <IconUserCircle size="48" />
            </div>
            <div class="stat-title">
              Total de clientes
            </div>
            <div class="stat-value font-mono">
              {totalClients}
            </div>
          </div>
          <div class="stat">
            <div class="stat-figure">
              <IconHome size="48" />
            </div>
            <div class="stat-title">
              Total de inmuebles
            </div>
            <div class="stat-value font-mono">
              {totalProperties}
            </div>
          </div>
          <div class="stat">
            <div class="stat-figure">
              <IconKey size="48" />
            </div>
            <div class="stat-title">
              Total de propietarios
            </div>
            <div class="stat-value font-mono">
              {totalOwners}
            </div>
            <div class="stat-desc">
              (Empresariales y privados)
            </div>
          </div>
        </div>
        <div class="card shadow">
          <div class="card-body">
            <span class="card-title">Acciones rápidas</span>
            <div class="flex flex-col md:flex-row gap-2">
              <a href="/admin/client/register" class="btn btn-secondary">
                <IconPlus size="24" />
                Registrar cliente
              </a>
              <a href="/admin/property/register" class="btn btn-secondary">
                <IconPlus size="24" />
                Registrar inmueble
              </a>
            </div>
          </div>
        </div>
        <div class="card shadow">
          <div class="card-body">
            <span class="card-title">Navegación</span>
            <ul class="menu menu-md bg-base-200 rounded-box">
              {employeeMenuOptions.map((option) => (
                <li>
                  <a href={option.href}>
                    {option.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
