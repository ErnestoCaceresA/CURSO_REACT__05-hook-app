import React, { useEffect, useState } from 'react';

const Message = () => {

    const [coordenadas, setCoordenadas] = useState({x: 0 , y: 0})
    const {x,y} = coordenadas;


    useEffect(() => {

        const mouseMove = (e) => {
            const coordenadasMouse = {x: e.x , y: e.y}
            console.log(coordenadas)
            setCoordenadas(coordenadasMouse)
        }

        window.addEventListener("mousemove", mouseMove) /*cuando se lanze este componente condicionado se lamzará este evento de cuando mueves el mouse, y cuando este componente ya no es verdadero en la condicional
        todavia se seguira efectuando este evento aunque ya en la condicional este component no deberia seguir ejecutandose PARA ESO SE USA EL RETURN Y AHI DENTRO LO QUE SE VA A LIMPIAR DESPUES DE QUE SE REALICE ESTO*/
        // e incluso si la condicional del componente es falsa despues verdadera despues falsa y asi muchas veces, este lister se ejecutara todas esas veces que cambio de true a false entonces UN CHINGO DE RAM A LA BASURA
        console.log("Message montado"); //si el name == "Ernesto" se realizara esto


        return () => {
            window.removeEventListener("mousemove", mouseMove) /* se quita el eventListener para que deje de ejecutarse y no consuma memoria */
            console.log("Message desmontado"); //en el momento que borre cualquier letra del "Ernesto" o borre se realizará esto
        }


    }, []) //solo una vez

    return (
        <>
          <h3>Tu nombre es Ernesto</h3>  
          <p>
              x:{x} y:{y}
          </p>
        </>
    );
}

export default Message;
