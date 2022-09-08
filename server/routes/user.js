import  express  from "express";
import {  updateUser,deleteUser} from "../controllers/Auth.js";

const router = express.Router();

router.put("/update",verifytoken,updateUser);

router.delete("/delete",verifytoken,deleteUser);

export default router;