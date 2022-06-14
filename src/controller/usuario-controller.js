export const usuario = (app)=>{
    app.get('/usuario', (req, res) => {
        res.send('Rota ativada com GET e recurso Usuario: valores de usuario devem ser retornados')
    })
}

// module.exports = usuario;