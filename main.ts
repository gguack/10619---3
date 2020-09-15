input.onButtonPressed(Button.A, function () {
    if (A_상태 == 0) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        A_상태 = 1
    } else {
        basic.clearScreen()
    }
})
let A_상태 = 0
A_상태 = 0
basic.forever(function () {
	
})
