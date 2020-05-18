const express = require('express') // require is take ('') from Node Module.
const app = express()
const port = 4000

function handleListening(){
    console.log(`Listening on : http://localhost:${port}`)
}

app.listen(port,handleListening)
// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))