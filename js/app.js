// for (let num = 1; num <= 10; num++) {
//     console.log(num + " - I am in a loop.");
// }
// // while loop
// // const SECRET = "BabyHippo";
// // let guess = prompt("enter the secret code...");
// // while (guess !== SECRET) {
// //     guess = prompt("enter the secret code...");
// // }
// console.log("CONGRAT!!!");


// // for of loop
// const people = ["name", "tommy", "Sungwook", "Hirosakawi", "kim", "lee", "park"];
// for (let person of people) {
//     console.log(person + ` : ${person.length}`);
// }

// let count = 1;
// while (count <= 10) {
//     console.log(count);
//     count++;
// }


// const testScores = {
//     kwon: 65,
//     kim: 55,
//     lee: 30
// }

// for (let person of Object.values(testScores)) {
//     console.log(person);
// }

// for (let person of Object.keys(testScores)) {
//     console.log(person);
// }

// let todoList = ["TEST1", "TEST2"];
// while (true) {
//     let command = prompt("What do you want to do?");
//     if (command.toLowerCase() === "quit") {
//         console.log("Bye!");
//         break;
//     } else if (command.toLowerCase() === "new") {
//         const toDoItem = prompt("Enter an item to add.");
//         todoList.push(toDoItem);
//     } else if (command.toLowerCase() === "list") {
//         console.log("****************")
//         for (let i = 0; i < todoList.length; i++) {
//             console.log(i + " :" + todoList[i]);
//         }
//         console.log("****************")
//     } else if (command.toLowerCase() === "delete") {
//         const indexToDelete = prompt("Enter index to delete");
//         if (indexToDelete < todoList.length) {
//             todoList.splice(indexToDelete, 1);
//         } else {
//             console.log("wrong idex. try between 0 to " + todoList.length);
//         }
//     } else if (command.toLowerCase() === "update") {
//         const indexToUpdate = prompt("Enter index to update");
//         const valueToUpdate = prompt("Enter the new todo item.");
//         if (indexToUpdate < todoList.length) {
//             todoList.splice(indexToUpdate, 1, valueToUpdate);
//         } else {
//             console.log("wrong idex. try between 0 to " + todoList.length);
//         }

//     } else {
//         console.log("no command.");
//     }
// }

function rollDice(seed) {
    console.log(`the seed is ${seed}`);
    return Math.floor(Math.random() * seed) + 1;
};


const isSnakeEyes = function (odd1, odd2) {
    console.log(odd1 + ',' + odd2);
    if (odd1 === 1 && odd2 === 1)
        return true;
    else
        return false;
}

function roll100(func) {
    for (let i = 0; i < 100; i++) {
        func();
    }
}
console.log("Hi");
const person = {
    firstName: "Sung",
    lastName: "Kwon",
    fullName: function () {
        return (`${this.firstName} ${this.lastName} `)
    }
}

setTimeout(() => { console.log("Hello after 3 seconds...."); }, 3000);
console.log(person.fullName());

function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}

const btn = document.querySelector("#v2");
btn.onclick = function () {
    console.log("you clicked me");
}