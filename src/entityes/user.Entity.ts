import {Entity, Column, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class  UserEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string
    constructor(id:string , first_name:string, last_name: string ){
        this.id = id,
            this.first_name = first_name,
            this.last_name = last_name
    }
}