import { ICategoriesRepository } from "../../Repositories/ICategoriesRepository";

interface IRequest {
    Name: string;
    Description: string;
}
/**
 * Coisas pra fazer
 * [x] - Dafinir tipo de retorno 
 * [x] - Alterar o retorno de erro 
 * [x] - Acessar o repositório
 */ 
class CreateCategoryUseCase{
    constructor(private categoriesRepository: ICategoriesRepository){
    }   

    execute({Description, Name}: IRequest){   

        const categoryAlreadyExists = this.categoriesRepository.findByName(Name);

        if(categoryAlreadyExists){

            throw new Error ("Já existe bro")
        }
        this.categoriesRepository.create({Name,Description})

    }
}



export { CreateCategoryUseCase}