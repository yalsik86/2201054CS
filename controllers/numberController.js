const { fetchNumbers } = require('../services/numberService');

let numberWindow = [];

const getNumbers = async (req, res) => {
    const { numberid } = req.params;
    const windowSize = parseInt(process.env.WINDOW_SIZE, 10);

    if (!['p', 'f', 'e', 'r'].includes(numberid)) {
        return res.status(400).json({ error: "Invalid number ID. Use 'p', 'f', 'e', or 'r'." });
    }

    const prevState = [...numberWindow];

    try {
        const numbers = await fetchNumbers(numberid);
        const uniqueNumbers = numbers.filter(n => !numberWindow.includes(n));

        numberWindow = [...numberWindow, ...uniqueNumbers].slice(-windowSize);
        
        const avg = numberWindow.length ? (numberWindow.reduce((a, b) => a + b, 0) / numberWindow.length).toFixed(2) : 0;

        res.json({
            windowPrevState: prevState,
            windowCurrState: numberWindow,
            numbers,
            avg: parseFloat(avg)
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch numbers" });
    }
};

module.exports = { getNumbers };
