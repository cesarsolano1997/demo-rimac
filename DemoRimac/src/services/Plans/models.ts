export interface IGetPlans
{
  list: IListPlan[]
}

export interface IListPlan
{
  name: string
  price: number
  description: string[]
  age: number
}