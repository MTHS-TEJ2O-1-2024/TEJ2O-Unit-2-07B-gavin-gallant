"""
Created by: Mr. Coxall
Created on: Sep 2020
This module is a Micro:bit MicroPython program
"""

from microbit import *


display.clear()
display.show(Image.HAPPY)
cookie_increase = 1

while True:
    if button_a.is_pressed():
        cookie_number = cookie_number + cookie_increase
        display.scroll(cookie_number)

    if cookie_number > 14:
            cookie_increase += 1
            cookie_number -= 15
            display.scroll("Upgraded!")
            sleep(200)
    else:
            display.scroll("Too Poor!")
            sleep(200)
