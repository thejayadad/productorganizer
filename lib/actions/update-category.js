'use server'
import prisma from "../prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function updateCategory(formData){
    const {name, id} = Object.fromEntries(formData)
    try {
        updateCategory = await prisma.category.update({
            where:{
                id: id,
            },
            data: {
                name: name
            }
        })
    } catch (error) {
        console.log("Error " + error)        
    }
    revalidatePath("/dashboard")
    redirect("/dashboard")
}