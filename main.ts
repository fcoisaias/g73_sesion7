input.onButtonPressed(Button.A, function () {
    basic.showNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(3)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(2)
})
basic.showString("¡BIENVENIDOS!")
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(500)
})
