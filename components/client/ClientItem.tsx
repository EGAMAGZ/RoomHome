interface ClientItemProps {
  id: number;
  name: string;
  phone: string;
  email: string;
}

export default function ClientItem(props: ClientItemProps) {
  return (
    <div class="border-1 border-black rounded-md flex flex-col p-4 gap-2">
      <span>{props.id}</span>
      <span>{props.name}</span>
      <span>{props.phone}</span>
      <span>{props.email}</span>
    </div>
  );
}
