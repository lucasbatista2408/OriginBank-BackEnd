import { transactions } from "@prisma/client";


export type transactionData = Omit<transactions,"id">