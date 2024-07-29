import express from "express";
import routes from "./routes";
import swaggerUi from "swagger-ui-express";
// import swaggerDoc from "./swagger.json";

export const app = express();

app.use(express.json());
app.use("/", routes);
// app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(4000, () => {
    console.info(`Server running on port 4000`);
})