import { CategoriesRepository } from "../../Repositories/Implementations/CategoriesRepositoriy";
import { CreateCategoryController } from "./CreaetCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

console.log("arquivo Category")

export default(): CreateCategoryController =>{
const categoriesRepository = new CategoriesRepository();

const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

const createCategoryController = new CreateCategoryController(createCategoryUseCase);

return createCategoryController;
};