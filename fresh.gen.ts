// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $0 from "./routes/_404.tsx";
import * as $1 from "./routes/_505.tsx";
import * as $2 from "./routes/_app.tsx";
import * as $3 from "./routes/_layout.tsx";
import * as $4 from "./routes/_middleware.ts";
import * as $5 from "./routes/admin/_middleware.ts";
import * as $6 from "./routes/admin/client/index.tsx";
import * as $7 from "./routes/admin/client/register.tsx";
import * as $8 from "./routes/admin/contract/index.tsx";
import * as $9 from "./routes/admin/contract/register.tsx";
import * as $10 from "./routes/admin/date/[id]/index.tsx";
import * as $11 from "./routes/admin/date/index.tsx";
import * as $12 from "./routes/admin/index.tsx";
import * as $13 from "./routes/admin/login.tsx";
import * as $14 from "./routes/admin/owner/empresarial/index.tsx";
import * as $15 from "./routes/admin/owner/empresarial/register.tsx";
import * as $16 from "./routes/admin/owner/index.tsx";
import * as $17 from "./routes/admin/owner/private/index.tsx";
import * as $18 from "./routes/admin/owner/private/register.tsx";
import * as $19 from "./routes/admin/property/index.tsx";
import * as $20 from "./routes/admin/property/register.tsx";
import * as $21 from "./routes/api/_middleware.ts";
import * as $22 from "./routes/api/auth/client/index.ts";
import * as $23 from "./routes/api/auth/client/list.ts";
import * as $24 from "./routes/api/contract/index.ts";
import * as $25 from "./routes/api/date/index.ts";
import * as $26 from "./routes/api/dinosaur/[id].ts";
import * as $27 from "./routes/api/dinosaur/index.ts";
import * as $28 from "./routes/api/index.ts";
import * as $29 from "./routes/api/owner/empresarial/index.ts";
import * as $30 from "./routes/api/owner/empresarial/list.ts";
import * as $31 from "./routes/api/owner/private/index.ts";
import * as $32 from "./routes/api/owner/private/list.ts";
import * as $33 from "./routes/api/property/all.ts";
import * as $34 from "./routes/api/property/available.ts";
import * as $35 from "./routes/api/property/filter.ts";
import * as $36 from "./routes/api/property/list.ts";
import * as $37 from "./routes/date.tsx";
import * as $38 from "./routes/dinosaur/[id]/edit.tsx";
import * as $39 from "./routes/dinosaur/[id]/index.tsx";
import * as $40 from "./routes/dinosaur/index.tsx";
import * as $41 from "./routes/index.tsx";
import * as $42 from "./routes/login.tsx";
import * as $43 from "./routes/logout.ts";
import * as $44 from "./routes/property/[id].tsx";
import * as $45 from "./routes/property/index.tsx";
import * as $46 from "./routes/register.tsx";
import * as $$0 from "./islands/Input.tsx";
import * as $$1 from "./islands/LoginForm.tsx";
import * as $$2 from "./islands/RegisterForm.tsx";
import * as $$3 from "./islands/Select.tsx";
import * as $$4 from "./islands/Slider.tsx";
import * as $$5 from "./islands/client/ListClients.tsx";
import * as $$6 from "./islands/client/NewClientForm.tsx";
import * as $$7 from "./islands/client/SelectClient.tsx";
import * as $$8 from "./islands/contract/ListContracts.tsx";
import * as $$9 from "./islands/contract/NewContractForm.tsx";
import * as $$10 from "./islands/dates/AsignDateForm.tsx";
import * as $$11 from "./islands/dates/ListDates.tsx";
import * as $$12 from "./islands/dates/RequestDateButton.tsx";
import * as $$13 from "./islands/dinosaur/DeleteDinosaurButton.tsx";
import * as $$14 from "./islands/dinosaur/DinosaurList.tsx";
import * as $$15 from "./islands/dinosaur/EditDinosaur.tsx";
import * as $$16 from "./islands/dinosaur/NewDinosaurForm.tsx";
import * as $$17 from "./islands/owner/empresarial/ListOwners.tsx";
import * as $$18 from "./islands/owner/empresarial/NewOwnerForm.tsx";
import * as $$19 from "./islands/owner/private/ListOwners.tsx";
import * as $$20 from "./islands/owner/private/NewOwnerForm.tsx";
import * as $$21 from "./islands/property/FilteredListProperties.tsx";
import * as $$22 from "./islands/property/ListProperties.tsx";
import * as $$23 from "./islands/property/NewProperty.tsx";
import * as $$24 from "./islands/property/SearchPropertiesForm.tsx";
import * as $$25 from "./islands/property/SelectOwner.tsx";
import * as $$26 from "./islands/property/SelectProperty.tsx";

