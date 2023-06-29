import { getPeople } from "../controllers/people.controllers";
import { Router } from "express";

const peopleRouter = Router()

peopleRouter.get("/person", getPeople)

export default peopleRouter