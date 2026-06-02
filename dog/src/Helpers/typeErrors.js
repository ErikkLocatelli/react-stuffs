const types = {
    email: {
        regex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
        message: 'Preencha um email válido'
    },

    number: {
        regex: /^\d+$/, 
        message: "Utilize apenas números"
    }
}

export default types
