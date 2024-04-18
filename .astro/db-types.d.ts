// This file is generated by Astro DB
declare module 'astro:db' {
	export const PRODUCTOS: import("@astrojs/db/runtime").Table<
		"PRODUCTOS",
		{"id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"PRODUCTOS","primaryKey":true}},"nombre":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"nombre","collection":"PRODUCTOS","primaryKey":false,"optional":false}},"cantidad":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"cantidad","collection":"PRODUCTOS","primaryKey":false,"optional":false}},"unidad":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"unidad","collection":"PRODUCTOS","primaryKey":false,"optional":false,"references":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"UNIDADES","primaryKey":true}}}},"fechaIngreso":{"type":"date","schema":{"optional":false,"unique":false,"deprecated":false,"name":"fechaIngreso","collection":"PRODUCTOS"}}}
	>;
	export const UNIDADES: import("@astrojs/db/runtime").Table<
		"UNIDADES",
		{"id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"UNIDADES","primaryKey":true}},"unidades":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"unidades","collection":"UNIDADES","primaryKey":false,"optional":false}}}
	>;
}
