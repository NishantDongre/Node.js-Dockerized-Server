const express = require("express");
const dotenv = require("dotenv");

const PORT = process.env.PORT || 3000;

dotenv.config();
const app = express();

app.use("/home", (req, res) => {
    res.status(200).json({
        sucess: true,
        message: "Home Route up and runnnig",
    });
});

app.listen(PORT || 3000, () => {
    console.log(`Server up and running on PORT: ${PORT}`);
});
