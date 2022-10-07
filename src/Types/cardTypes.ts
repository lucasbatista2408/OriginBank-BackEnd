import { cards } from "@prisma/client";


export type cardData = Omit<cards,"id">

export type card = cards | null