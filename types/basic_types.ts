let isDone: boolean = true;
// console.log(isDone)


let decimal: number = 1.244;
let integer: number = 234;

//console.log(decimal, integer);


let first_name: string = 'Sourav'
let age: number = 24

// console.log(`${first_name} will be ${age + 1} by next year`)


let salary: Array<number> = [300, 200, 500, 800]
// console.log(salary)


let array: [number, number, string]

array = [2,3,'sourav']

//console.log(array[2])


// enums


enum Color {
    red = 1,
    green = 2,
    blue = 3
};

let c: Color = Color.red;

// console.log(c)


enum Country {
    germany = 10,
    france = 20,
    unitedKingdom = 30
};

let country: string = Country[30];
// console.log(country)


// unknown


declare const mayBe: unknown;

if (mayBe === true) {
    const aBool: boolean = mayBe;
}

if (mayBe === 'string'){
    const aString: string = mayBe
}


