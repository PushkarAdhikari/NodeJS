const express = require('express');
const app = express();
const PORT = 4000

app.get('/', (req, res) => {
    return res.send('Hello from Homepage');
});

app.get('/about', (req, res) => {
    return res.send('Hello from About page');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});