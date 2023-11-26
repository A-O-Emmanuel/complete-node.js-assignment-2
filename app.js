const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log(`The first middleware`);
//     next();
// });

// app.use((req, res, next) => {

//     return res.send(`The second middleware`);
// });


app.use('/users', (req, res, next) => {
    res.send(`<h1>The second middleware</h1>`);
});

app.use('/', (req, res, next) => {
    res.send(`<h1>The first middleware</h1>`)
});


const port = 2000
app.listen(port, () => {
    console.log(`Server started at ${port}`)
});