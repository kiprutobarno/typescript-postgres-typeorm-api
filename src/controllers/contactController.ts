import { Request, Response } from "express";
import { connection } from "../connection/Connection";
import Contact from "../entity/Contact";

export class Controller {
  constructor() {}

  public async createContact(req: Request, res: Response) {
    try {
      const {
        firstName,
        lastName,
        email,
        company,
        phone,
        dateCreated
      } = req.body;
      let contact = new Contact();
      contact.firstName = firstName;
      contact.lastName = lastName;
      contact.email = email;
      contact.company = company;
      contact.phone = phone;
      contact.dateCreated = dateCreated;
      await (await connection).manager.save(contact);
      res.status(201).send({ status: 201, message: "Created" });
    } catch (error) {
      res.status(400).send({ status: 400, message: error });
    }
  }

  public async getAllContacts(req: Request, res: Response) {
    try {
      const contacts: Contact[] = await (await connection).manager.find(
        Contact
      );
      if (contacts) {
        res
          .status(200)
          .send({ status: 200, message: "OK", contacts: contacts });
      }
    } catch (error) {
      res.status(400).send({ status: 400, message: error });
    }
  }

  public async getContact(req: Request, res: Response) {
    try {
      let contact = await (await connection).manager.findOne(
        Contact,
        req.params.id
      );
      if (contact) {
        res.status(200).send({ message: "OK", contacts: contact });
      }
    } catch (error) {
      res.status(400).send({ status: 400, message: error });
    }
  }

  public async updateContact(req: Request, res: Response) {
    try {
      const {
        firstName,
        lastName,
        email,
        company,
        phone,
        dateCreated
      } = req.body;

      let contact = await (await connection).manager.findOne(
        Contact,
        req.params.id
      );

      contact.firstName = firstName;
      contact.lastName = lastName;
      contact.email = email;
      contact.company = company;
      contact.phone = phone;
      contact.dateCreated = dateCreated;

      await (await connection).manager.save(contact);

      if (contact) {
        res
          .status(200)
          .send({ status: 200, message: "Updated", contacts: contact });
      }
    } catch (error) {
      res.status(400).send({ status: 400, message: error });
    }
  }

  public async deleteContact(req: Request, res: Response) {
    try {
      let contact = await (await connection).manager.delete(Contact, {
        id: req.params.id
      });
      console.log(contact);
      if (contact) {
        res.status(200).send({ status: 200, message: "Deleted" });
      }
    } catch (error) {
      res.status(400).send({ status: 400, message: error });
    }
  }
}