const manifest = {
  routes: {
    "./routes/_404.tsx": $0,
    "./routes/_505.tsx": $1,
    "./routes/_app.tsx": $2,
    "./routes/_layout.tsx": $3,
    "./routes/_middleware.ts": $4,
    "./routes/admin/_middleware.ts": $5,
    "./routes/admin/client/index.tsx": $6,
    "./routes/admin/client/register.tsx": $7,
    "./routes/admin/contract/index.tsx": $8,
    "./routes/admin/contract/register.tsx": $9,
    "./routes/admin/date/[id]/index.tsx": $10,
    "./routes/admin/date/index.tsx": $11,
    "./routes/admin/index.tsx": $12,
    "./routes/admin/login.tsx": $13,
    "./routes/admin/owner/empresarial/index.tsx": $14,
    "./routes/admin/owner/empresarial/register.tsx": $15,
    "./routes/admin/owner/index.tsx": $16,
    "./routes/admin/owner/private/index.tsx": $17,
    "./routes/admin/owner/private/register.tsx": $18,
    "./routes/admin/property/index.tsx": $19,
    "./routes/admin/property/register.tsx": $20,
    "./routes/api/_middleware.ts": $21,
    "./routes/api/auth/client/index.ts": $22,
    "./routes/api/auth/client/list.ts": $23,
    "./routes/api/contract/index.ts": $24,
    "./routes/api/date/index.ts": $25,
    "./routes/api/dinosaur/[id].ts": $26,
    "./routes/api/dinosaur/index.ts": $27,
    "./routes/api/index.ts": $28,
    "./routes/api/owner/empresarial/index.ts": $29,
    "./routes/api/owner/empresarial/list.ts": $30,
    "./routes/api/owner/private/index.ts": $31,
    "./routes/api/owner/private/list.ts": $32,
    "./routes/api/property/all.ts": $33,
    "./routes/api/property/available.ts": $34,
    "./routes/api/property/filter.ts": $35,
    "./routes/api/property/list.ts": $36,
    "./routes/date.tsx": $37,
    "./routes/dinosaur/[id]/edit.tsx": $38,
    "./routes/dinosaur/[id]/index.tsx": $39,
    "./routes/dinosaur/index.tsx": $40,
    "./routes/index.tsx": $41,
    "./routes/login.tsx": $42,
    "./routes/logout.ts": $43,
    "./routes/property/[id].tsx": $44,
    "./routes/property/index.tsx": $45,
    "./routes/register.tsx": $46,
  },
  islands: {
    "./islands/Input.tsx": $$0,
    "./islands/LoginForm.tsx": $$1,
    "./islands/RegisterForm.tsx": $$2,
    "./islands/Select.tsx": $$3,
    "./islands/Slider.tsx": $$4,
    "./islands/client/ListClients.tsx": $$5,
    "./islands/client/NewClientForm.tsx": $$6,
    "./islands/client/SelectClient.tsx": $$7,
    "./islands/contract/ListContracts.tsx": $$8,
    "./islands/contract/NewContractForm.tsx": $$9,
    "./islands/dates/AsignDateForm.tsx": $$10,
    "./islands/dates/ListDates.tsx": $$11,
    "./islands/dates/RequestDateButton.tsx": $$12,
    "./islands/dinosaur/DeleteDinosaurButton.tsx": $$13,
    "./islands/dinosaur/DinosaurList.tsx": $$14,
    "./islands/dinosaur/EditDinosaur.tsx": $$15,
    "./islands/dinosaur/NewDinosaurForm.tsx": $$16,
    "./islands/owner/empresarial/ListOwners.tsx": $$17,
    "./islands/owner/empresarial/NewOwnerForm.tsx": $$18,
    "./islands/owner/private/ListOwners.tsx": $$19,
    "./islands/owner/private/NewOwnerForm.tsx": $$20,
    "./islands/property/FilteredListProperties.tsx": $$21,
    "./islands/property/ListProperties.tsx": $$22,
    "./islands/property/NewProperty.tsx": $$23,
    "./islands/property/SearchPropertiesForm.tsx": $$24,
    "./islands/property/SelectOwner.tsx": $$25,
    "./islands/property/SelectProperty.tsx": $$26,
  },
  baseUrl: import.meta.url,
};

export default manifest;
