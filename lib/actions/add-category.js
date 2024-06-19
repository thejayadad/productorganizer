'use server'
import prisma from "../prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function addCategory(formData){
    const {name, creator} = Object.fromEntries(formData)
    try {
        newCategory = await prisma.category.create({
            data: {
                name, creator
            }
        })
    } catch (error) {
        console.log("Error " + error)        
    }
    revalidatePath("/dashboard")
    redirect("/")
}