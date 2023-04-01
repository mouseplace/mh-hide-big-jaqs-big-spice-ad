// ==UserScript==
// @name         🐭️ MouseHunt - Hide Big Jaq's Big Spice Ad
// @version      1.0.0
// @description  Hides the Big Jaq banner above your journal.
// @license      MIT
// @author       bradp
// @namespace    bradp
// @match        https://www.mousehuntgame.com/*
// @icon         https://brrad.com/mouse.png
// @grant        none
// @run-at       document-end
// ==/UserScript==
((function () {
  'use strict';

  const addStyles = document.createElement('style');
  addStyles.innerHTML = '.campPage-campHUDBlock.MiniEventBigJackCampHUD { display: none; }';
  document.head.appendChild(addStyles);
})());
