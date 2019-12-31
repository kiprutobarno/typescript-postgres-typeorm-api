import { createConnection } from "typeorm";
import Contact from "../entity/Contact";

export const connection = createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "admin",
  password: "admin123",
  database: "phonebook",
  entities: [Contact],
  synchronize: true,
  logging: false
});
