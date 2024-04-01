input.onButtonPressed(Button.A, function () {
    indice = 0
    while (indice < Tira10.length()) {
        Tira10.setPixelColor(indice, neopixel.colors(NeoPixelColors.Red))
        Tira10.show()
        basic.pause(1000)
        Tira10.showColor(neopixel.colors(NeoPixelColors.Black))
        indice += 1
    }
    while (indice >= 0) {
        Tira10.setPixelColor(indice, neopixel.colors(NeoPixelColors.Red))
        Tira10.show()
        basic.pause(1000)
        Tira10.showColor(neopixel.colors(NeoPixelColors.Black))
        indice += -1
    }
})
let indice = 0
let Tira10: neopixel.Strip = null
Tira10 = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
