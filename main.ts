let knuffelen = 20
knuffelen = 20
let dood = 0
basic.showIcon(IconNames.Happy)
loops.everyInterval(1000, function () {
	
})
loops.everyInterval(1000, function () {
	
})
basic.forever(function () {
    let voeden = 0
    if (knuffelen > 10 && voeden > 10) {
        basic.showIcon(IconNames.Happy)
    }
    if (knuffelen < 10 && knuffelen > 1 || voeden < 10 && voeden > 1) {
        basic.showIcon(IconNames.Sad)
    }
    if (knuffelen > 0 && voeden > 0) {
        basic.showIcon(IconNames.Asleep)
    }
})
