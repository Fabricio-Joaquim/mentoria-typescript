// Como podemos rodar isso em um arquivo .ts sem causar erros? 
interface IEmployee{
  code:number
  name:string
}
let employee:IEmployee = {};
employee.code = 10;
employee.name = "John";
