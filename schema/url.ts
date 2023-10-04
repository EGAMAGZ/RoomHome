import { z } from "zod";

export const AdminUrlSchema = z.string()
  .startsWith("/admin/");
