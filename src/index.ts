import express from "express";

export const app = express();

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.info(`Server running on port ${port}`);
})