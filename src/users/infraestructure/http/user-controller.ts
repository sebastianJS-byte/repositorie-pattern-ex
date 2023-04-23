import { Request, Response } from "express";
import { UserByIdFinder } from "../../application/user-by-id-finder";
import {UserNotFound} from "../../domain/user-not-found";
export class UserController {
  constructor(
    private readonly UserByIdFinder: UserByIdFinder) {
  }
  async run(req: Request, res: Response) {
    try {
      const user = await this.UserByIdFinder.run(req.params.id);
      res.json(user);
    }catch (error) {
      if(error instanceof UserNotFound){
        res.status(404).send()
      }
      res.status(500).send()
    }
  }
}
