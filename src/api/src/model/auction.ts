import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column
} from "typeorm";


@Entity()
export class Auction {
  
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    collection: string;
  
    @Column()
    tokenId: string;

    @Column()
    chain: string;
}