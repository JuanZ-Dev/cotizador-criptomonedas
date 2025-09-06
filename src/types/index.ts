import type z from "zod";
import type { CurrencySchema } from "../schema/crypto-schema";

export type Currency = z.infer<typeof CurrencySchema>;
