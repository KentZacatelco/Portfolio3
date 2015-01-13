/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("documents") .ready(function(){
    $(".a").css({"background-color": "navy"});
    $(".b").css({"background-color": "purple"});
    $('p:first').css({"background-color": "blue", "color": "aqua", "text-decoration": "underline"});
    $('p:last').css({"background-color": "green", "color": "lime", "font-style": "italic", "border": "20px solid limegreen"});
    $("h3").css({"color": "white"});
    $("h4").css({"color": "white"});
    $('#b').css({"background-color": "green", "color": "lime"});
    $("h3").bind('click', alertButtonClick);
    $("div[class]").css("border", "3px solid black");
    
    $('#a').bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    $('#1').bind('click', hideTheImage);
    $('#2').bind('click', showTheImage);
    $('#3').bind('click', toggleTheText);
    $('#4').bind('click', fadeTheImage);
    $('#5').bind('click', fadeALittle);
    $('#6').bind('click', fullOpacityImage);
    $('#7').bind('click', slideTheImage);
    $('#8').bind('click', unslideTheImage);
    $('#9').bind('click', customAnimate);
    $('#10').bind('click', shakeLogo);
    $('#11').bind('click', bounceLogo);
    $('#12').bind('click', highlightLogo);
    $('#13').bind('click', pulsateLogo);
    $('#14').bind('click', sizeLogo);
    
});

function alertButtonClick() {
    alert("Why didn't you listen? You are now cursed with bad luck, just kidding.");
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

function hideTheImage() {
    $('#').hide('puff', {}, 2500);
}

function showTheImage() {
    $('#').show('fold', {}, 2500);
}

function toggleTheText() {
    $('h3').toggle(2500);
}

function fadeTheImage() {
    $('#').fadeOut(2500);
}
function fadeALittle() {
    $('#').fadeTo(2500, .30);
}

function fullOpacityImage(){
    $('#').fadeTo(2500, 1);
}

function slideTheImage() {
    $('#').slideUp(2500);
}

function unslideTheImage() {
    $('#').slideDown(2500);
}
function customAnimate() {
    $('#').animate({opacity: 0.25, height: '150px'}, 2000, 'easeOutElastic');
}

function shakeLogo() {
    $('#').effect('shake', {times: 5, direction: 'down', distance: 10}, 200);
}

function bounceLogo() {
    $('#').effect('bounce', {times: 5, direction: 'up', distance: 10}, 200);
}

function highlightLogo() {
    $('h3').effect('highlight', {color: 'lime'}, 500);
}

function pulsateLogo() {
    $('#').effect('pulsate', {times: 500}, 200);
}

function sizeLogo() {
    $('#').effect('size', {to: {height: 200, width: 200}});
}