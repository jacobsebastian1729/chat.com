import Express from "express";
import cors from "cors";
import passport from "passport";


const app = Express();

app.use(Express.json());

app.use(cors());
app.use(passport.initialize());


export default app;