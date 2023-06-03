import express, {Router,Request,Response} from 'express';
import { Personnel } from '../../entities/personnel';

const router = express();
router.use(express.json());


// router.post("/Add",async (req:Request,res:Response)=>{
//     const {personnelId} = req.body;
//     var getPersonnel = await Personnel.findOneOrFail({where:perss})
//     res.send(getPersonnel);
// });

export default Router;