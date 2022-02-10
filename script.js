// ==UserScript==
// @name         Numberpad
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.physicsclassroom.com/*
// @icon         https://www.google.com/s2/favicons?domain=physicsclassroom.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function getElementByXpath(path) {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }
    document.addEventListener('keydown', function(event) {
        if(event.keyCode == 48) {
            //alert('0');
            getElementByXpath("/html/body/div/div[1]/div[4]/div[12]/div/div[14]/div").click();
            console.log(getElementByXpath("/html/body/div/div[1]/div[4]/div[12]/div/div[14]/div/b"));
            //document.getElementByClass("HYPE_element").click();
        }
        else if(event.keyCode == 49) {
            alert('1');
        }
        else if(event.keyCode == 50) {
            alert('2');
        }
        else if(event.keyCode == 51) {
            alert('3');
        }
        else if(event.keyCode == 52) {
            alert('4');
        }
        else if(event.keyCode == 53) {
            alert('5');
        }
        else if(event.keyCode == 54) {
            alert('6');
        }
        else if(event.keyCode == 55) {
            alert('7');
        }
        else if(event.keyCode == 56) {
            alert('8');
        }
        else if(event.keyCode == 57) {
            alert('9');
        }
    });
})();









































