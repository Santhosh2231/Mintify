import  express  from "express";
import { getData } from "../controllers/data.js";

const router = express.Router();

router.post("/",getData);


export default router;