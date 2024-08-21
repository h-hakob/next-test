import { auth } from "auth"
import { prisma } from "@/lib/prisma";

export const GET = auth(async (req) => {
  // if (req.auth) {
    const limit = 4;
    let skip = (parseInt(req.nextUrl.searchParams.get("page") || "1") - 1) * limit;

    const [transactions, count] = await prisma.$transaction([
      prisma.transactions.findMany({
        skip: skip,
        take: limit,
      }),
      prisma.transactions.count()
    ]);

    return Response.json({ data: {
      count_of_pages: Math.ceil(count / limit),
      transactions
    }})
  // }

  // return Response.json({ message: "Not authenticated" }, { status: 401 })
})
