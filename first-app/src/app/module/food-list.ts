export interface IFoodList{
  id: number,
  name: string,
  operation: Operation
}

export enum Operation{
  adition = 1,
  edition = 2,
  delete = 3
}
