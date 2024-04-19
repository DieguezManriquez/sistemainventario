import { PRODUCTOS, UNIDADES, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(UNIDADES).values([
		{
			id: 0,
			unidades: "kilos"
		},
		{
			id: 1,
			unidades: "Litros"
		},
		{
			id: 2,
			unidades: "Caja"
		},
		{
			id: 4,
			unidades: "Unidad"
		}
	])

	await db.insert(PRODUCTOS).values([
		{
			id: "001",
			nombre: "producto 1",
			cantidad: 2,
			unidad: 1,
			fechaIngreso: new Date()
		}
	])
}
