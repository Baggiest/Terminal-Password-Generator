#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import { oraPromise } from 'ora';

import passHandler from './hackersman.js'


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
                    `1 ${chalk.greenBright('easy 🦄')}`,
                    `2 ${chalk.yellowBright('medium 👾')}`,
                    `3 ${chalk.redBright('hard 👺')}`,
                    `4 ${chalk.red('NIGHTMARE 💀')}`,

                ],
                name: 'difficulty',
            }
        ])
        .then((answers) => {

            answers.difficulty = answers.difficulty.charAt(0)
            console.log(JSON.stringify(answers, null, ' '))
        })
}

await starter()