
export const dataMuebles = async () =>{
    const response = await fetch('http://localhost:3000/muebles');
    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }
    const result = await response.json();
    return result;
}

// export const dataMuebles = async () =>{
//   const response = await fetch('http://localhost:8080/api/v1/products');
//   if (!response.ok) {
//     throw new Error('Error al obtener los datos');
//   }
//   const result = await response.json();
//   return result;
// }