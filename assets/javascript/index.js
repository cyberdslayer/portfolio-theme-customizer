//?--------------------NAVBAR----------------------------------//

{
    let tVar = false;
    let toggleBtn = document.querySelector(".tBtn");
    let menu = document.querySelectorAll(".navbar li");

    toggleBtn.addEventListener("click", toggle);

    function toggle() {
        if (tVar === false) {
            show();
            tVar = true;
        } else if (tVar === true) {
            hide();
            tVar = false
        }

    }

    function show() {


        menu.forEach(function (element) {
            element.style.display = "block";
        })
    }

    function hide() {
        menu.forEach(function (element) {
            element.style.display = "none";
        })
    }

}


//? --------------------THEME_TOGGLE_STARTED----------------------------------//
let themeToggleVar = false;
let palette = document.querySelector(".theme-plate");
let btn = document.querySelector(".theme-btn");

btn.addEventListener("click", themeToggle);

// defining function for showing palette and hiding it

function showPalette() {
    palette.style.transform = "translateX(0)";
}

function hidePalette() {
    palette.style.transform = "translateX(var(--palette-width))";
}

function themeToggle() {
    if (themeToggleVar === false) {
        showPalette();
        themeToggleVar = true;
    } else if (themeToggleVar === true) {
        hidePalette();
        themeToggleVar = false;
    }
}

//?--------------------THEME_TOGGLE_ENDED----------------------------------//


// ?=====================THEME_SWITCHER====================================

let defaultSwitch = document.querySelector('.default');
let flatSwitch = document.querySelector('.flat');
let sunsetSwitch = document.querySelector('.sunset');
let subtleSwitch = document.querySelector('.subtle');
let seafoamSwitch = document.querySelector('.seafoam');
let primarySwitch = document.querySelector('.pri-color');
let secondarySwitch = document.querySelector('.sec-color');
let successSwitch = document.querySelector('.suc-color');
let dangerSwitch = document.querySelector('.dan-color');
let warningSwitch = document.querySelector(' .war-color');
let infoSwitch = document.querySelector('.info-color');
let targetedElements = document.documentElement;
let priColor = getComputedStyle(document.documentElement).getPropertyValue('--pri-back-color');
let secColor = getComputedStyle(document.documentElement).getPropertyValue('--sec-back-color');
document.querySelector('.color-code').innerText = priColor;
document.querySelector('.color-code-sec').innerText = secColor;



// * ================DEFAULT COLOR=========================

defaultSwitch.addEventListener("click", defaultColor);

function defaultColor() {

    document.documentElement.style.setProperty('--pri-back-color', 'rgb(0, 80, 228)');
    document.documentElement.style.setProperty('--sec-back-color', 'var(--default-sec-color');
    let priColor = getComputedStyle(document.documentElement).getPropertyValue('--pri-back-color');
    let secColor = getComputedStyle(document.documentElement).getPropertyValue('--sec-back-color');

    // changing text in html
    document.querySelector('.color-code').innerText = priColor;
    document.querySelector('.color-code-sec').innerText = secColor;
}

// * ================FLAT COLOR=========================

flatSwitch.addEventListener("click", flatColor);

function flatColor() {

    document.documentElement.style.setProperty('--pri-back-color', 'rgb(52, 178, 228)');
    document.documentElement.style.setProperty('--sec-back-color', 'var(--flat-sec-color');
    let priColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--pri-back-color');
    // console.log
    let secColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--sec-back-color');

    document.querySelector('.color-code').innerText = priColor;
    document.querySelector('.color-code-sec').innerText = secColor;
}


// * ================SUNSET COLOR=========================
sunsetSwitch.addEventListener("click", sunsetColor);

function sunsetColor() {

    document.documentElement.style.setProperty('--pri-back-color', 'rgb(248, 53, 53)');
    document.documentElement.style.setProperty('--sec-back-color', 'var(--sunset-sec-color');
    let priColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--pri-back-color');
    let secColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--sec-back-color');

    document.querySelector('.color-code').innerText = priColor;
    document.querySelector('.color-code-sec').innerText = secColor;
}

