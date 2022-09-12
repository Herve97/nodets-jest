import express, { Request, Response } from "express";
import config from "config";
import connect from "./utils/connect"
// import logger from "./utils/logger";
// import routes from './routes';
// import { deserializeUser } from "./middleware/deserializeUser";
import createServer from "./utils/server";
// import cors from "cors";
import cookieParser from "cookie-parser";
import responseTime from "response-time";
import { restResponseTimeHistogram, startMetricsServer } from "./utils/metrics";
import swaggerDocs from "./utils/swagger";

const port = config.get<number>("port");
// export const app = express();

const app = createServer();

app.use(cookieParser());

app.use(responseTime((req: Request, res: Response, time: number)=>{

  if(req?.route?.path){
    restResponseTimeHistogram.observe({
      method: req.method,
      route: req.route.path,
      status_code: res.statusCode
    }, time * 1000)
  }

}))

app.listen(port, async ()=>{
  console.log(`i'm running on port: ${port}`);
  await connect();
  startMetricsServer();
  swaggerDocs(app, port);
  
})

// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     credentials: true,
//   })
// );

// app.use((req: Request, res: Response, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With,content-type, Accept"
//   );

//   res.header(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );
//   res.header("Access-Control-Allow-Credentials", "true");
//   next();
// });

// app.use(express.json());
// app.use(deserializeUser)

// 
