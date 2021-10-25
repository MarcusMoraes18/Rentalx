import {Request, Response} from "express"
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";


class CreateSpecificationController{
    constructor(private createSpecificationUseCase: CreateSpecificationUseCase){}

    handle(request: Request, response: Response):Response{
    const {Name, Description} = request.body
    
    
  this.createSpecificationUseCase
    
    
    return response.status(201).send(201)
}

}



export{CreateSpecificationController}