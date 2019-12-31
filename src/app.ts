import * as express from "express";
import * as bodyParser from "body-parser";
import { Route } from "./routes/contactRoutes";

class App {
  public app: express.Application;
  public route: Route = new Route();

  constructor() {
    this.app = express();
    this.config();
    this.route.contactRoutes(this.app);
  }
  private config(): void {
    /**ensure app supports application/json pos data*/
    this.app.use(bodyParser.json());

    /**ensure app supports application/x-www-form-urlencoded post data */
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().app;
