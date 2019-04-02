"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Chad Williams
   Date:   4.2.19

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/

// step 3 on window load, runs setStyles function
window.onload = setStyles;


function setStyles() {
      // sets variable styleNum equal to whatever value is spit out by randInt function when 5 is inserted
      var styleNum = randInt(5);
      // creates html element
      var linkElem = document.createElement('link');
      // sets rel
      linkElem.setAttribute('rel', 'stylesheet');
      // sets id
      linkElem.setAttribute('id', 'fancySheet');
      // sets href, puts value returned by styleNum 
      linkElem.setAttribute('href', 'na_style_' + styleNum + '.css');
      document.head.appendChild(linkElem);

      // step 7
      // create html element
      var figBox = document.createElement('figure');
      // sets id
      figBox.setAttribute('id', 'styleThumbs');
      // get div with id of box
      var divBox = document.getElementById('box');
      // sticks figBox in divBox
      divBox.appendChild(figBox);

      // runs for five items
      for (var i = 0; i <= 4; i++) {
            // creates html element
            var sheetImg = document.createElement('img');
            // sets src, cancontanates them with value of index
            sheetImg.setAttribute('src', 'na_small_' + i + '.png');
            // sets alt, cancontanates them with value of index
            sheetImg.setAttribute('alt', 'na_style_' + i + '.css');





            // when sheetImg is clicked, runs anonymous function setting href of fancySheet to alt value of the one clicked
            sheetImg.addEventListener('click', function (e) {
                  document.getElementById('fancySheet').setAttribute('href', e.target.alt);
            })

            // puts sheetImg in figBox
            figBox.appendChild(sheetImg);


      }


      var fancySheet = document.createElement('style');
      document.head.appendChild(fancySheet);
      fancySheet.setAttribute('id', 'fancySheet');



      var thumbStyles = document.createElement('style');
      document.head.appendChild(thumbStyles);

      // inserts css with js into embedded style sheet
      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs { \
                   position: absolute; \
                   left: 0 px; \
                   bottom: 0 px; \
                  }", 0);
      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img { \
            outline: 1 px solid black; \
            cursor: pointer; \
            opacity: 0.75; \
            }", 1);
      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img:hover { \
                    outline: 1 px solid red; \
                   opacity: 1.0; \
            }", 2);

}





function randInt(size) {
      return Math.floor(size * Math.random());
}