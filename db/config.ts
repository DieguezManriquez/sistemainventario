import { defineDb, defineTable, column } from 'astro:db';

const PRODUCTOS = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    nombre: column.text(),
    cantidad: column.number(),
    unidad: column.number({ references: () => UNIDADES.columns.id }),
    fechaIngreso: column.date()
  }
})

const UNIDADES = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    unidades: column.text()
  }
})


// https://astro.build/db/config
export default defineDb({
  tables: {
    PRODUCTOS, UNIDADES
  }
});