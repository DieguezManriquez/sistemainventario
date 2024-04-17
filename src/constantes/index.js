

export const unidades = [
    "Kilos", "Litros", "Cajas", "Unidad"
]
export const productos = [
    {
        id: "producto_1",
        nombre: "nombre",
        cantidad: 0,
        unidad: "Kilos",
        fechaIngreso: "2024-04-10",
    },
    {
        id: "producto_2",
        nombre: "nombre2",
        cantidad: 2,
        unidad: "Kilos",
        fechaIngreso: "2024-04-10",
    },
    {
        id: "producto_3",
        nombre: "nombre3",
        cantidad: 3,
        unidad: "Kilos",
        fechaIngreso: "2024-04-10",
    },
];

export function agregarProducto(producto){
productos.push(producto)
console.log(productos)
}
