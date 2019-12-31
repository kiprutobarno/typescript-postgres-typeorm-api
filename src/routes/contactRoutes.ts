import { Request, Response } from "express";
import { ContactController } from "../controllers/contactController";

export class Route {
  public contactController: ContactController = new ContactController();
  public contactRoutes(app): void {
    app.route("/contacts").post(this.contactController.createContact);
    app.route("/contacts").get(this.contactController.getContacts);
    app.route("/contacts/:id").get(this.contactController.getContact);
    app.route("/contacts/:id").put(this.contactController.updateContact);
    app.route("/contacts/:id").delete(this.contactController.deleteContact);
  }
}
