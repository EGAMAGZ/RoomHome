import {
  PropietariosEmpresariales,
  PropietariosPrivados,
} from "@/generated/client/deno/edge.ts";
import { IconBuilding, IconUserCircle } from "@tabler-icons";
import { formatPhoneNumber } from "@/utils/phone.ts";

interface PrivateOwnerCardProps {
  owner: PropietariosPrivados;
}

export function PrivateOwnerCard({ owner }: PrivateOwnerCardProps) {
  return (
    <div class="card card-normal card-side bg-primary text-primary-content shadow font-sans">
      <figure>
        <IconUserCircle size={92} />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Información del propietario:</h2>
        <p>
          <span class="font-semibold mr-2">
            Nombre:
          </span>
          {owner?.nom_propietario ?? ""}
        </p>
        <p>
          <span class="font-semibold mr-2">
            Teléfono:
          </span>
          {owner?.tel_propietario ?? ""}
        </p>
      </div>
    </div>
  );
}

interface EmpresarialOwnerCardProps {
  owner: PropietariosEmpresariales;
}

export function EmpresarialOwnerCard({ owner }: EmpresarialOwnerCardProps) {
  return (
    <div class="card card-normal card-side bg-primary text-primary-content shadow font-sans">
      <figure>
        <IconBuilding size={92} />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Información del propietario:</h2>
        <p>
          <span class="font-semibold mr-2">
            Nombre de Empresa:
          </span>
          {owner.nom_empresa ?? ""}{" "}
          <span class="badge badge-accent">{owner.tipo_empresa ?? ""}</span>
        </p>
        <p>
          <span class="font-semibold mr-2">
            Dirección:
          </span>
          {owner.dir_empresa ?? ""}
        </p>
        <p>
          <span class="font-semibold mr-2">
            Teléfono:
          </span>
          {formatPhoneNumber(owner.tel_empresa) ?? ""}
        </p>
        <p>
          <span class="font-semibold mr-2">
            Contacto:
          </span>
          {owner.nom_contacto ?? ""}
        </p>
      </div>
    </div>
  );
}
