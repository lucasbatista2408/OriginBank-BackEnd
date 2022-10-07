import { cards } from "@prisma/client";


export type cardData = Omit<cards,"id">