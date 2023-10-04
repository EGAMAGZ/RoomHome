interface PropertyItemPros {
  id: number;
  type: string;
  address: string;
}

export default function PropertyItem(props: PropertyItemPros) {
  return (
    <div class="border-1 border-black rounded-md flex flex-col p-4 gap-2">
      <span>{props.address}</span>
      <span>{props.id}</span>
      <span>{props.type}</span>
    </div>
  );
}
