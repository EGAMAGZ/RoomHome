import { PrismaClient } from "@/generated/client/deno/edge.ts";
import { withAccelerate } from "@prisma/extension-accelerate";

const prismaClient = new PrismaClient().$extends(withAccelerate());
export default prismaClient;
