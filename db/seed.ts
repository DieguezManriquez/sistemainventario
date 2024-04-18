import { UNIDADES, db } from 'astro:db';

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
}
