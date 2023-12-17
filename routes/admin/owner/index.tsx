export default function PropietaryPage() {
  return (
    <div class="flex justify-center px-4">
      <div class="container flex flex-col gap-4 py-4 font-sans">
        <div class="flex flex-col md:flex-row gap-4 md:gap-2 md:items-center">
          <span class="text-4xl font-semibold">
            Propietarios
          </span>
        </div>
        <div class="card shadow">
          <div class="card-body">
            <span class="card-title">
              Tipo de propietarios
            </span>
            <ul class="menu menu-md bg-base-200 rounded-box">
              <li>
                <a href="/admin/owner/empresarial">Propietarios empresariales</a>
              </li>
              <li>
                <a href="/admin/owner/private">Propietarios privados</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
