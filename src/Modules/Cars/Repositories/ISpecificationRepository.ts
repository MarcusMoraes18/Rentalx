    import { Specification } from "../entities/Specification";
    import{ICreateCategoryDTO} from "./ICategoriesRepository"


interface ICreateSpecificatinDTO{
    Name: string;
    Description: string;
}

interface ISpecificationRepository{
    create({Description, Name}: ICreateSpecificatinDTO): void;
    findByName(Name: string): Specification;
}


export { ISpecificationRepository, ICreateSpecificatinDTO};