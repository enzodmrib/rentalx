import { Category } from "../model/Category";
import { ICreateCategoryDTO } from "./CategoriesRepository";

interface ICategoriesRepository {
  // myFunc: () => void; ===> this is a property
  // myFunc(): void; ===> this is a method
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository };
