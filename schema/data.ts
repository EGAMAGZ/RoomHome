import { InmueblesAlquiler } from "@/generated/client/deno/edge.ts";

// deno-lint-ignore no-explicit-any
export type Data<T = any> = T & { error: string };

export type SearchPropertyData = {
    properties: InmueblesAlquiler[];
    amount: number;
    rooms: number;
}