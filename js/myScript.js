// SHOW HEADER AREA JQUERY
$(document).ready(function () {
    var $xH = $('#header');
    var $xT = $('.title');
    $xH.mouseenter(function () {
        $xT.slideDown(1000);
        // this.style.display = 'flex';
    });
});
/* --------------------
    END OF CODING BLOCK
-------------------- */



/* --------------------
    TEXT-BOX P TAG ITALIC TEXT
-------------------- */
var tBox = document.getElementsByClassName('text-box');
var paraSlant = document.querySelectorAll('.text-box p');
var jsText = document.getElementById('jsText');

jsText.innerHTML = '*** Italics added with Javascript ***';
jsText.style.marginTop = '20px';
jsText.style.border = 'thin solid #f2f2f2';

Array.from(paraSlant).forEach(function(pNum) {
    pNum.style.fontStyle = 'italic';
})

console.log(tBox);
/* --------------------
    END OF CODING BLOCK
-------------------- */



/* --------------------
    SECTION 2 BOX MANIPULATION
-------------------- */
var allLis = document.querySelectorAll('#testMenu li a');
Array.from(allLis).forEach(function(oneLi) {
    oneLi.style.color = '#383838';
    oneLi.style.backgroundColor = '#b2b2b2';
    oneLi.innerHTML = 'JS textChg';
    // console.log(oneLi);
})
/* --------------------
    END OF CODING BLOCK
-------------------- */



/* --------------------
    CREATED P TAG FROM BTN PUSH
-------------------- */
var btnPush = document.getElementById('btnPush');
btnPush.addEventListener('click', addMe);
btnPush.style.color = '#333';
btnPush.style.marginTop = '20px';

function addMe() {
    // Create PARAGRAPH tag ==========
    var x = document.createElement('P');

    // Create text to Append to P Tag ==========
    var t = document.createTextNode('Created this ' + x.nodeName + ' tag with text, using Javascript.');

    // Section 2 area for Appended P Tag ==========
    var sec2 = document.getElementById('btnResult');

    // Append text to P Tag ==========
    x.appendChild(t);
    // testBtn.appendChild(btnText);

    // Append P Tag to Section 2 ==========
    sec2.appendChild(x);
    x.style.marginTop = '10px';
    // console.log(x);
}
/* --------------------
    END OF CODING BLOCK
-------------------- */



/* --------------------
    SCREEN WIDTH & HEIGHT
-------------------- */
var xScreen = 'Width: ' + screen.width;
var yScreen = 'Height: ' + screen.height;
var mySize = document.getElementById('screenSize');
mySize.innerHTML = xScreen + ' px<br>' + yScreen + ' px';
// mySize.style.width = '40%';
// mySize.style.margin = '10px auto 20px';
// mySize.style.padding = '1em';
// mySize.style.backgroundColor = '#333';
mySize.style.textAlign = 'center';
mySize.style.border = '1px solid #f7f7f7';
mySize.style.borderRadius = '10px';
/* --------------------
    END OF CODING BLOCK
-------------------- */



/* --------------------
    MODIFICATION TIME & DATE
-------------------- */
var modDate = document.getElementById('showDate');
modDate.innerHTML = 'Last Modification: <br>' + document.lastModified;
// modDate.style.width = '40%';
// modDate.style.margin = '10px auto';
modDate.style.padding = '1em';
// modDate.style.color = '#333';
// modDate.style.backgroundColor = '#fff';
modDate.style.textAlign = 'center';
modDate.style.border = '1px solid #f7f7f7';
modDate.style.borderRadius = '10px';
// console.log(modDate);
/* --------------------
    END OF CODING BLOCK
-------------------- */



/* --------------------
    PLAY GROUND
-------------------- */
// var pGround = document.getElementById('playGround');
// pGround.innerHTML = pGround.textContent;
// pGround.style.width = '100%';
// pGround.style.margin = '30vh auto 0';
// pGround.style.textAlign = 'center';
// pGround.style.background = '#b2b2b2';
// pGround.style.color = '#333';
//
// var pTime = document.querySelectorAll('li a')[3];
// pGround.innerHTML = pGround;
// console.log(pTime);

/* --------------------
    END OF CODING BLOCK
-------------------- */




// SHOW HEADER AREA JAVASCRIPT
/* var hBox = document.getElementById('header');
hBox.addEventListener('mouseover', showUp);
hBox.addEventListener('mouseout', hideTitle);

function showUp() {
    var tBox = document.getElementById('headerTitle');
    // tBox.style.display = 'block';
    tBox.style.visibility = 'visible';
};
function hideTitle() {
    var tBox = document.getElementById('headerTitle');
    // tBox.style.display = 'block';
    tBox.style.visibility = 'hidden';
    // console.log(tBox);
};
-------------------- */



// MAKE HTML COLLECTIONS AN ARRAY
/* --------------------
var pics = document.querySelectorAll('.img-container');

Array.from(pics).forEach(function(pic) {
    console.log(pic);
});
-------------------- */


/* --------------------
    SECTION 1 PIC HOVER CHANGE JAVASCRIPT
-------------------- */
/* x1 = document.getElementById('img1');
x2 = document.getElementById('img2');
x3 = document.getElementById('img3');
x1.addEventListener('mouseover', chgMe1);
x2.addEventListener('mouseover', chgMe2);
x3.addEventListener('mouseover', chgMe3); */


/* --------------------
var pics = document.querySelectorAll('#designsTop .img-container img');
Array.from(pics).forEach(function(pic) {
    pic.addEventListener('click', function(e) {
        console.log(e);
    })
});
-------------------- */

// function chgMe1() {
//     x1.src = 'img/facebook-cover-2.png';
//     x1.style.transitionDuration = '1s';
// };
// function chgMe2() {
//     x2.src = 'img/wp-riverfront.png';
// };
// function chgMe3() {
//     x3.src = 'img/facebook-cover-4.png';
// };



/* --------------------
    SECTION 2 PRACTICE
-------------------- */
// var tM = document.querySelectorAll('#testMenu li a');
// console.log(tM);
