function test(a:number,b:number):number {
    return a%b;
}
test(1,2)

/**
 *Function 
 *Recommndation: Add the return type of the function
 */
const add  = (num1:number,num2:number) => num1+num2; 
add(4,3);

const compair = (a:number,b:number): boolean => a > b 

const display = ():void => console.log('Hi TypeScript');


//Union Type
let numberOrString: (number | string);
numberOrString = "12";


let another:(string | number | undefined | null);

let scores:(string|number)[] = [];

scores = [1,2,'3']


let direction:("UP"|"DOWN"|"LEFT"|"RIGHT");



const getDirection = (direction:string) => {
    switch(direction){
        case "UP": return "UP";
        case "DOWN": return "DOWN";
        case "LEFT": return "LEFT";
        case "RIGHT": return "RIGHT";
        default: return "WRONG"
    }
}



let person: personInterface = {
    fName:"AAA",
    lName:"B",
    age:32,
    isSel:true
};

let person1:personInterface = {
    fName:"11",
    lName:'22',
    age:33
}

interface personInterface{
    fName:string,
    lName:string,
    age:number,
    isSel?:boolean
}

// interace (Always deal with an object) & type (use to create a new type)

let myObj:humanInterface;

interface humanInterface{
    fName:string;
    lName:string;
    age:number;
    isSel:boolean;
};

type historyType  = {
    startDate:string;
    endDate:string;
    status:boolean;
}[];

let myHistoryObj:historyType = [
    {
        startDate:'123',
        endDate:'345',
        status:true
}
];



//classes

class MyCar {
   /*  model:string;
    color:string;
    age:number; */
    private peopleInPolicy:string[] = [];
    readonly manuFacDate:string = "2021-10-12";
    private readonly secretKey:string = '12334';

    constructor(public model:string, public color:string, public age:number) {
      this.model = model;
      this.color = color;
      this.age = age;
    }

    setPeopleToPolicy(name:string){
        this.peopleInPolicy.push(name);
    }

    getPeopleInPolicy(){
        return this.peopleInPolicy;
    }
  
    describe() {
      return `Model:${this.model}, Color: ${this.color} and Age: ${this.age}`;
    }
  }
  

  const c1 = new MyCar("M1", "RED", 12);
  c1.setPeopleToPolicy("Nuwan");
  c1.getPeopleInPolicy();
 console.log(c1.manuFacDate);

