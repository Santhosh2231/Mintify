
import  express  from "express";
import { sendOTP ,verifyOTP} from "../controllers/otp.js";

const router = express.Router();

router.post("/",sendOTP);
router.post("/verify",verifyOTP);

export default router;