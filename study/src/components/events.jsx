import React from "react";
import InputText from "./InputText";

const Events = () => {
    
    const submitForm = (e) => {
        e.preventDefault()
        console.log('mandou')
    }
    
    return (
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor="Name">Escreva seu nome:</label>
                <InputText id="Name" />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Events