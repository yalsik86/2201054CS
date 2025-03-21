const axios = require("axios");
const { fetchAuthToken } = require("./authService");
require("dotenv").config();

const API_MAP = {
    p: "primes",
    f: "fibo",
    e: "even",
    r: "rand"
};

const fetchNumbers = async (type) => {
    const url = `${process.env.THIRD_PARTY_BASE_URL}/${API_MAP[type]}`;
    
    try {
        const token = await fetchAuthToken(); 
        const response = await axios.get(url, {
            timeout: 500,
            headers: {
                Authorization: `Bearer ${token}` 
            }
        });

        return response.data.numbers || [];
    } catch (error) {
        return [];
    }
};

module.exports = { fetchNumbers };
