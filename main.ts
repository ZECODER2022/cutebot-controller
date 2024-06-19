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
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendMessage(RadioMessage.Left)
})
input.onSound(DetectedSound.Loud, function () {
    radio.sendMessage(RadioMessage.Light)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendMessage(RadioMessage.Lights)
})
input.onButtonPressed(Button.B, function () {
    radio.sendMessage(RadioMessage.backward)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendMessage(RadioMessage.Right)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.sendMessage(RadioMessage.Stop)
})
radio.setGroup(2)
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
    basic.showString("Connected ")
})
