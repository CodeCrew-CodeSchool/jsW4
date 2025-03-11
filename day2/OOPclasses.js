// Defining class using es6
class Vehicle {
	constructor(name, maker, engine) {
		this.name = name;
		this.maker = maker;
		this.engine = engine;
	}
	getDetails() {
		return (`The name of the bike is ${this.name}.`)
	}
}
// // Making object with the help of the constructor
// let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
// let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');

// console.log(bike1.name); // Hayabusa
// console.log(bike2.maker); // Kawasaki
// console.log(bike1.getDetails());
class nbaTeamMember {
    constructor(name, age, turnovers, PPG){
        this.name = name;
        this.age = age;
        this.turnovers = turnovers;
        this.PPG = PPG;
    }
}
let Ja = new nbaTeamMember("Ja Morant", 25, 4.0, 22.3);
console.log(Ja);
let Grizzlies = [];
let Zach = new nbaTeamMember("Zach Edey", 22, 1.3, 9.2);
let Yuki = new nbaTeamMember("Yuki Kawamura", 23, 0.2, 1.2);
let Bane = new nbaTeamMember("Desmond Bane", 26, 1.8, 17.7);
let Jaren = new nbaTeamMember("Jaren Jackson", 25, 1.9, 18.4);

Grizzlies.unshift(Ja, Zach, Yuki, Bane, Jaren);
console.log(Grizzlies);

let nbaObj = {}
nbaObj.Grizzlies = Grizzlies;

console.log(JSON.stringify(nbaObj));
/*
{
"Grizzlies": [
        { "name": "Ja Morant", "age": 25, "turnovers": 4.0, "PPG": 22.3 },
        { "name": "Zach Edey", "age": 22, "turnovers": 1.3, "PPG": 9.2 },
        { "name": "Yuki Kawamura", "age": 23, "turnovers": 0.2, "PPG": 1.2 },
        { "name": "Desmond Bane", "age": 26, "turnovers": 1.8, "PPG": 17.7 },
        { "name": "Jaren Jackson", "age": 25, "turnovers": 1.9, "PPG": 18.4 }
    ],
    "96 Bulls": [
        { "name": "Michael Jordan", "age": 33, "turnovers": 2.7, "PPG": 30.1 },
        { "name": "Scottie Pippen", "age": 30, "turnovers": 2.8, "PPG": 16.1},
        { "name": "Dennis Rodman", "age": 35, "turnovers": 1.6, "PPG": 7.3 },
        { "name": "Luc Longly", "age": 27, "turnovers": 1.7, "PPG": 7.2 },
        { "name": "Ron Harper", "age": 32, "turnovers": 2.2, "PPG": 13.8 }
}
*/
