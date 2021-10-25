import {  Router } from "express";
import multer from "multer";
import  createCategoryController  from "../Modules/Cars/UseCases/CreateCategory";
import { importCategoryController } from "../Modules/Cars/UseCases/ImportCategory";
import { listCategoriesController } from "../Modules/Cars/UseCases/ListCategory";


const categoriesRoutes = Router();
const upload = multer({dest: "./tmp",})



categoriesRoutes.post("/",(request,response)=> {
    console.log("reload mané")
    return createCategoryController().handle(request,response)
    
});

categoriesRoutes.get("/",(request,response)=>{
    return listCategoriesController.handle(request,response)

});

categoriesRoutes.post("/import", upload.single("file"),(request, response)=>{
  return importCategoryController.handle(request,response);


})

export {categoriesRoutes};