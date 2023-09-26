import { z } from "zod";

export const NewDinosaurSchema = z.object({
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  })
    .min(8, {
      message: "Name must be at least 8 characters",
    }),
  description: z.string({
    invalid_type_error: "Description must be a string",
  }).optional(),
});
