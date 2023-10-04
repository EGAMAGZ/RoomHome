interface OwnerItemProps {
  id: number;
  name: string;
  contact_name: string;
  address: string;
  phone: string;
}

export default function OwnerItem(props: OwnerItemProps) {
  return (
    <div class="border-1 border-black rounded-md flex flex-col p-4 gap-2">
      <span>{props.id}</span>
      <span>{props.name}</span>
      <span>{props.contact_name}</span>
      <span>{props.address}</span>
      <span>{props.phone}</span>
    </div>
  );
}
