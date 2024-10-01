/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Gavin Gallant
 * Created on: oct 2024
 * This program plays the game cookie clicker with one upgrade avalable 
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)
let cookieNumber = 0
let cookieIncrease = 1

input.onButtonPressed(Button.A, function (){
    cookieNumber = cookieNumber + cookieIncrease
    basic.showNumber(cookieNumber)
})

input.onButtonPressed(Button.B, function () {
    if (cookieNumber > 14) {
        cookieNumber = cookieNumber - 15;
        cookieIncrease = cookieIncrease + 1
    }
    else {
        basic.showString("to poor")
    }
})