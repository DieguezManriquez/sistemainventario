export const POST = async({params,request}) => {
const producto = await request.json()
console.log(producto)
}