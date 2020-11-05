let right_distance = 0
let left_distance = 0
robotbit.Servo(robotbit.Servos.S1, 180)
let distance = left_distance
robotbit.Servo(robotbit.Servos.S1, 0)
distance = right_distance
if (left_distance > right_distance) {
    // Turn Left
    // 
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    -150,
    robotbit.Motors.M2A,
    150
    )
} else {
    // Turn Right
    // 
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    150,
    robotbit.Motors.M2A,
    -150
    )
}
basic.pause(1000)
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
})
