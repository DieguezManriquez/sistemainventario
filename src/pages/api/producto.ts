import type { APIRoute } from "astro"
import { date } from "astro/zod"
import { PRODUCTOS,db } from "astro:db"
export const POST: APIRoute = async ({ params, request }) => {
    const respuesta = await request.json()
    const producto = {
        id: respuesta.codigo,
        nombre: respuesta.producto,
        cantidad: parseInt(respuesta.cantidad),
        unidad: parseInt(respuesta.unidad),
        fechaIngreso: new Date(respuesta.fecha)
    }
    console.log("produc:", producto)
    await db.insert(PRODUCTOS).values(producto)
    return new Response("Producto registrado", { status: 202 })
}