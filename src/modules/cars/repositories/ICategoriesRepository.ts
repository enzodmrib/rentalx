import { Category } from "../model/Category";

// DTO ==> data transfer object ---> object that limits the visibility to who's sending the data
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  // myFunc: () => void; ===> this is a property
  // myFunc(): void; ===> this is a method
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };
