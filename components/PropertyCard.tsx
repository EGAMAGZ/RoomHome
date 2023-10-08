interface PropertyCardProps {
  id: number;
  address: string;
  amount: number;
}

export default function PropertyCard(
  { id, address, amount }: PropertyCardProps,
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
        <h2 class="card-title font-sans">Shoes!</h2>
        <p class="font-sans">
          <strong class="mr-2">Direccion:</strong>
          <span>
            {address}
          </span>
        </p>
        <p class="font-sans">
          <strong class="mr-2">Importe mensual:</strong>
          <span>
            ${new Intl.NumberFormat().format(amount)}
          </span>
        </p>
        <div class="card-actions justify-end">
          <a class="btn btn-secondary font-sans">Contactos</a>
        </div>
      </div>
    </div>
  );
}
