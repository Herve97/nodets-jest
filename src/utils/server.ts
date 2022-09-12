import express from "express";
import routes from '../routes';
import cors from "cors";
import cookieParser from "cookie-parser";
import { deserializeUser } from "../middleware/deserializeUser";

function createServer(){

  const app = express();
  app.use(express.json());
  app.use(cookieParser());
  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );

  app.use(deserializeUser)

  routes(app);
  return app;
}

export default createServer