import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Day } from "./day";


@Entity()
export class Question extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    puan:number

    @ManyToOne(()=>Day,(day)=>day.question)
    day:Day[]
} 