// * ================SUBTLE COLOR=========================
subtleSwitch.addEventListener("click", subtleColor);

function subtleColor() {

    document.documentElement.style.setProperty('--pri-back-color', 'rgb(129, 131, 124)');
    document.documentElement.style.setProperty('--sec-back-color', 'var(--subtle-sec-color');
    let priColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--pri-back-color');
    let secColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--sec-back-color');

    document.querySelector('.color-code').innerText = priColor;
    document.querySelector('.color-code-sec').innerText = secColor;
}

// * ================SEAFOAM COLOR=========================
seafoamSwitch.addEventListener("click", seafoamColor);

function seafoamColor() {

    document.documentElement.style.setProperty('--pri-back-color', 'rgb(22, 112, 38)');
    document.documentElement.style.setProperty('--sec-back-color', 'var(--seafoam-sec-color');
    let priColor = getComputedStyle(document.documentElement).getPropertyValue('--pri-back-color');
    let secColor = getComputedStyle(document.documentElement).getPropertyValue('--sec-back-color');
    document.querySelector('.color-code').innerText = priColor;
    document.querySelector('.color-code-sec').innerText = secColor;
}


// * ================SWITCH=========================
primarySwitch.addEventListener("click", showColor);
secondarySwitch.addEventListener("click", showColor2);
// successSwitch.addEventListener("click", showColor3);
// warningSwitch.addEventListener("click", showColor4);
// infoSwitch.addEventListener("click", showColor5);
// dangerSwitch.addEventListener("click", showColor6);


function showColor() {

    let colorInput1 = document.querySelector('.color-input');
    colorInput1.click();

}

function showColor2() {
    let colorInput2 = document.querySelector('.color-input2');
    colorInput2.click();
    colorInput2.setAttribute('value', 'rgb(0,250,0')

}
// function showColor3() {
//     let colorInput3 = document.querySelector('.color-input3');
//     colorInput3.click();
//     colorInput3.setAttribute('value', 'rgb(0,250,0')

// }
// function showColor4() {
//     let colorInput4 = document.querySelector('.color-input4');
//     colorInput4.click();
//     colorInput4.setAttribute('value', 'rgb(0,250,0')

// }
// function showColor5() {
//     let colorInput5 = document.querySelector('.color-input5');
//     colorInput5.click();
//     colorInput5.setAttribute('value', 'rgb(0,250,0')

// }
// function showColor6() {
//     let colorInput6 = document.querySelector('.color-input6');
//     colorInput6.click();
//     colorInput6.setAttribute('value', 'rgb(0,250,0')

// }


// * ================CHANGE FUNCTION=========================
function change1() {
    let colorInput1value = document.querySelector('.color-input').value;
    // console.log(colorInput1value)
    document.documentElement.style.setProperty('--pri-back-color', colorInput1value);
    let priColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--pri-back-color');
    document.querySelector('.color-code').innerText = priColor;
}

function change2() {
    let colorInput2value = document.querySelector('.color-input2').value;
    // console.log(colorInput2value)
    document.documentElement.style.setProperty('--sec-back-color', colorInput2value);

    let secColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--sec-back-color');
    document.querySelector('.color-code-sec').innerText = secColor;
}
// function change3() {
//     let colorInput3value = document.querySelector('.color-input3').value;
//     // console.log(colorInput2value)
//     document.documentElement.style.setProperty('--success-color', colorInput3value);

//     let secColor = getComputedStyle(document.documentElement)
//         .getPropertyValue('--success-color');
//     document.querySelector('.color-code-sec').innerText = secColor;
// }
// function change4() {
//     let colorInput4value = document.querySelector('.color-input4').value;
//     // console.log(colorInput2value)
//     document.documentElement.style.setProperty('--danger-color', colorInput4value);

