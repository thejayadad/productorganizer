import { PrismaClient } from "@prisma/client";

const prismaClientSingle = () => {
    return new PrismaClient()
}

const globalForPrisma = globalThis;

const prisma = globalForPrisma.prisma ?? prismaClientSingle()

export default prisma

if(process.env.NODE_ENV !== 'production'){
    globalForPrisma.prisma = prisma
}