import {Request, Response} from "express";

import {CreateCategoryUseCase} from "./CreateCategoryUseCase";

class CreateCategoryController{
    constructor(private createCategoryUseCase: CreateCategoryUseCase){}

handle(request: Request, response: Response): Response{
    const { Name, Description } = request.body;
    this.createCategoryUseCase.execute({Name,Description});


return response.status(201).send(201);
}


}
export{CreateCategoryController}