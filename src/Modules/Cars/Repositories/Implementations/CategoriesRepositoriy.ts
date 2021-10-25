import {getRepository, Repository} from "typeorm"
import {Category} from "../../entities/categories"
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";

//Singleton (Padrão de projeto) criar apenas uma instancia que seria global

class CategoriesRepository implements ICategoriesRepository{
    private repository: Repository<Category>;

    private static INSTANCE: CategoriesRepository;

    constructor(){
        this.repository = getRepository(Category);
    }

    async create({ Description, Name }: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create({
            Description,
            Name,       
        });
        await this.repository.save(category)
    }

   async list(): Promise<Category[]> {
       const categories = await this.repository.find()
       return categories;
   }

   async findByName(Name: string): Promise<Category>{
       // Seleciona todas as informaçoes
       // Select * from categories ehre name = "name" limit 1
       const category = await this.repository.findOne({ Name });
       console.log("arquivo")
       return category;
   }
};



export { CategoriesRepository}