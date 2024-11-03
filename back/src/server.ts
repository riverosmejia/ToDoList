import Express,{Application} from "express";
import morgan from "morgan";
import cors from "cors";

const server:Application = Express();

server.use(Express.json());
server.use(morgan("dev"));
server.use(cors());

export default server;