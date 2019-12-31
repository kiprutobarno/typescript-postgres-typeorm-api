export class Contact {
  firstName: String;
  lastName: String;
  email: String;
  company: String;
  phone: String;
  dateCreated: String;

  save(
    firstName: String,
    lastName: String,
    email: String,
    company: String,
    phone: String,
    dateCreated: String
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.company = company;
    this.phone = phone;
    this.dateCreated = dateCreated;
    return `INSERT INTO contacts(firstName, lastName, email, company, phone, dateCreated) VALUES('${this.firstName}','${this.lastName}','${this.email}', '${this.company}', '${this.phone}', '${this.dateCreated}')`;
  }

  find() {
    return `SELECT * FROM contacts`;
  }

  findById(id: Number) {
    return `SELECT * FROM contacts WHERE id=${id}`;
  }

  update(
    id: Number,
    firstName: String,
    lastName: String,
    email: String,
    company: String,
    phone: String,
    dateCreated: String
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.company = company;
    this.phone = phone;
    this.dateCreated = dateCreated;
    return `UPDATE contacts SET firstName='${this.firstName}', lastName='${this.lastName}', email='${this.email}', company='${this.company}', phone='${this.phone}', dateCreated='${this.dateCreated}' WHERE id=${id} `;
  }

  deleteOne(id: Number) {
    return `DELETE FROM contacts WHERE id=${id}`;
  }
}
