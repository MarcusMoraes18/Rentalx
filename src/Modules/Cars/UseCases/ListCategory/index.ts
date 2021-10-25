import { CategoriesRepository } from "../../Repositories/Implementations/CategoriesRepositoriy";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepositoriy = null;
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepositoriy);
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);


export {listCategoriesController}
