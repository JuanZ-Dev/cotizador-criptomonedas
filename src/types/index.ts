import type z from "zod";
import type {
  CryptoCurrencyResponseSchema,
  CurrencySchema,
} from "../schema/crypto-schema";

export type Currency = z.infer<typeof CurrencySchema>;
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>;
