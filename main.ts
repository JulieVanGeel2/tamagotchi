let dood = 0
let voeden = 0
let knuffelen = 0
if (knuffelen == 20) {
    basic.showIcon(IconNames.Happy)
}
if (voeden == 20) {
    basic.showIcon(IconNames.Happy)
}
if (dood == 0) {
    basic.showIcon(IconNames.Asleep)
}
basic.forever(function () {
    if (input.buttonIsPressed(Button.B) && input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
    }
    if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Sad)
    }
    if (knuffelen < 10 && knuffelen > 0) {
    	
    }
})
