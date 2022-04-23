import React, {useState} from 'react'
import "./MiTarjeta.scss"

const MiTarjeta = () => {

    const [number, setNumber] = useState("")
        const [buttonTurned, setButtonTurned] = useState(true)
        const [turnCard, setTurnCard] = useState(true);
        const [cardInfoName, setCardInfoName] = useState("")
        const [month, setMonth] = useState("")
        const [myYear, setMyYear] = useState("")
        const [myCode, setMyCode] = useState("")

    const numberHandler = (event) => {
        
        


        // Guardar el valor de la tarjeta
        let numTarjeta = event.target.value;

        // Elimina los espacios del string para re-aplicarlos luego
        numTarjeta = numTarjeta.replace(/\s/g, '');

        // Solo permitir números en el input
        numTarjeta = numTarjeta.replace(/[^0-9]/g, '');

        // Insertar (Usando expresiones regulares), cada 4 caracteres un espacio.
        let numTarjetaFormateado = numTarjeta.replace(/.{4}/g, '$& ');

        // Eliminar los "trailing spaces" si hay más de 19 caracteres
        if (numTarjetaFormateado.length > 19) {
            numTarjetaFormateado = numTarjetaFormateado.trim()
        }

        // Cambiar el valor a mostrar en la tarjeta
        setNumber(numTarjetaFormateado);
    }

    const nameCardHandler = (event) => {

        const nombreTarjeta = event.target.value;
        setCardInfoName(nombreTarjeta.replace(/[0-9]|[-.@><,:;]/g, ''))
    }

    const monthHandler = (event) => {
        setMonth(event.target.value)
    }

    const yearHandler = (event) => {
        setMyYear(event.target.value)
    }

    const codeHandler = (event) => {

        // Guardar el valor del código
        let ccv = event.target.value;

        // Solo permitir números en el input
        ccv = ccv.replace(/[^0-9]/g, '');

        // Cambiar el valor
        setMyCode(ccv);
    }

    /* Turn Button / Form */
    const myButton = () => {
        setButtonTurned(!buttonTurned)
    };
    const turnButton = buttonTurned ? 'btn-abrir-formulario active' : 'btn-abrir-formulario'

    /* Turn Card */
    const myCard = () => {
        setTurnCard(!turnCard)
    }
    const cardTurned = turnCard ? 'tarjeta' : 'tarjeta active'

  return (
    <div>
       <div className='contenedor__checkout'>
            <section className={cardTurned} >

                {/* TARJETA DELANTERA */}
                <div className="delantera">
                    <div className="logo-marca">
                        <img src="/visa.png" alt="logo visa" />
                    </div>
                    <img src="/chip-tarjeta.png" className="chip" alt="chip tarjeta" />

                    <div className="datos">
                        <div className="grupo" id="numero">
                            <p className="label">Número tarjeta</p>
                            <p className="numero">{number ? number : "#### #### #### ####"}</p>
                        </div>

                        <div className="flexbox">
                            <div className="grupo" id="nombre">
                                <p className="label">Nombre Tarjeta</p>
                                <p className="nombre">{cardInfoName ? cardInfoName : "Jhon Doe"}</p>
                            </div>

                            <div className="grupo" id="expiracion">
                                <p className="label">Expiracion</p>
                                <p className="expiracion">
                                    <span className="mes">{month ? month : "MM"}</span> / <span className="year">{myYear ? myYear : "AA"}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


              
            </section>


           
        </div>  
    </div>
  )
}

export default MiTarjeta