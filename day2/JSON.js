const nJSON = `{
    "a": [
        {"fName": "Amit", "lName": "Kumar"},
        {"fName": "Sumit", "lName": "Dev"},
        {"fName": "Punit", "lName": "Singh"}
    ],
    "b": [
        {"fName": "Bruce", "lName": "Wayne"},
        {"fName": "India", "lName": "Arie"}
    ]
}`;

// Parse nested JSON string
const obj = JSON.parse(nJSON);

// Access nested data
console.log(obj.a[0].fName);
console.log(obj.a[1].lName); 
console.log(obj.a[2].fName);

console.log(obj);
console.log(obj.b);
console.log(obj.b[1]);
console.log(obj.b[1].lName);

const nba = `{
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
    ]
}`;
const nbaObj = JSON.parse(nba);
console.log(nba)
console.log(nbaObj["96 Bulls"][2])//3rd player on the 2nd team
console.log(nbaObj["96 Bulls"][2].age)//age 3rd player on the 2nd team
//PPG of the 2nd player on the first team
console.log(nbaObj.Grizzlies[1].PPG)
//sum the PPG of the Grizzlies
//array reduce method
console.log(nbaObj["Grizzlies"].reduce((accumulator, currentValue) => {
    return accumulator + currentValue.PPG;
}, 0));

//for loop
let totalSum = 0;
for (let i = 0; i < nbaObj.Grizzlies.length; i++) {
    //console.log(nbaObj.Grizzlies[i].PPG);
    totalSum += nbaObj.Grizzlies[i].PPG;
    console.log(totalSum);
    //adding how do
}

//while
let i = 0;
totalSum = 0;
while (i < nbaObj.Grizzlies.length) {
    totalSum += nbaObj.Grizzlies[i].PPG;
    i++;
}
console.log(totalSum);