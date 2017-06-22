var i = -1
document.addEventListener("DOMContentLoaded", function () {
    var button = document.createElement('button');
    button.innerText = 'CLICK'
    document.body.appendChild(button)
    var container = document.createElement('div')
    document.body.appendChild(container)
    button.addEventListener("click", function () {
        var box = document.createElement('div');
        box.className = 'boxes';
        i++;
        box.id = [i]
        box.addEventListener('mouseover', function () {
            box.innerText = box.id;
        });
        box.addEventListener('mouseleave', function () {
            box.innerText = '';
        });
        box.addEventListener('click', function () {
            var backColor = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"]
            var random = backColor[Math.floor(Math.random() * backColor.length)];
            box.style.backgroundColor = (random);
        })
        box.addEventListener('dblclick', function () {
            if (box.id % 2 !== 0 && box == container.firstChild) {
                alert('No Element')   
            }
            else if (box.id % 2 !== 0) {
                box.previousElementSibling.remove()
            }
            else if (box == container.lastChild) {
                alert('No Element!')
            }
            else if (box.id % 2 == 0) {
                box.nextElementSibling.remove()
            }
        })
        container.appendChild(box)
        var boxCount = document.querySelectorAll(container > box).length;
    });
});