const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

async function start() {
    try {
        await mongoose.connect(process.env.MONGO_URL);

        app.listen(PORT, () => {
            console.log(`Server started on ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();