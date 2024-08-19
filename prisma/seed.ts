import { PrismaClient } from '@prisma/client'
import { hashSync } from "bcryptjs";

const prisma = new PrismaClient()

async function main() {
    console.log(`Start seeding ...`)

    await prisma.user.create({
      data: {
          name: "user",
          email: "user@user.com",
          password: hashSync("12345678", 10)
      }
    });

    const transactions = [
      {
        title:     "NL KPN 1 Month",
        method:    "BTC",
        amount:    12.5,
        status: true
      },
      {
        title:     "NL KPN 1 Month",
        method:    "BTC",
        amount:    12.2,
        status: false
      },
      {
        title:     "NL KPN 1 Month",
        method:    "BTC",
        amount:    12.1,
        status: true
      },
      {
        title:     "NL KPN 1 Month",
        method:    "BTC",
        amount:    12.2,
        status: false
      },
      {
        title:     "NL KPN 1 Month",
        method:    "BTC",
        amount:    13.2,
        status: true
      },
      {
        title:     "NL KPN 1 Month",
        method:    "BTC",
        amount:    14.2,
        status: true
      },
      {
        title:     "NL KPN 1 Month",
        method:    "BTC",
        amount:    11.2,
        status: true
      },
      {
        title:     "NL KPN 1 Month",
        method:    "BTC",
        amount:    22.2,
        status: true
      },
      {
        title:     "NL KPN 1 Month",
        method:    "BTC",
        amount:    42.2,
        status: true
      },
      {
        title:     "NL KPN 1 Month",
        method:    "BTC",
        amount:    52.2,
        status: true
      },
    ];

    for (let transaction of transactions) {
      await prisma.transactions.create({
        data: transaction
      });
    }

    console.log(`Seeding finished.`)
  }
  
  main()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })