const peticionHttp = async(ruta, metodo = 'GET', body) => {
    const data = await fetch(ruta, {method: metodo, body: metodo !== 'GET' ? JSON.stringify(body) : undefined, headers: {'Content-Type': 'application/json'}})
    const respuesta = await data.json()
    return respuesta;
  };

  export default peticionHttp;