
// class Car{
//     model;
//     year;
//     starNum;
//     static counter=0;
//     constructor(carModel,carYear,carStarNum){
//         this.model=carModel,
//         this.year=carYear,
//         this.starNum=carStarNum;
//         Car.counter++
//     }

//     static getNewsCar(firstCar,secondeCar){
//      return  firstCar.year>secondeCar.year?firstCar:secondeCar
//     }

//     static numOfStars(firstCar,secondeCar){
//         return firstCar.starNum>secondeCar.starNum?firstCar.starNum:secondeCar.starNum
//     }


// }
// const carOne=new Car("Mazda",2021,10);
// const carTwo=new Car("volvo",2020,20);

// console.log(Car.getNewsCar(carOne,carTwo));

// console.log(Car.counter);

// console.log(Car.numOfStars(carOne,carTwo));



//************************************************************************************************** */

// 
// צרו מחלקה של חתול עם שדות של שם, גיל וצבע.
// צרו מחלקות של אריה, נמר ופומה שיורשות ממחלקת חתול.
// הוסיפו באריה שדה של משקל ובנאי מתאים.
// הוסיפו במחלקה חתול פונקציה של השמעת קול, הפונקציה מחזירה "קוראים לי {השם}, מיאו" באנגלית.
// הוסיפו במחלקה חתול פונקציה שמחזירה את כל השדות בטקסט מורכב.
// במחלקת אריה , הוסיפו פונקציה שמדפיסה את כל הנתונים של האריה.




// class Cat{
//     name;
//     age;
//     color;
//     constructor(name,age,color){
//         this.name=name;
//         this.age=age;
//         this.color=color;
//     }

//     makeSound(){
//         return `my name is ${this.name} meow `
//     }

//      static allKeys(someOjb){
//         return `${someOjb.name} +${someOjb.age}+${someOjb.color}`
//     }


// }

// class Lion extends Cat{
//     wight;
//     constructor(name,age,color,wight){
//         super(name,age,color);
//         this.wight=wight;
//     }

//    static printToLog(someLion){
//        return `${super.allKeys(someLion)} ${someLion.wight}`

//     }
 
// }

// class Leopard extends Cat{

// }

// class Puma extends Cat {

// }

// const lion1=new Lion("asas",5,"asas",50);
// console.log(lion1);



// console.log(lion1.makeSound());


// console.log(Cat.allKeys(lion1));

// console.log(Lion.printToLog(lion1));






//*****************************************************--1--*************************************************** */
 
//!1.	צרו מחלקה עם 3 שדות ופונקציה סטטית אחת,2 שדות טקסט ושדה מספר אחד, הפונקציה היא פונקציית
 //! random מותאמת לפי הנתונים שהמחלקה מקבלת בבנאי. לדוג': במידה והמספר הוא 1000 אז המספר שיחזור יהיה בין 0 ל 999 .



//  class User{
//      name;
//      lastName;
//      age;
//      constructor(name,lastName,age){
//          this.name=name;
//          this.lastName=lastName;
//          this.age=age;
//      }
//      static randomUntilAge (someNumber){
//       return  Math.floor(Math.random()*someNumber) 
//      }
//  }

//  const myUser=new User ("matan","ysayas",50);


// console.log(User.randomUntilAge(5));



//********************************--2--*************************************************************** */

//!2.	כתבו תוכנית שמקבלת מהמשתמש נתונים של שם, סיסמה, מייל ושם משתמש. התוכנית יוצרת מופע של משתמש.

//! לאחר מכן היא משווה בין שני אובייקטים, כדי לקבוע האם הראשון מכיל ערכי מאפיינים שווי ערך לזה השני.
//! אחד מהאובייקטים ניצור ידנית בקוד (הארדקודד)


// const fName=document.getElementById("fName");
// const password=document.getElementById("password");
// const email=document.getElementById("email");
// const userName=document.getElementById("userName");
// const but=document.getElementById("but");

// class SomeUser{
//     fName;
//     password;
//     email;
//     userName;
//     constructor(fName,password,email,userName){
//         this.fName=fName;
//         this.password=password;
//         this.email=email;
//         this.userName=userName;
//     }
// }


// const myUser={
//     fName:"avi",
//     password:2222,
//     email:"avi@gmail.com",
//     userName:"aviAvi"
// }


 
// but.onclick=()=>{
//     const newUser = new SomeUser(fName.value,password.value,email.value,userName.value);

