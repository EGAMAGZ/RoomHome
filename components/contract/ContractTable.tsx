import { Signal } from "@preact/signals";
import { ContratosAlquiler } from "@/generated/client/deno/edge.ts";
import { formatDate } from "@/utils/date.ts";
import { ContractWithClientAndProperty } from "@/schema/contract.ts";

interface ContractsTableProps {
  contracts: Signal<ContractWithClientAndProperty[]>;
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
        {contracts.value.length !== 0 && (
          <tfoot>
            <tr>
              <td>ID</td>
              <td>Cliente</td>
              <td>Direccion de inmueble</td>
              <td>Inicio</td>
              <td>Fin</td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
}

interface ContractsTableItemProps {
  contract: ContractWithClientAndProperty;
}

function ContractsTableItem({ contract }: ContractsTableItemProps) {
  return (
    <tr>
      <td>{contract.num_contrato}</td>
      <td>{contract.cliente.nom_cliente}</td>
      <td>{contract.inmueble.dir_inmueble}</td>
      <td>{formatDate(new Date(contract.fech_inicio))}</td>
      <td>{formatDate(new Date(contract.fech_fin))}</td>
    </tr>
  );
}
