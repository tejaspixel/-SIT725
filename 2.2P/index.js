const exp = require('express');
const ap = exp();
const port = 5000;

ap.get('/add/:no1?/:no2?', (req, res) => {
    const no1 = req.params.no1;
    const no2 = req.params.no2;
    if (!no1 || !no2) {
        return res.status(400).send("Just give numbers 1 and 2 as query parameters, such as 'add/5/10'.");
    }
    const result = parseFloat(no1) + parseFloat(no2);
    res.json(`The addition of ${no1} and ${no2} is ${result}.`);
});

ap.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
});
