export class Ingredient {

  public id: number;
  public name: string;
  public amount: number;

  constructor(id: number = -1, name: string = '', amount: number = 1){
    this.id = id;
    this.name = name;
    this.amount = amount;
  }

}
