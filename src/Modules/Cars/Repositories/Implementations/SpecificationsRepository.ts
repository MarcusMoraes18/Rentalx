import { Category } from "../../entities/categories";
import { Specification } from "../../entities/Specification";
import { ISpecificationRepository, ICreateSpecificatinDTO } from "../ISpecificationRepository";


class SpecificationRepository implements ISpecificationRepository{
    private specifications: Specification[];
    constructor(){
        this.specifications = [];
    }
    
    create({ Description, Name }: ICreateSpecificatinDTO): void {
        const specification = new Specification();

        Object.assign(specification,{
            Name,
            Description,
            Cerate_at: new Date(),
        });

        this.specifications.push(specification);

    }
    findByName(Name: string): Specification {
        const specification = this.specifications.find((specification) => specification.Name === Name);
        return specification;
    }

}

export{SpecificationRepository}