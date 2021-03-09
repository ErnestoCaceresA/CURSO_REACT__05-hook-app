import React, { useEffect, useState } from 'react';
import "./effects.css"
import Message from './Message';

const SimpleForm = () => {

    // -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // USE EFFECT: Es un hook que permite ejecutar algun efecto secundario cuando algo suceda en nuestro componente (realiza las acciones dentro si la variable que se le pasa cambia)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    const [formState, setFormState] = useState({ //formState es un objeto con dos propiedades
        name: "",
        email: ""
    });
    const {name, email} = formState;

    //efectos
    useEffect( () => {
        console.log("Hey esto unicamente aparece una vez al inicio");
    }, [] ) //SI COMO SEGUNDO ARGUMENTO DEL USEEFFECT LE MANDO LOS CORCHETES VACIOS ENTONCES LO QUE ESTE DENTRO SOLAMENTE SE EJECUTARÁ UNA VEZ

    useEffect( () => {
        console.log("El formState cambió")
    }, [formState] ) //EFECTUA LO QUE ESTA DENTRO DEL HOOK SOLAMENTE SI LA VARIBALE DENTRO DE LOS CORCHETES DEL SEGUNDO ARGUMENTO CAMBIA

    useEffect(() => {
        console.log("El email cambió")
    }, [email])

    const handleInputChange = ({target}) => { //FUNCION DONDE AL ESCRIBIR EN EL INPUT (sin boton de submit) EN AUTOMATICO SE CAMBIAN LAS VARIABLES QUE ESTAN EN EL "value" DEL INPUT
        // console.log(e.target.name);
        // console.log(e.target.value);

        setFormState({
            ...formState, //spread por si hay algo que no cambia en el objeto que se quede igual

            [target.name]: target.value //valor del target name se lo asigna al targe.value
            //TARGET.NAME = propiedad del input abajo en el html donde viene como valor el nombre y el email en el segundo
            //TARGET.VALUE = propiedad del input abajo en el html donde como valor literalmente es las variables nombre y email {nombre} {email}
        });
    }


    // clasName = "form-group" ${es de bootstrap}
    // clasName = "form-control" ${es de bootstrap}
    return (
        <>
            <h1>useEffect</h1>
            <hr/>

            <div className = "form-group">
                <input 
                    type="text" 
                    name = "name" 
                    className = "form-control" 
                    placeholder = "Tu nombre (introduce Ernesto)" 
                    autoComplete = "off" 
                    value = {name} 
                    onChange = {handleInputChange} 
                />
            </div>

            <div className = "form-group">
                <input 
                    type="text" 
                    name = "email" 
                    className = "form-control" 
                    placeholder = "email@gmail.com" 
                    autoComplete = "off" 
                    value = {email} 
                    onChange = {handleInputChange} 
                />
            </div>


            { (name === "Ernesto" ) && <Message/>  /* unicamente cuando el valor del name sea "Ernesto" se renderizara el componente Message*/}
        </>
    );
}

export default SimpleForm;
