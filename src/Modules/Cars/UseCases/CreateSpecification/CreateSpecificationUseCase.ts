import { ISpecificationRepository } from "../../Repositories/ISpecificationRepository";

interface IRequest{
    Name: string;
    Description: string;
}


class CreateSpecificationUseCase{

    constructor(private specificationsRepository: ISpecificationRepository){}
    execute({Name, Description}: IRequest):void{
        const specificationAlreadExist = this.specificationsRepository.findByName(Name);
        if(specificationAlreadExist){
        throw new Error("Errouuu")
        }
        this.specificationsRepository.create({
            Name,
            Description
        });
        return

    }
}



export {CreateSpecificationUseCase}
