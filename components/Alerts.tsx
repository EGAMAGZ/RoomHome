interface AlertProps {
  message: string;
}

export function Alert({ message }: AlertProps) {
  return (
    <div
      class="px-4 py-2 bg-red-100 border border-red-400 text-red-700"
      role="alert"
    >
      {message}
    </div>
  );
}
