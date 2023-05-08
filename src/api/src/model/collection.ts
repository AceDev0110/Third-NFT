import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column
} from "typeorm";


@Entity()
export class Collection {
  
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    chain: string;
}