-- CreateTable
CREATE TABLE "Dinosaur" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Dinosaur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Empleados" (
    "num_empleado" SERIAL NOT NULL,
    "nom_empleado" VARCHAR(25) NOT NULL,
    "dir_empleado" VARCHAR(60) NOT NULL,
    "cat_empleado" CHAR(2) NOT NULL,
    "sal_empleado" INTEGER NOT NULL,
    "nom_supervisor" VARCHAR(25) NOT NULL,
    "email_empleado" TEXT NOT NULL,
    "pass_empleado" VARCHAR(255) NOT NULL,

    CONSTRAINT "Empleados_pkey" PRIMARY KEY ("num_empleado")
);

-- CreateTable
CREATE TABLE "InmueblesAlquiler" (
    "num_inmueble" SERIAL NOT NULL,
    "dir_inmueble" VARCHAR(60) NOT NULL,
    "tipo_inmueble" VARCHAR(20) NOT NULL,
    "num_habitaciones" SMALLINT NOT NULL,
    "import_mensual" BIGINT NOT NULL,
    "num_propietario" INTEGER,
    "num_propietario_em" INTEGER,

    CONSTRAINT "InmueblesAlquiler_pkey" PRIMARY KEY ("num_inmueble")
);

-- CreateTable
CREATE TABLE "PropietariosPrivados" (
    "num_propietario" SERIAL NOT NULL,
    "nom_propietario" VARCHAR(25) NOT NULL,
    "dir_propietario" VARCHAR(30) NOT NULL,
    "tel_propietario" VARCHAR(10) NOT NULL,

    CONSTRAINT "PropietariosPrivados_pkey" PRIMARY KEY ("num_propietario")
);

-- CreateTable
CREATE TABLE "PropietariosEmpresariales" (
    "num_propietario_em" SERIAL NOT NULL,
    "nom_propietario_em" VARCHAR(25) NOT NULL,
    "tipo_empresa" VARCHAR(30) NOT NULL,
    "dir_empresa" VARCHAR(20) NOT NULL,
    "tel_propietario_em" VARCHAR(10) NOT NULL,
    "nom_contacto" VARCHAR(25) NOT NULL,

    CONSTRAINT "PropietariosEmpresariales_pkey" PRIMARY KEY ("num_propietario_em")
);

-- CreateTable
CREATE TABLE "Clientes" (
    "num_cliente" SERIAL NOT NULL,
    "nom_cliente" VARCHAR(25) NOT NULL,
    "tel_cliente" VARCHAR(10) NOT NULL,
    "tipo_inmueble" VARCHAR(20) NOT NULL,
    "importmax_inmueble" INTEGER NOT NULL,
    "nom_empleado" VARCHAR(25) NOT NULL,
    "sucregistro_cielte" VARCHAR(30) NOT NULL,

    CONSTRAINT "Clientes_pkey" PRIMARY KEY ("num_cliente")
);

-- CreateTable
CREATE TABLE "ContratosAlquiler" (
    "num_contrato" SERIAL NOT NULL,
    "num_cliente" INTEGER NOT NULL,
    "nom_cliente" VARCHAR(25) NOT NULL,
    "dir_cliente" VARCHAR(20) NOT NULL,
    "num_inmueble" INTEGER NOT NULL,
    "dir_inmueble" VARCHAR(30) NOT NULL,
    "import_mensual" BIGINT NOT NULL,
    "mod_pago" VARCHAR(25) NOT NULL,
    "dep_pago" VARCHAR(25) NOT NULL,
    "dur_contrato" BIGINT NOT NULL,
    "fech_inicio" DATE NOT NULL,
    "fech_fin" DATE NOT NULL,

    CONSTRAINT "ContratosAlquiler_pkey" PRIMARY KEY ("num_contrato")
);

-- CreateTable
CREATE TABLE "Citas" (
    "num_cita" SERIAL NOT NULL,
    "num_cliente" INTEGER NOT NULL,
    "num_inmueble" INTEGER NOT NULL,
    "fech_cita" DATE NOT NULL,

    CONSTRAINT "Citas_pkey" PRIMARY KEY ("num_cita")
);

-- CreateIndex
CREATE UNIQUE INDEX "Empleados_dir_empleado_key" ON "Empleados"("dir_empleado");

-- AddForeignKey
ALTER TABLE "InmueblesAlquiler" ADD CONSTRAINT "InmueblesAlquiler_num_propietario_fkey" FOREIGN KEY ("num_propietario") REFERENCES "PropietariosPrivados"("num_propietario") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InmueblesAlquiler" ADD CONSTRAINT "InmueblesAlquiler_num_propietario_em_fkey" FOREIGN KEY ("num_propietario_em") REFERENCES "PropietariosEmpresariales"("num_propietario_em") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContratosAlquiler" ADD CONSTRAINT "ContratosAlquiler_num_cliente_fkey" FOREIGN KEY ("num_cliente") REFERENCES "Clientes"("num_cliente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContratosAlquiler" ADD CONSTRAINT "ContratosAlquiler_num_inmueble_fkey" FOREIGN KEY ("num_inmueble") REFERENCES "InmueblesAlquiler"("num_inmueble") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Citas" ADD CONSTRAINT "Citas_num_cliente_fkey" FOREIGN KEY ("num_cliente") REFERENCES "Clientes"("num_cliente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Citas" ADD CONSTRAINT "Citas_num_inmueble_fkey" FOREIGN KEY ("num_inmueble") REFERENCES "InmueblesAlquiler"("num_inmueble") ON DELETE RESTRICT ON UPDATE CASCADE;