//     let secColor = getComputedStyle(document.documentElement)
//         .getPropertyValue('--danger-color');
//     document.querySelector('.color-code-sec').innerText = secColor;
// }
// function change5() {
//     let colorInput5value = document.querySelector('.color-input5').value;
//     // console.log(colorInput2value)
//     document.documentElement.style.setProperty('--warn-color', colorInput5value);

//     let secColor = getComputedStyle(document.documentElement)
//         .getPropertyValue('--warn-color');
//     document.querySelector('.color-code-sec').innerText = secColor;
// }
// function change6() {
//     let colorInput6value = document.querySelector('.color-input6').value;
//     // console.log(colorInput2value)
//     document.documentElement.style.setProperty('--info-color', colorInput6value);

//     let secColor = getComputedStyle(document.documentElement)
//         .getPropertyValue('--info-color');
//     document.querySelector('.color-code-sec').innerText = secColor;
// }




//-----------------------dropdowns---------------------------//
{
    let tVar = false;
    let toggleBtn = document.querySelector(".landinglink");
    let menu = document.querySelector(".landing");

    toggleBtn.addEventListener("click", toggle);

    function toggle() {
        if (tVar === false) {
            show();
            tVar = true;
            // console.log(tVar)

        } else if (tVar === true) {
            hide();
            tVar = false
            // console.log(tVar)
        }


    }

    function show() {
        menu.style.opacity = "1";
        menu.classList.remove('d-none');
        console.log(menu.classList)

    }

    function hide() {
        menu.style.opacity = "0";
        menu.classList.add('d-none');
        // console.log(menu.classList)

    }

    window.onclick = function (e) {

        if (tVar == true) {
            if (e.target.matches('.landing') || !e.target.matches('.landinglink')) {
                hide();
                tVar = false;
                // console.log("FDF")


            }
        }
    }

}
//-------------------------pages drop-----------------------------------------//
{
    let tVar = false;
    let toggleBtn = document.querySelector(".page-link");
    let menu = document.querySelector(".pages");

    toggleBtn.addEventListener("click", toggle);
    // toggleBtn.addEventListener("c", toggle);

    function toggle() {
        if (tVar === false) {
            show();
            tVar = true;
            // console.log(tVar)

        } else if (tVar === true) {
            hide();
            tVar = false
            // console.log(tVar)
        }


    }

    function show() {
        //  console.log(menu)

        // menu.style.top = "var(--drop-width)";
        menu.style.opacity = "1";
        menu.classList.remove('d-none');
        // console.log(menu.classList)

    }

    function hide() {
        menu.style.opacity = "0";
        menu.classList.add('d-none');
        // console.log(menu.classList)

    }
    window.onclick = function (e) {

        if (tVar == true) {
            if (e.target.matches('.pages') || !e.target.matches('.page-link')) {
                hide();
                tVar = false;
                // console.log("FDF")


            }
        }
    }

}
//------------------documentation------------------/
{
    let tVar = false;
    let toggleBtn = document.querySelector(".doc-link");
    let menu = document.querySelector(".docs");

    toggleBtn.addEventListener("click", toggle);

    function toggle() {
        if (tVar === false) {
            show();
            tVar = true;
            // console.log(tVar)

        } else if (tVar === true) {
            hide();
            tVar = false
            // console.log(tVar)
        }


    }

    function show() {
        //  console.log(menu)

        menu.style.opacity = "1";
        menu.classList.remove('d-none');
        console.log(menu.classList)

    }

    function hide() {
        menu.style.opacity = "0";
        menu.classList.add('d-none');
        // console.log(menu.classList)
    }
    window.onclick = function (e) {

        if (tVar == true) {
            if (e.target.matches('.docs') || !e.target.matches('.doc-link')) {
                hide();
                tVar = false;
                // console.log("FDF")


            }
        }
    }

}