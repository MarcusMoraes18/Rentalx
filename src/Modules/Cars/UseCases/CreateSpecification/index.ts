import { SpecificationRepository } from "../../Repositories/Implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationsController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationRepository = new SpecificationRepository()
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository)
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase)

export { createSpecificationController}