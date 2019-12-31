import * as mongoose from "mongoose";
import { ContactSchema } from "../models/contactModel";
import { Request, Response } from "express";

const Contact = mongoose.model("Contact", ContactSchema);

export class ContactController {
  public createContact(req: Request, res: Response) {
    let contact = new Contact(req.body);
    contact.save((err, contact) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(201).send(contact);
      }
    });
  }

  public getContacts(req: Request, res: Response) {
    Contact.find({}, (err, contact) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(contact);
      }
    });
  }

  public getContact(req: Request, res: Response) {
    Contact.findById(req.params.id, (err, contact) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(contact);
      }
    });
  }

  public updateContact(req: Request, res: Response) {
    Contact.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true },
      (err, contact) => {
        if (err) {
          res.status(400).send(err);
        } else {
          res.status(200).send({ message: "Updated" });
        }
      }
    );
  }

  public async deleteContact(req: Request, res: Response) {
    let data = await Contact.deleteOne({ _id: req.params.id });
    if (!data) {
      res.status(400).send({ message: "Error" });
    } else {
      res.status(200).send({ message: "Deleted!" });
    }
  }
}
