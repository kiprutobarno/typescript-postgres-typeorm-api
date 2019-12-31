import * as dotenv from "dotenv";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Route } from "./routes/contactRoutes";
import * as mongoose from "mongoose";

const env = dotenv.config();

class App {
  public app: express.Application;
  public route: Route = new Route();
  public mongoUrl: string = process.env.DB_URL;

  constructor() {
    this.app = express();
    this.config();
    this.route.contactRoutes(this.app);
    this.mongoSetup();
  }

  private config(): void {
    /**ensure app supports application/json pos data*/
    this.app.use(bodyParser.json());

    /**ensure app supports application/x-www-form-urlencoded post data */
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private mongoSetup(): void {
    mongoose.connect(this.mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
}

export default new App().app;
