import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm"
import { Day } from "./day"


@Entity()
export class Personnel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    name: string
    @Column()
    surname: string
    @Column()
    targetPuan:number
    @OneToMany(() => Personnel, (personnel) => personnel.day)
    day: Day[]
}