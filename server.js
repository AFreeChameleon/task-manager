const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 5000;

app.get('/api/tasklist', (req, res) => {
    const taskList = JSON.parse(fs.readFileSync('./data/data.json'));
    return res.json(taskList);
})

app.listen(PORT, () => console.log(`API server running on ${PORT}`));