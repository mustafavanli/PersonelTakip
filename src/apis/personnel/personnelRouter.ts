import express, {Router,Request,Response} from 'express';
import { Personnel } from '../../entities/personnel';

const router = express();
router.use(express.json());

router.post('/add', async (req: Request, res: Response) => {
    const {name,surname,targetPuan} = req.body;
    const person = new Personnel();
    person.name = name;
    person.surname = surname;
    person.targetPuan = targetPuan;
  

    await Personnel.save(person);
    res.json(person);
});

router.get('/GetList', async (req: Request, res: Response) => {
    const personnelList = await Personnel.find();
    res.json(personnelList);
});
router.get('/GetById', async (req: Request, res: Response) => {
    const {id} = req.body.id;
    const personnel= await Personnel.find(id);
    res.send(personnel);

});
router.patch('/Edit', async (req: Request, res: Response) => {

    const {id,name,surname,targetPuan} = req.body;

    let ss = await Personnel.update(id,{name,surname,targetPuan});
    if(ss.affected == 0){
        res.send("başaramadık abi")
    }
    else{
        res.send("oKi")
    }
});

router.delete('/Delete', async (req: Request, res: Response) => {
    const id = req.body.id;
    let isSuccess = await Personnel.delete(id);
    if(isSuccess.affected == 0)
        res.send("silemedik kardeşş");
    else  
        res.send("sadece veritabanından silmedik ;'3");
  
});

export default router;
