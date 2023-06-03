import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./question";
import { Personnel } from "./personnel";


@Entity()
export class Day extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    date:Date

    @OneToMany(()=>Question,(question)=>question.day)
    question:Question[]

    @ManyToOne(()=>Personnel,(personnel)=>personnel.day)
    personnel:Personnel
} 