input.onSound(DetectedSound.Loud, function () {
    lightsOn = !(lightsOn)
    music.play(music.createSoundExpression(
    WaveShape.Square,
    1600,
    1,
    255,
    0,
    300,
    SoundExpressionEffect.None,
    InterpolationCurve.Curve
    ), music.PlaybackMode.UntilDone)
    if (lightsOn) {
        basic.showLeds(`
            . # . # .
            # . # . #
            # . # . #
            . # . # .
            . . # . .
            `)
    } else {
        basic.clearScreen()
        music.play(music.createSoundExpression(
        WaveShape.Noise,
        500,
        499,
        255,
        0,
        750,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
    }
})
let lightsOn = false
input.setSoundThreshold(SoundThreshold.Loud, 120)
