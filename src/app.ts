import * as dotenv from "dotenv";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/contactRoutes";
// import { Route, Routes } from './routes/contactRoutes';

const env = dotenv.config();

class App {
  public app: express.Application;
  public route: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.route.routes(this.app);
  }

  private config(): void {
    /**ensure app supports application/json pos data*/
    this.app.use(bodyParser.json());

    /**ensure app supports application/x-www-form-urlencoded post data */
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().app;
