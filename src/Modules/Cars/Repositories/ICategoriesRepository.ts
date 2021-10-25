import { Category } from "../entities/categories";

interface ICreateCategoryDTO{
    Name: string;
    Description: string;
}

interface ICategoriesRepository{
    findByName(Name: string): Promise<Category>;
    list(): Promise<Category[]>;
    create({Name, Description}:ICreateCategoryDTO):Promise<void>;
}
export {ICategoriesRepository, ICreateCategoryDTO};