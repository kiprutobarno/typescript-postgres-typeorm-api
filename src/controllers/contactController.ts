import { Contact } from "../models/contactModel";
import { Request, Response } from "express";
import db from "../utils/db";

const contact = new Contact();
export class ContactController {
  public async createContact(req: Request, res: Response) {
    const {
      firstName,
      lastName,
      email,
      company,
      phone,
      dateCreated
    } = req.body;
    try {
      let data = await db.query(
        contact.save(firstName, lastName, email, company, phone, dateCreated)
      );
      if (data) {
        res.status(201).send({ message: "OK" });
      }
    } catch (error) {
      res.status(400).send(error);
    }
  }

  public async getContacts(req: Request, res: Response) {
    try {
      let { rows } = await db.query(contact.find());
      if (rows) {
        res.status(200).send({ status: 200, message: "OK", contacts: rows });
      }
    } catch (error) {
      res.status(400).send(error);
    }
  }

  public async getContact(req: Request, res: Response) {
    try {
      const id = req.params.id;
      let { rows } = await db.query(contact.findById(Number(id)));
      if (rows) {
        res.status(200).send({ status: 200, message: "OK", contacts: rows });
      }
    } catch (error) {
      res.status(400).send(error);
    }
  }

  public async updateContact(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const {
        firstName,
        lastName,
        email,
        company,
        phone,
        dateCreated
      } = req.body;
      let data = await db.query(
        contact.update(
          Number(id),
          firstName,
          lastName,
          email,
          company,
          phone,
          dateCreated
        )
      );
      if (data) {
        let { rows } = await db.query(contact.findById(Number(id)));
        res.status(200).send({ status: 200, message: "OK", contact: rows });
      }
    } catch (error) {
      res.status(400).send(error);
    }
  }

  public async deleteContact(req: Request, res: Response) {
    try {
      const id = req.params.id;
      await db.query(contact.deleteOne(Number(id)));
      res.status(200).send({ status: 200, message: "Deleted" });
    } catch (error) {
      res.status(400).send(error);
    }
  }
}
