import { Router } from "express";
const router = Router();

router.use('/', (req, res) => {
    res.send("ok it's working");
})

export { router };
