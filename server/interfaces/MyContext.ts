import { Request, Response } from "express";
import { authLoader } from "../loader/authLoader";

export interface MyContext {
  req: Request;
  res: Response;
  authLoader: ReturnType<typeof authLoader>;
}
