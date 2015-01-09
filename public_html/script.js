/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("documents") .ready(function(){
    $(".a").css({"background-color": "navy"});
    $('p:first').css({"background-color": "blue", "color": "aqua", "text-decoration": "underline"});
    $('p:last').css({"background-color": "green", "color": "lime", "font-style": "italic", "border": "20px solid limegreen"});
    $("h3").bind('click', alertButtonClick);
    $('#a').bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
});

function alertButtonClick() {
    alert("Why didn't you listen? You are now cursed with bad luck, just kidding");
} 

function mouseOverMe(){
    $('#a').html("Don't Do It");
}

function mouseOutMe(){
    $('#a').html("Don't Click Me");
}

function mouseClick(){
    $('p:last').html("hello");
}