import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes.js";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const API_URL = process.env.API_URL || 'http://127.0.0.1';
<<<<<<< HEAD
const PORT = process.env.PORT || 300;
=======
const PORT = process.env.PORT || 3000;
>>>>>>> e5bda178418e1d6922cfcff1d9669a635fc2203a


const app = express();
app.use(cors({
        exposedHeaders: ["X-Synapse-Api"],
}))
app.use((req, res, next) => {
        res.set("X-Synapse-Api", "true");
        next();
})
app.use(express.json())
app.use(routes)


app.listen(PORT, () => {
        console.log(`Running now!! Porta ativa: ${PORT}`)
})
