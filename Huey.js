/* Huey.js
 * A Javascript library for getting random colors, a random color of a specific family, or just an enumeration of "known colors."
 * Christopher A. Boler
 * 7/28/2015
 * 
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Christopher A. Boler
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
var Huey = (function () {
    var usedColors = [];
    function GetRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function ContainsRange(start, end, haystack) {
        var needles = [];
        for (var i = start; i <= end; i++) {
            needles.push(i);
        }
        for (var i = 0, len = needles.length; i < len; i++) {
            if (haystack.indexOf(needles[i]) == -1) return false;
        }
        return true;
    }
    return {
        colors: [
           { 'indianred': 'CD5C5C' },
           { 'lightcoral': 'F08080' },
           { 'salmon': 'FA8072' },
           { 'darksalmon': 'FA8072' },
           { 'lightsalmon': 'FA8072' },
           { 'crimson': 'FA8072' },
           { 'red': 'FA8072' },
           { 'firebrick': 'FA8072' },
           { 'darkred': 'FA8072' },
           { 'pink': 'FFC0CB' },
           { 'lightpink': 'FFB6C1' },
           { 'hotpink': 'FF69B4' },
           { 'deeppink': 'FF1493' },
           { 'mediumvioletred': 'C71585' },
           { 'palevioletred': 'DB7093' },
           { 'lightsalmon': 'FFA07A' },
           { 'coral': 'FF7F50' },
           { 'tomato': 'FF6347' },
           { 'orangered': 'FF4500' },
           { 'darkorange': 'FF8C00' },
           { 'orange': 'FFA500' },
           { 'gold': 'FFD700' },
           { 'yellow': 'FFFF00' },
           { 'lightyellow': 'FFFFE0' },
           { 'lemonchiffon': 'FFFACD' },
           { 'lightgoldenrodyellow': 'FAFAD2' },
           { 'papayawhip': 'FFEFD5' },
           { 'moccasin': 'FFE4B5' },
           { 'peachpuff': 'FFDAB9' },
           { 'palegoldenrod': 'EEE8AA' },
           { 'khaki': 'F0E68C' },
           { 'darkkhaki': 'BDB76B' },
           { 'lavender': 'E6E6FA' },
           { 'thistle': 'D8BFD8' },
           { 'plum': 'DDA0DD' },
           { 'violet': 'EE82EE' },
           { 'orchid': 'DA70D6' },
           { 'fuchsia': 'FF00FF' },
           { 'magenta': 'FF00FF' },
           { 'mediumorchid': 'BA55D3' },
           { 'mediumpurple': '9370DB' },
           { 'amethyst': '9966CC' },
           { 'blueviolet': '8A2BE2' },
           { 'darkviolet': '9400D3' },
           { 'darkorchid': '9932CC' },
           { 'darkmagenta': '8B008B' },
           { 'purple': '800080' },
           { 'indigo': '4B0082' },
           { 'slateblue': '6A5ACD' },
           { 'darkslateblue': '483D8B' },
           { 'mediumslateblue': '7B68EE' },
           { 'greenyellow': 'ADFF2F' },
           { 'chartreuse': '7FFF00' },
           { 'lawngreen': '7CFC00' },
           { 'lime': '00FF00' },
           { 'limegreen': '32CD32' },
           { 'palegreen': '98FB98' },
           { 'lightgreen': '90EE90' },
           { 'mediumspringgreen': '00FA9A' },
           { 'springgreen': '00FF7F' },
           { 'mediumseagreen': '3CB371' },
           { 'seagreen': '2E8B57' },
           { 'forestgreen': '228B22' },
           { 'green': '008000' },
           { 'darkgreen': '006400' },
           { 'yellowgreen': '9ACD32' },
           { 'olivedrab': '6B8E23' },
           { 'olive': '808000' },
           { 'darkolivegreen': '556B2F' },
           { 'mediumaquamarine': '66CDAA' },
           { 'darkseagreen': '8FBC8F' },
           { 'lightseagreen': '20B2AA' },
           { 'darkcyan': '008B8B' },
           { 'teal': '008080' },
           { 'aqua': '00FFFF' },
           { 'cyan': '00FFFF' },
           { 'lightcyan': 'E0FFFF' },
           { 'paleturquoise': 'AFEEEE' },
           { 'aquamarine': '7FFFD4' },
           { 'turquoise': '40E0D0' },
           { 'mediumturquoise': '48D1CC' },
           { 'darkturquoise': '00CED1' },
           { 'cadetblue': '5F9EA0' },
           { 'steelblue': '4682B4' },
           { 'lightsteelblue': 'B0C4DE' },
           { 'powderblue': 'B0E0E6' },
           { 'lightblue': 'ADD8E6' },
           { 'skyblue': '87CEEB' },
           { 'lightskyblue': '87CEFA' },
           { 'deepskyblue': '00BFFF' },
           { 'dodgerblue': '1E90FF' },
           { 'cornflowerblue': '6495ED' },
           { 'mediumslateblue': '7B68EE' },
           { 'royalblue': '4169E1' },
           { 'blue': '0000FF' },
           { 'mediumblue': '0000CD' },
           { 'darkblue': '00008B' },
           { 'navy': '000080' },
           { 'midnightblue': '191970' },
           { 'cornsilk': 'FFF8DC' },
           { 'blanchedalmond': 'FFEBCD' },
           { 'bisque': 'FFE4C4' },
           { 'navajowhite': 'FFDEAD' },
           { 'wheat': 'F5DEB3' },
           { 'burlywood': 'DEB887' },
           { 'tan': 'D2B48C' },
           { 'rosybrown': 'BC8F8F' },
           { 'sandybrown': 'F4A460' },
           { 'goldenrod': 'DAA520' },
           { 'darkgoldenrod': 'B8860B' },
           { 'peru': 'CD853F' },
           { 'chocolate': 'D2691E' },
           { 'saddlebrown': '8B4513' },
           { 'sienna': 'A0522D' },
           { 'brown': 'A52A2A' },
           { 'maroon': '800000' },
           { 'white': 'FFFFFF' },
           { 'snow': 'FFFAFA' },
           { 'honeydew': 'F0FFF0' },
           { 'mintcream': 'F5FFFA' },
           { 'azure': 'F0FFFF' },
           { 'aliceblue': 'F0F8FF' },
           { 'ghostwhite': 'F8F8FF' },
           { 'whitesmoke': 'F5F5F5' },
           { 'seashell': 'FFF5EE' },
           { 'beige': 'F5F5DC' },
           { 'oldlace': 'FDF5E6' },
           { 'floralwhite': 'FFFAF0' },
           { 'ivory': 'FFFFF0' },
           { 'antiquewhite': 'FAEBD7' },
           { 'linen': 'FAF0E6' },
           { 'lavenderblush': 'FFF0F5' },
           { 'mistyrose': 'FFE4E1' },
           { 'gainsboro': 'DCDCDC' },
           { 'lightgrey': 'D3D3D3' },
           { 'silver': 'C0C0C0' },
           { 'darkgray': 'A9A9A9' },
           { 'gray': '808080' },
           { 'dimgray': '696969' },
           { 'lightslategray': '778899' },
           { 'slategray': '708090' },
           { 'darkslategray': '2F4F4F' },
           { 'black': '000000' }
        ],
        GetRandomColorName: function (unused) {
            unused = unused || false;
            var index = -1;
            if (unused) {
                if (usedColors.length == 143) {
                    return null;
                }
                index = GetRandomInt(0, Huey.colors.length);
                while(usedColors.indexOf(index) > -1)
                    index = GetRandomInt(0, Huey.colors.length);
                usedColors.push(index);
                return Object.keys(Huey.colors[index])[0];
            } else {
                index = GetRandomInt(0, Huey.colors.length);
            }
            return Object.keys(Huey.colors[index])[0];
        },
        GetRandomColorHex: function (unused) {
            unused = unused || false;
            var index = -1;
            if (unused) {
                if (usedColors.length == 143) {
                    return null;
                }
                index = GetRandomInt(0, Huey.colors.length);
                while (usedColors.indexOf(index) > -1)
                    index = GetRandomInt(0, Huey.colors.length);
                usedColors.push(index);
                return Object.keys(Huey.colors[index]).map(function (key) { return Huey.colors[index][key] })[0];
            } else {
                index = GetRandomInt(0, Huey.colors.length);
            }
            return Object.keys(Huey.colors[index]).map(function (key) { return Huey.colors[index][key] })[0];
        },
        GetRandomColor: function (unused) {
            unused = unused || false;
            var index = -1;
            if (unused) {
                if (usedColors.length == 143) {
                    return null;
                }
                index = GetRandomInt(0, Huey.colors.length);
                while (usedColors.indexOf(index) > -1)
                    index = GetRandomInt(0, Huey.colors.length);
                usedColors.push(index);
                return Huey.colors[index];
            } else {
                index = GetRandomInt(0, Huey.colors.length);
            }
            return Huey.colors[index];
        },
        GetRandomRed: function (unused) {
            unused = unused || false;
            var index = -1;
            if (unused) {
                if (ContainsRange(0, 8, usedColors)) {
                    return null;
                }
                index = GetRandomInt(0, 8);
                while (usedColors.indexOf(index) > -1)
                    index = GetRandomInt(0, 8);
                usedColors.push(index);
                return Huey.colors[index];
            } else {
                index = GetRandomInt(0, 8);
            }
            return Huey.colors[index];
        },
        GetRandomPink: function (unused) {
            unused = unused || false;
            var index = -1;
            if (unused) {
                if (ContainsRange(9, 14, usedColors)) {
                    return null;
                }
                index = GetRandomInt(9, 14);
                while (usedColors.indexOf(index) > -1)
                    index = GetRandomInt(9, 14);
                usedColors.push(index);
                return Huey.colors[index];
            } else {
                index = GetRandomInt(9, 14);
            }
            return Huey.colors[index];
        },
        GetRandomOrange: function (unused) {
            unused = unused || false;
            var index = -1;
            if (unused) {
                if (ContainsRange(15, 20, usedColors)) {
                    return null;
                }
                index = GetRandomInt(15, 20);
                while (usedColors.indexOf(index) > -1)
                    index = GetRandomInt(15, 20);
                usedColors.push(index);
                return Huey.colors[index];
            } else {
                index = GetRandomInt(15, 20);
            }
            return Huey.colors[index];
        },
        GetRandomYellow: function (unused) {
            unused = unused || false;
            var index = -1;
            if (unused) {
                if (ContainsRange(21, 31, usedColors)) {
                    return null;
                }
                index = GetRandomInt(21, 31);
                while (usedColors.indexOf(index) > -1)
                    index = GetRandomInt(21, 31);
                usedColors.push(index);
                return Huey.colors[index];
            } else {
                index = GetRandomInt(21, 31);
            }
            return Huey.colors[index];
        },
        GetRandomPurple: function (unused) {
            unused = unused || false;
            var index = -1;
            if (unused) {
                if (ContainsRange(32, 50, usedColors)) {
                    return null;
                }
                index = GetRandomInt(32, 50);
                while (usedColors.indexOf(index) > -1)
                    index = GetRandomInt(32, 50);
                usedColors.push(index);
                return Huey.colors[index];
            } else {
                index = GetRandomInt(32, 50);
            }
            return Huey.colors[index];
        },
        GetRandomGreen: function (unused) {
            unused = unused || false;
            var index = -1;
            if (unused) {
                if (ContainsRange(51, 73, usedColors)) {
                    return null;
                }
                index = GetRandomInt(51, 73);
                while (usedColors.indexOf(index) > -1)
                    index = GetRandomInt(51, 73);
                usedColors.push(index);
                return Huey.colors[index];
            } else {
                index = GetRandomInt(51, 73);
            }
            return Huey.colors[index];
        },
        GetRandomBlue: function (unused) {
            unused = unused || false;
            var index = -1;
            if (unused) {
                if (ContainsRange(74, 98, usedColors)) {
                    return null;
                }
                index = GetRandomInt(74, 98);
                while (usedColors.indexOf(index) > -1)
                    index = GetRandomInt(74, 98);
                usedColors.push(index);
                return Huey.colors[index];
            } else {
                index = GetRandomInt(74, 98);
            }
            return Huey.colors[index];
        },
        GetRandomBrown: function (unused) {
            unused = unused || false;
            var index = -1;
            if (unused) {
                if (ContainsRange(99, 115, usedColors)) {
                    return null;
                }
                index = GetRandomInt(99, 115);
                while (usedColors.indexOf(index) > -1)
                    index = GetRandomInt(99, 115);
                usedColors.push(index);
                return Huey.colors[index];
            } else {
                index = GetRandomInt(99, 115);
            }
            return Huey.colors[index];
        },
        GetRandomWhite: function (unused) {
            unused = unused || false;
            var index = -1;
            if (unused) {
                if (ContainsRange(116, 132, usedColors)) {
                    return null;
                }
                index = GetRandomInt(116, 132);
                while (usedColors.indexOf(index) > -1)
                    index = GetRandomInt(116, 132);
                usedColors.push(index);
                return Huey.colors[index];
            } else {
                index = GetRandomInt(116, 132);
            }
            return Huey.colors[index];
        },
        GetRandomGrey: function (unused) {
            unused = unused || false;
            var index = -1;
            if (unused) {
                if (ContainsRange(133, 142, usedColors)) {
                    return null;
                }
                index = GetRandomInt(133, 142);
                while (usedColors.indexOf(index) > -1)
                    index = GetRandomInt(133, 142);
                usedColors.push(index);
                return Huey.colors[index];
            } else {
                index = GetRandomInt(133, 142);
            }
            return Huey.colors[index];
        },
        ClearUsedList: function () {
            usedColors = [];
        }
    };
}(Huey || {}));