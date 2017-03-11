# Huey.js
A Javascript library for getting random colors, a random color of a specific family, or just an enumeration of "known colors."

## Usage
Huey contains 143 different named colors. It also maintains an internal closed list of used colors incase you don't want to repeat any.

The "unused" parameter is a boolean to determine whether or not to allow the generated color to be used again.


* Huey.colors: is an enumeration of known color names and their hex values
* Huey.GetRandomColorName(unused): returns a random color name string
* Huey.GetRandomColorHex(unused): returns a random color's hex value
* Huey.GetRandomColor(unused): returns an object containing the name and hex value of a random color
* Huey.GetRandomRed(unused): returns an object containing the name and hex value of a random red
* Huey.GetRandomPink(unused): returns an object containing the name and hex value of a random pink
* Huey.GetRandomOrange(unused): returns an object containing the name and hex value of a random orange
* Huey.GetRandomYellow(unused): returns an object containing the name and hex value of a random yellow
* Huey.GetRandomPurple(unused): returns an object containing the name and hex value of a random purple
* Huey.GetRandomGreen(unused): returns an object containing the name and hex value of a random green
* Huey.GetRandomBlue(unused): returns an object containing the name and hex value of a random blue
* Huey.GetRandomBrown(unused): returns an object containing the name and hex value of a random brown
* Huey.GetRandomWhite(unused): returns an object containing the name and hex value of a random white
* Huey.GetRandomGrey(unused): returns an object containing the name and hex value of a random grey
* Huey.ClearUsedList(): clears the used colors list, necessary when the functions start returning null
