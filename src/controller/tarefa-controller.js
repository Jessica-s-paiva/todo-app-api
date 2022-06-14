const tarefa = ()=>{
    app.get('/tarefa', (req, res) => {
        res.send('Rota ativada com GET e recurso Tarefa: valores de tarefa devem ser retornados')
    })
}

module.exports = tarefa;