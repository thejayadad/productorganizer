'use server'
import { revalidatePath } from "next/cache"
import prisma from "../prisma"


export async function deleteProduct(formData){
    try {
        const id = formData.get('id')
        await prisma.product.delete({
            where: {
                id
            }
        })
    } catch (error) {
        console.log("Error " + error)
    }
    revalidatePath("/dashboard")
}