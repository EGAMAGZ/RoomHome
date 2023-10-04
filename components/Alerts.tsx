interface AlertProps {
  message: string;
  classList?: string;
}

export function Alert({ message, classList }: AlertProps) {
  return (
    <div
      class={`px-4 py-2 bg-red-100 border border-red-400 text-red-700 ${
        classList ?? ""
      }`}
      role="alert"
    >
      {message}
    </div>
  );
}
