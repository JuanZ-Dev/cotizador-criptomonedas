import type z from "zod";
import type {
  CryptocurrencyResponseSchema,
  CurrencySchema,
  PairSchema,
} from "../schema/crypto-schema";

export type Currency = z.infer<typeof CurrencySchema>;
export type Cryptocurrency = z.infer<typeof CryptocurrencyResponseSchema>;
export type Pair = z.infer<typeof PairSchema>;
