# RoomHome

## Requerimientos

| Tecnologia | Versión | Link|
|-------------|---------|---|
|Deno|1.37.1 | [Home](https://deno.com/) [Intalacion](https://docs.deno.com/runtime/manual/getting_started/installation) |
| Fresh | 1.4.3 | [Home](https://fresh.deno.dev/) |
| Preact | 10.5.1 | [Home](https://preactjs.com/) |
| Zod | 3.22.2 | [Home](https://zod.dev/) |
| Tabler icons | 2.23.0 | [Home](https://tabler-icons.io/) |
| Twind | 1.0.7 | [Home](https://twind.dev/) [Home - Style](https://twind.style/installation) |
| Supabase | N/A | [Home](https://supabase.com/) |

## Usage

Antes que nada, se debe instalar Deno: <https://deno.land/manual/getting_started/installation>

- Para inicializar proyecto:

```shell
deno task start
```

Esto estará observando la carpeta del proyecto y reiniciar en caso de ser necesario.

- Checar y formatear codigo:

```shell
deno task check
```

- Visualizar los datos registrados:
En caso de no contar acceso a Prisma Data Platform, se puede el siguiente comando para visualizar los datos en un panel de control:

```shell
deno run prisma:studio
```

- Subir cambios de modelo de base de datos:
Esto subiran los cambios en la base de datos, pero borrara los datos existentes. Automaticamente generará una actulización de la libreria para cliente de Prisma.

```shell
deno task prisma:push
```

- Generar manualmente libreria de cliente de Prisma:

```shell
deno task prisma:generate
```

## Configuración

### Entornos de desarrollo

Por parte de los entornos se encuentran configurados los siguientes:

- Production
- Development

Se encuentran configurados los siguientes entornos de desarrollo:

- Cada entorno se encuentr configurado con la misma instancia de Prisma con diferentes entornos de desarrollo (indicado conforme a la variable `DIRECT_URL`).
- Cada entorno cuenta con una diferente instancia de Supabase (que hace uso de manegador de base de datos Postgres).

### Sincronizacion de modelo de base de datos

Al hacer commit de los cambios, se sincronizan los cambios con la base de datos de Prisma. Esto aplica para las ramas `development` y `master`.

### Linting y formato

Se utilizará el linting y formato proveido por mismo Deno y Prisma, y la configuracion establecida en `.editorconfig`.

### Variables de entorno utilizados

Tanto para desarrollo como para producción se utilizan las siguientes variables de entorno en `.env`:

- **DATABASE_URL**: URL que se utiliza para conectarse con Prisma.
- **DIRECT_URL**: URL que se utiliza para conectarse directamente con la base de datos (proveida por Supabase).

## Commits

Para los mensajes de los commits, de preferencia hacer uso del estandar de [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
