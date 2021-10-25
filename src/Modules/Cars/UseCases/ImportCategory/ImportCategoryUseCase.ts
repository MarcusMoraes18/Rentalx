import fs from "fs";
import csvParse from "csv-parse";
import parse from "csv-parse";
import { ICategoriesRepository } from "../../Repositories/ICategoriesRepository";
import { isImportClause } from "typescript";

interface IImportCategory{
    Name: string;
    Description: string;
}

class ImportCategoryUseCase{
    constructor(private categoriesRepository: ICategoriesRepository){}

loadCategories(file: Express.Multer.File): Promise<IImportCategory[]>{

    return new Promise((resolve,reject)=>{
        const stream = fs.createReadStream(file.path)
        const categories:IImportCategory[]= []
        const parseFile = csvParse()
        stream.pipe(parseFile)
        parseFile.on("data", async (Line)=>{
            
            const [Name,Description] = Line
            categories.push({
                Name,
                Description,
            })
            console.log(Line);
        })
        .on("end", ()=>{
            fs.promises.unlink(file.path);
            resolve(categories)
        })
        .on("erro", (err)=> {
            reject(err);
        })
    })
    
        
        }
        async execute(file:Express.Multer.File):Promise<void> {
            const categories = await this.loadCategories(file);
            categories.map(category=>{
                const {Name, Description}= category;
              const existCategory = this.categoriesRepository.findByName(Name)

              if(!existCategory){
                  this.categoriesRepository.create({
                      Name,
                      Description,
                  })
              }
            })
        }
}
export {ImportCategoryUseCase, }