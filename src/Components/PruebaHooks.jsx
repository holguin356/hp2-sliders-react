import { useState, useEffect } from "react"


const PruebaHooks = ( {contador, setContador} ) => {

    let arr = [
    "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Peppa_Pig_logo.svg/1200px-Peppa_Pig_logo.svg.png",
    "https://i.ytimg.com/vi/glVEh5k849Q/maxresdefault.jpg",
    "https://estereofonica.com/wp-content/uploads/2021/04/peppa-pig-24-horas-seguidas-este-fin-de-semana_bdd-still-06.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Peppa_Pig_logo.svg/1200px-Peppa_Pig_logo.svg.png",
    "https://i.ytimg.com/vi/glVEh5k849Q/maxresdefault.jpg",
    "https://estereofonica.com/wp-content/uploads/2021/04/peppa-pig-24-horas-seguidas-este-fin-de-semana_bdd-still-06.png"
   ]

    
    const [img, setImg ] = useState("")

    useEffect( ()=>{
       setImg(arr[contador])
    }, [contador] )

  return (
    <div className="slider">
        <h4 style={{color:"red", fontSize:16}}>{contador+1}</h4>
        <img src={img} alt="" />
      <div className="botones">
      <button disabled={contador<=0} onClick={ ()=> setContador( contador - 1 ) }>⪻</button>
      <button disabled={contador>=arr.length-1} onClick={ ()=> setContador( contador + 1 ) }>⪼</button>
      </div>
    </div>
   
  )
}

export default PruebaHooks
