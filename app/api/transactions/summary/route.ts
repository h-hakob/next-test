import { auth } from "auth"
import { prisma } from "@/lib/prisma";

export const GET = auth(async (req) => {
    if (req.auth) {
      const data = await prisma.$queryRaw<any[]>`select cast(count(amount) as INTEGER) as active_items, sum(amount) total_amount from transactions t where status is true`

      if (!data || !data[0]) {
        return Response.json({ data: {
          active_items: 0,
          total_amount: 0

        } })
      }

      return Response.json({ data: data[0] })
    // }
  
    return Response.json({ message: "Not authenticated" }, { status: 401 })
  })