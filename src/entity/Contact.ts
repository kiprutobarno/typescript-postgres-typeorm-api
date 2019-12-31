import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Contact {
  @PrimaryGeneratedColumn() public id: number;
  @Column() public firstName: string;
  @Column() public lastName: string;
  @Column() public email: string;
  @Column() public company: string;
  @Column() public phone: string;
  @Column() public dateCreated: string;
}

export default Contact;
