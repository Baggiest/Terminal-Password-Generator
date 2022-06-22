#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import { oraPromise } from 'ora';
import chalkAnimation from 'chalk-animation';


import passHandler from './hackersman.js'

let pass = async (level, readable, answers) => new Promise((resolve, reject) => {

    let response = passHandler(level, readable, answers)
    let finalPassword = response.generatedPassword

    if (response.result === true) {
        setTimeout(() => {
            resolve()
            console.log(`DONE! your password is ${chalk.magentaBright(finalPassword)}`)
        }, 2000)
    }
})

async function starter() {

    inquirer
        .prompt([
            {
                type: 'input',
                message: 'what website is the password for',
                name: 'website',
            },

            {
                type: 'input',
                message: 'what is your username',
                name: 'username'
            },
            {
                type: 'list',
                message: `${chalk.greenBright('Which difficulty')}`,
                choices: [
                    `1 ${chalk.greenBright('Easy 🦄')}`,
                    `2 ${chalk.yellowBright('Medium 👾')}`,
                    `3 ${chalk.redBright('Hard 👺')}`,
                    `4 ${chalk.red('NIGHTMARE 💀')}`,

                ],
                name: 'difficulty',
            },
            {
                type: 'confirm',
                message: `${chalk.greenBright('Do you want it to be easily readable?')}`,
                // choices: ["Yes", " No"],
                name: 'readability',
            },
        ])
        .then(async (answers) => {

            answers.difficulty = answers.difficulty.charAt(0)

            let difficulty = answers.difficulty

            console.clear()
            await oraPromise(pass(difficulty, answers.readable, answers), chalkAnimation.rainbow("Generating a password...")).then(() => {
                console.log("See ya again")
                process.exit(0)
            })


            // console.log(JSON.stringify(answers, null, ' '))
        })
}

await starter()