import { Signal } from "@preact/signals";
import { ContratosAlquiler } from "@/generated/client/deno/edge.ts";
import { formatDate } from "@/utils/date.ts";

interface ContractsTableProps {
  contracts: Signal<ContratosAlquiler[]>;
}

export default function ContractsTable({ contracts }: ContractsTableProps) {
  return (
    <div class="overflow-x-auto">
      <table class="table table-zebra">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Direccion de inmueble</th>
            <th>Inicio</th>
            <th>Fin</th>
          </tr>
        </thead>
        <tbody>
          {contracts.value.map((contract) => (
            <ContractsTableItem
              contract={contract}
              key={contract.num_contrato}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>ID</td>
            <td>Cliente</td>
            <td>Direccion de inmueble</td>
            <td>Inicio</td>
            <td>Fin</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

interface ContractsTableItemProps {
  contract: ContratosAlquiler;
}

function ContractsTableItem({ contract }: ContractsTableItemProps) {
  return (
    <tr>
      <td>{contract.num_contrato}</td>
      <td>{contract.nom_cliente}</td>
      <td>{contract.dir_inmueble}</td>
      <td>{formatDate(new Date(contract.fech_inicio.toISOString()))}</td>
      <td>{formatDate(new Date(contract.fech_fin.toISOString()))}</td>
    </tr>
  );
}
