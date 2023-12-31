// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_505 from "./routes/_505.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $_middleware from "./routes/_middleware.ts";
import * as $admin_middleware from "./routes/admin/_middleware.ts";
import * as $admin_client_index from "./routes/admin/client/index.tsx";
import * as $admin_client_register from "./routes/admin/client/register.tsx";
import * as $admin_contract_index from "./routes/admin/contract/index.tsx";
import * as $admin_contract_register from "./routes/admin/contract/register.tsx";
import * as $admin_date_id_index from "./routes/admin/date/[id]/index.tsx";
import * as $admin_date_index from "./routes/admin/date/index.tsx";
import * as $admin_index from "./routes/admin/index.tsx";
import * as $admin_login from "./routes/admin/login.tsx";
import * as $admin_owner_empresarial_index from "./routes/admin/owner/empresarial/index.tsx";
import * as $admin_owner_empresarial_register from "./routes/admin/owner/empresarial/register.tsx";
import * as $admin_owner_index from "./routes/admin/owner/index.tsx";
import * as $admin_owner_private_index from "./routes/admin/owner/private/index.tsx";
import * as $admin_owner_private_register from "./routes/admin/owner/private/register.tsx";
import * as $admin_property_index from "./routes/admin/property/index.tsx";
import * as $admin_property_register from "./routes/admin/property/register.tsx";
import * as $api_middleware from "./routes/api/_middleware.ts";
import * as $api_auth_client_index from "./routes/api/auth/client/index.ts";
import * as $api_auth_client_list from "./routes/api/auth/client/list.ts";
import * as $api_contract_index from "./routes/api/contract/index.ts";
import * as $api_date_index from "./routes/api/date/index.ts";
import * as $api_dinosaur_id_ from "./routes/api/dinosaur/[id].ts";
import * as $api_dinosaur_index from "./routes/api/dinosaur/index.ts";
import * as $api_index from "./routes/api/index.ts";
import * as $api_owner_empresarial_index from "./routes/api/owner/empresarial/index.ts";
import * as $api_owner_empresarial_list from "./routes/api/owner/empresarial/list.ts";
import * as $api_owner_private_index from "./routes/api/owner/private/index.ts";
import * as $api_owner_private_list from "./routes/api/owner/private/list.ts";
import * as $api_property_all from "./routes/api/property/all.ts";
import * as $api_property_available from "./routes/api/property/available.ts";
import * as $api_property_filter from "./routes/api/property/filter.ts";
import * as $api_property_list from "./routes/api/property/list.ts";
import * as $date from "./routes/date.tsx";
import * as $dinosaur_id_edit from "./routes/dinosaur/[id]/edit.tsx";
import * as $dinosaur_id_index from "./routes/dinosaur/[id]/index.tsx";
import * as $dinosaur_index from "./routes/dinosaur/index.tsx";
import * as $index from "./routes/index.tsx";
import * as $login from "./routes/login.tsx";
import * as $logout from "./routes/logout.ts";
import * as $property_id_ from "./routes/property/[id].tsx";
import * as $property_index from "./routes/property/index.tsx";
import * as $register from "./routes/register.tsx";
import * as $Input from "./islands/Input.tsx";
import * as $LoginForm from "./islands/LoginForm.tsx";
import * as $RegisterForm from "./islands/RegisterForm.tsx";
import * as $Select from "./islands/Select.tsx";
import * as $Slider from "./islands/Slider.tsx";
import * as $client_ListClients from "./islands/client/ListClients.tsx";
import * as $client_NewClientForm from "./islands/client/NewClientForm.tsx";
import * as $client_SelectClient from "./islands/client/SelectClient.tsx";
import * as $contract_ListContracts from "./islands/contract/ListContracts.tsx";
import * as $contract_NewContractForm from "./islands/contract/NewContractForm.tsx";
import * as $dates_AsignDateForm from "./islands/dates/AsignDateForm.tsx";
import * as $dates_ListDates from "./islands/dates/ListDates.tsx";
import * as $dates_RequestDateButton from "./islands/dates/RequestDateButton.tsx";
import * as $dinosaur_DeleteDinosaurButton from "./islands/dinosaur/DeleteDinosaurButton.tsx";
import * as $dinosaur_DinosaurList from "./islands/dinosaur/DinosaurList.tsx";
import * as $dinosaur_EditDinosaur from "./islands/dinosaur/EditDinosaur.tsx";
import * as $dinosaur_NewDinosaurForm from "./islands/dinosaur/NewDinosaurForm.tsx";
import * as $owner_empresarial_ListOwners from "./islands/owner/empresarial/ListOwners.tsx";
import * as $owner_empresarial_NewOwnerForm from "./islands/owner/empresarial/NewOwnerForm.tsx";
import * as $owner_private_ListOwners from "./islands/owner/private/ListOwners.tsx";
import * as $owner_private_NewOwnerForm from "./islands/owner/private/NewOwnerForm.tsx";
import * as $property_FilteredListProperties from "./islands/property/FilteredListProperties.tsx";
import * as $property_ListProperties from "./islands/property/ListProperties.tsx";
import * as $property_NewProperty from "./islands/property/NewProperty.tsx";
import * as $property_SearchPropertiesForm from "./islands/property/SearchPropertiesForm.tsx";
import * as $property_SelectOwner from "./islands/property/SelectOwner.tsx";
import * as $property_SelectProperty from "./islands/property/SelectProperty.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_505.tsx": $_505,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/_middleware.ts": $_middleware,
    "./routes/admin/_middleware.ts": $admin_middleware,
    "./routes/admin/client/index.tsx": $admin_client_index,
    "./routes/admin/client/register.tsx": $admin_client_register,
    "./routes/admin/contract/index.tsx": $admin_contract_index,
    "./routes/admin/contract/register.tsx": $admin_contract_register,
    "./routes/admin/date/[id]/index.tsx": $admin_date_id_index,
    "./routes/admin/date/index.tsx": $admin_date_index,
    "./routes/admin/index.tsx": $admin_index,
    "./routes/admin/login.tsx": $admin_login,
    "./routes/admin/owner/empresarial/index.tsx":
      $admin_owner_empresarial_index,
    "./routes/admin/owner/empresarial/register.tsx":
      $admin_owner_empresarial_register,
    "./routes/admin/owner/index.tsx": $admin_owner_index,
    "./routes/admin/owner/private/index.tsx": $admin_owner_private_index,
    "./routes/admin/owner/private/register.tsx": $admin_owner_private_register,
    "./routes/admin/property/index.tsx": $admin_property_index,
    "./routes/admin/property/register.tsx": $admin_property_register,
    "./routes/api/_middleware.ts": $api_middleware,
    "./routes/api/auth/client/index.ts": $api_auth_client_index,
    "./routes/api/auth/client/list.ts": $api_auth_client_list,
    "./routes/api/contract/index.ts": $api_contract_index,
    "./routes/api/date/index.ts": $api_date_index,
    "./routes/api/dinosaur/[id].ts": $api_dinosaur_id_,
    "./routes/api/dinosaur/index.ts": $api_dinosaur_index,
    "./routes/api/index.ts": $api_index,
    "./routes/api/owner/empresarial/index.ts": $api_owner_empresarial_index,
    "./routes/api/owner/empresarial/list.ts": $api_owner_empresarial_list,
    "./routes/api/owner/private/index.ts": $api_owner_private_index,
    "./routes/api/owner/private/list.ts": $api_owner_private_list,
    "./routes/api/property/all.ts": $api_property_all,
    "./routes/api/property/available.ts": $api_property_available,
    "./routes/api/property/filter.ts": $api_property_filter,
    "./routes/api/property/list.ts": $api_property_list,
    "./routes/date.tsx": $date,
    "./routes/dinosaur/[id]/edit.tsx": $dinosaur_id_edit,
    "./routes/dinosaur/[id]/index.tsx": $dinosaur_id_index,
    "./routes/dinosaur/index.tsx": $dinosaur_index,
    "./routes/index.tsx": $index,
    "./routes/login.tsx": $login,
    "./routes/logout.ts": $logout,
    "./routes/property/[id].tsx": $property_id_,
    "./routes/property/index.tsx": $property_index,
    "./routes/register.tsx": $register,
  },
  islands: {
    "./islands/Input.tsx": $Input,
    "./islands/LoginForm.tsx": $LoginForm,
    "./islands/RegisterForm.tsx": $RegisterForm,
    "./islands/Select.tsx": $Select,
    "./islands/Slider.tsx": $Slider,
    "./islands/client/ListClients.tsx": $client_ListClients,
    "./islands/client/NewClientForm.tsx": $client_NewClientForm,
    "./islands/client/SelectClient.tsx": $client_SelectClient,
    "./islands/contract/ListContracts.tsx": $contract_ListContracts,
    "./islands/contract/NewContractForm.tsx": $contract_NewContractForm,
    "./islands/dates/AsignDateForm.tsx": $dates_AsignDateForm,
    "./islands/dates/ListDates.tsx": $dates_ListDates,
    "./islands/dates/RequestDateButton.tsx": $dates_RequestDateButton,
    "./islands/dinosaur/DeleteDinosaurButton.tsx":
      $dinosaur_DeleteDinosaurButton,
    "./islands/dinosaur/DinosaurList.tsx": $dinosaur_DinosaurList,
    "./islands/dinosaur/EditDinosaur.tsx": $dinosaur_EditDinosaur,
    "./islands/dinosaur/NewDinosaurForm.tsx": $dinosaur_NewDinosaurForm,
    "./islands/owner/empresarial/ListOwners.tsx": $owner_empresarial_ListOwners,
    "./islands/owner/empresarial/NewOwnerForm.tsx":
      $owner_empresarial_NewOwnerForm,
    "./islands/owner/private/ListOwners.tsx": $owner_private_ListOwners,
    "./islands/owner/private/NewOwnerForm.tsx": $owner_private_NewOwnerForm,
    "./islands/property/FilteredListProperties.tsx":
      $property_FilteredListProperties,
    "./islands/property/ListProperties.tsx": $property_ListProperties,
    "./islands/property/NewProperty.tsx": $property_NewProperty,
    "./islands/property/SearchPropertiesForm.tsx":
      $property_SearchPropertiesForm,
    "./islands/property/SelectOwner.tsx": $property_SelectOwner,
    "./islands/property/SelectProperty.tsx": $property_SelectProperty,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
