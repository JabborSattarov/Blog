import {Entity, Column, PrimaryGeneratedColumn} from "typeorm"

@Entity({
    name:"users"
})
export class  UsersEntity {
    @PrimaryGeneratedColumn("uuid")
    user_id: string;

    @Column({
        type: "varchar",
        nullable: false,
        length: 15,
        unique: true
    })
    user_firstname: string;

    @Column({
        type: "varchar",
        nullable: false,
        length: 15
    })
    user_lastname: string;

    @Column({
        type: "varchar",
        nullable: false,
        length: 64
    })
    user_login: string;

    @Column({
        type: "varchar",
        nullable: false,
        length: 64
    })
    user_password: string;
}