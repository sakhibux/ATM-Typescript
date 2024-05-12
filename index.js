#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to Sakhi");
let user = await inquirer.prompt([
    {
        name: "sakhi",
        type: "string",
        message: "Welcom sakhi"
    },
    {
        name: "pinCode",
        type: "number",
        message: "enter your 4 digit pinCode"
    },
    // creating liting and withdrawl method
    {
        name: "accountType",
        type: "list",
        message: "select your account type",
        choices: ["current", "saving"]
    },
    // Transaction type
    {
        name: "transactionType",
        type: "list",
        message: "select your transactionType",
        choices: ["deposite", "withdrawl", "cash"]
    },
    // selected amount
    {
        type: "list",
        name: "amount",
        message: "select your amount",
        choices: [1000, 2000, 3000, 4000, 5000],
        when(user) {
            return user.transactionType === "cash";
        }
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your amount",
        when(user) {
            return user.transactionType !== "withdraw";
        }
    }
]);
// final slip
if (user.pinCode) {
    const balance = Math.floor(Math.random() * 10000);
    console.log(balance);
    const enteramount = user.acount;
    if (enteramount <= balance) {
        const remaining = balance - enteramount;
        console.log(`you have withdraw rupees ${enteramount} and you have remaining balance ${remaining}`);
    }
}
