import { Controller } from "../controllers/contactController";

export class Routes {
  private controller: Controller;
  constructor() {
    this.controller = new Controller();
  }

  public routes(app): void {
    app.route("/contacts").post(this.controller.createContact);
    app.route("/contacts").get(this.controller.getAllContacts);
    app.route("/contacts/:id").get(this.controller.getContact);
    app.route("/contacts/:id").put(this.controller.updateContact);
    app.route("/contacts/:id").delete(this.controller.deleteContact);
  }
}
