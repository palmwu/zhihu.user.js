// ==UserScript==
// @name         ZhihuHelper
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  A real "helper" amony Zhihu
// @author       You
// @match        https://*.zhihu.com/*
// @grant        none
// @require http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

function AddPersonalStyle() {
    'use strict';
    var myStyle = document.createElement("style");
    myStyle.setAttribute("id","myStyle");
    myStyle.setAttribute("type","text/css");
    myStyle.appendChild(document.createTextNode(""));
    document.head.appendChild(myStyle);
    myStyle.sheet.insertRule('.GlobalSideBar{display:none}',0);
    myStyle.sheet.insertRule('figure{display:none}',1);
    myStyle.sheet.insertRule('.ContentItem-title{font-size:15px;font-weight:400}',2);
    myStyle.sheet.insertRule('.RichContent-cover{display:none}',3);
    myStyle.sheet.insertRule('.ContentItem-actions{display:none}',4);
    myStyle.sheet.insertRule('.Sticky div a svg{display:none}',5);
    myStyle.sheet.insertRule('.TopstoryItem--advertCard{display:none}',5);
    myStyle.sheet.insertRule('.btnFloatCorner{position:fixed;margin:20px;float:right;top:50px}',6);
}
AddPersonalStyle();

function AddControlBtn(){
    var ctlBtn = document.createElement("button");
    ctlBtn.setAttribute("id", "mainCtlBtn");
    ctlBtn.setAttribute("class", "btnFloatCorner");
    var btnText = document.createTextNode("ShowPic");
    ctlBtn.appendChild(btnText);
    document.body.appendChild(ctlBtn);
}
AddControlBtn();

/*******************************Below is functions********************************** */
$("#mainCtlBtn").on("click", function (){
    var styleElement = document.getElementById("myStyle");
    console.log(styleElement.sheet.cssRules[1].style.display);
    if(styleElement.sheet.cssRules[1].style.display == "none"){
        styleElement.sheet.cssRules[1].style.display = "block";
    }else{
        styleElement.sheet.cssRules[1].style.display = "none";
    }
});