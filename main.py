while True:
    print("light level: " + input.light_level())
    if input.light_level()  >= 8:
        light.set_all(light.rgb(0, 0, 0))
    elif input.light_level() < 5:
        light.set_all(light.rgb(255, 255, 255))
    else :
        print ("Circuit has ran into error")