//     for(key in newUser){
//         if(newUser[key]==myUser[key]){
//           console.log(`${key} "the same"`);
//         } else {console.log(`${key} "not"`)};

//     }

//     console.log(newUser);
// };



//**********************************************--3--************************************************** */

// צרו מחלקה של יישוב עם שדות של מס תושבים ושם. 
// בנו פונקציה שמחזירה את הפרטים בטקסט אחד.

// לאחר מכן צרו מחלקה של מדינה, עיר וכפר, המחלקות יורשות מהמחלקה יישוב. 
// הוסיפו לכל מחלקה פונקציה שקוראת לפונקציה ממחלקת ההורה ומחזירה את הטקסט עם סוג היישוב .

// צרו פונקציה סטטית במחלקה יישוב שמקבלת מספר אובייקטים ומחזירה את האובייקט עם מספר התושבים הגדול ביותר.

// צרו טופס שמקבל נתונים מהמשתמש ועל פי הטופס יוצרת את האובייקט המתאים ומוסיפה אותו לטבלה מתחת לטופס.




class Settlement {
    numOfCitizens;
    name;
    constructor(numOfCitizens,name){
        this.numOfCitizens=numOfCitizens;
        this.name=name;
        }
     print(){
        return `${this.numOfCitizens}+${this.name}`
         
     };

     static highstCitizens(someArray){
         let max=someArray[0];
        for(let i=0;i<someArray.lenght;i++){
            if(someArray[i]>max){
                max=someArray[i]
            }
        
        }return max

     }



};

const mySettlement = new Settlement(50,"hh");

console.log(mySettlement.print());




// לאחר מכן צרו מחלקה של מדינה, עיר וכפר, המחלקות יורשות מהמחלקה יישוב. 
// הוסיפו לכל מחלקה פונקציה שקוראת לפונקציה ממחלקת ההורה ומחזירה את הטקסט עם סוג היישוב .





class State extends Settlement{
    getType(){
      return ` ${this.print()} + ${this.constructor.name}`
    }

}



class City extends Settlement{
    getType(){
        return ` ${this.print()} + ${this.constructor.name}`
      }

}

class Vilge extends Settlement{
    getType(){
        return ` ${this.print()} + ${this.constructor.name}`
      }

}




const myState=  new State(60,"sds");
const myCity=  new City(1000,"yyuyus");
const myVilge=  new Vilge(10000,"iids");

console.log(myState.getType());
console.log(myCity.getType());
console.log(myVilge.getType());




// צרו פונקציה סטטית במחלקה יישוב שמקבלת מספר אובייקטים ומחזירה את האובייקט עם מספר התושבים הגדול ביותר.

let objArray=[myState,myCity,myVilge];
    console.log(Settlement.highstCitizens(objArray));









// צרו טופס שמקבל נתונים מהמשתמש ועל פי הטופס יוצרת את האובייקט המתאים ומוסיפה אותו לטבלה מתחת לטופס.



const numOfCitizens=document.getElementById("numOfCitizens");
const settlementName=document.getElementById("settlementName");
const settlementType=document.getElementById("settlementType");
const but3=document.getElementById("but3");
const table=document.getElementById("table");

but3.onclick=()=>{
    switch (settlementType.value) {
        case "settlement":
            const someSettelment=new Settlement(numOfCitizens.value,settlementName.value);
            table.innerHTML+=`<tr><td>${someSettelment.numOfCitizens}</td><td>${someSettelment.name}</td></tr>`

            break;
            case "state":
                const someState=new State(numOfCitizens.value,settlementName.value);
                table.innerHTML+=`<tr><td>${someState.numOfCitizens}</td><td>${someState.name}</td></tr>`
    
                break;

     case "city":
            const someCity=new City(numOfCitizens.value,settlementName.value);
            table.innerHTML+=`<tr><td>${someCity.numOfCitizens}</td><td>${someCity.name}</td></tr>`

            break;
            case "vilge":
                const someVilge=new Vilge(numOfCitizens.value,settlementName.value);
                table.innerHTML+=`<tr><td>${someVilge.numOfCitizens}</td><td>${someVilge.name}</td></tr>`
    
                break;
        default:
            break;
    }
}