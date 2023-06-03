import express, {Request, Response, Application } from "express";
import {DataSource} from "typeorm";
import { Personnel } from "./src/entities/personnel";
import { Question } from "./src/entities/question";
import { Day } from "./src/entities/day";
import personnelRouter from "./src/apis/personnel/personnelRouter";
import questionRouter from "./src/apis/question/questionRouter";

const app:Application = express();
const port = 3000;
const AppDataSource = new DataSource({
    type: "mssql",
    port:1433,
    username: "VDS",
    password:"Hasanvemustafa.",
    host: "5.180.104.40",
    database:"deneme",
    synchronize: true,
    options: {
        encrypt: false,
        trustServerCertificate: true,
        },
    entities: [Day,Question, Personnel]
});


AppDataSource.initialize()
    .then(() => {
        console.log("db ye bağlandı");
    })
    .catch((error) => console.log(error))



app.use('/personnel', personnelRouter);

app.use('/question', questionRouter);





app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});