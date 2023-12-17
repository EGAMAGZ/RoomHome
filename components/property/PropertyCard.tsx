interface PropertyCardProps {
  id: number;
  address: string;
  amount: number;
  rooms: number;
  type: string;
}

export default function PropertyCard(
  props: PropertyCardProps,
) {
  return (
    <div class="card card-compact bg-neutral-300 shadow-sm">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title font-sans">
          {props.type} de {props.rooms} habitaciones
        </h2>
        <p class="font-sans">
          <strong class="mr-2">Dirección:</strong>
          <span>
            {props.address}
          </span>
        </p>
        <p class="font-sans">
          <strong class="mr-2">Importe mensual:</strong>
          <span>
            ${new Intl.NumberFormat().format(props.amount)}
          </span>
        </p>
        <div class="card-actions justify-end">
          <a class="btn btn-secondary font-sans" href={`/property/${props.id}`}>
            Contactos
          </a>
        </div>
      </div>
    </div>
  );
}
