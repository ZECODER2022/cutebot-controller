enum RadioMessage {
    message1 = 49434,
    Forward = 16348,
    Backroads = 21561,
    backward = 28651,
    Stop = 61268,
    Lights = 8859,
    Wifi = 24879,
    Left = 14947,
    Right = 32391,
    Light = 10501
}
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.Forward)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendMessage(RadioMessage.Left)
    basic.showLeds(`
        . . # . .
        . # # . .
        # # # # #
        . # # . .
        . . # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendMessage(RadioMessage.Lights)
})
input.onButtonPressed(Button.B, function () {
    radio.sendMessage(RadioMessage.backward)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . # # # .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendMessage(RadioMessage.Right)
    basic.showLeds(`
        . . # . .
        . . # # .
        # # # # #
        . . # # .
        . . # . .
        `)
})
radio.setGroup(5)
basic.forever(function () {
    radio.sendMessage(RadioMessage.Wifi)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        `)
    basic.showLeds(`
        # # # . .
        # # # . .
        # # # . .
        # # # . .
        # # # . .
        `)
    basic.showLeds(`
        # # # # .
        # # # # .
        # # # # .
        # # # # .
        # # # # .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
