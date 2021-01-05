while (true) {
    console.log("light level: " + input.lightLevel())
    if (input.lightLevel() >= 8) {
        light.setAll(light.rgb(0, 0, 0))
    } else if (input.lightLevel() < 5) {
        light.setAll(light.rgb(255, 255, 255))
    } else {
        console.log("Circuit has ran into error")
    }
    
}
