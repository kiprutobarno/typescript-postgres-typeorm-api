import { Request, Response } from "express";

export class Routes {
  public routes(app): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({ message: "GET request successfull!" });
    });

    app.route("/contacts").get((req: Request, res: Response) => {
      /** Get all contacts */
      res.status(200).send({ message: "GET request successfull!" });
    });

    app.route("/contacts").post((req: Request, res: Response) => {
      /** Create a new contact */
      res.status(201).send({ message: "POST request successfull!" });
    });

    app.route("/contacts/:id").get((req: Request, res: Response) => {
      /** Gt specific contact details */
      res.status(200).send({ message: "GET request successfull!" });
    });

    app.route("/contacts/:id").put((req: Request, res: Response) => {
      /** Update specific contact details */
      res.status(200).send({ message: "PUT request successfull!" });
    });

    app.route("/contacts/:id").delete((req: Request, res: Response) => {
      /** Delete specific contact */
      res.status(200).send({ message: "DELETE request successfull!" });
    });
  }
}
