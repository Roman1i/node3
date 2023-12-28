const express = require('express');
const fs = require('fs');
const path = require('path')
const app = express();
const dir = path.join(__dirname, 'count.json');
let count

app.use((req, res, next) => {
    count = JSON.parse(fs.readFileSync(dir, 'utf-8'))
    next()
    fs.writeFileSync(dir, JSON.stringify(count, null, 4))
})

app.get('/', (req, res) => {
    res.send(`<h1>Home</h1> <h1>${++count.main}</h1> <a href="/about">about</a>`)
});
app.get('/about', (req, res) => {
    res.send(`<h1>About</h1> <h1>${++count.about}</h1> <a href="/">home</a>`)
})

app.listen(3000)