/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("documents") .ready(function(){
    $('#c > body').hide();
    $('#c').click(function() {
        $(this).siblings('p:visible').slideUp('2000');
        $(this).next().animate({'height':'toggle'}, '2000', 'easeInOutExpo');
    });
    $(".a").css({"background-color": "navy"});
    $(".b").css({"background-color": "purple", "text-color": "white"});
    $('p:first').css({"background-color": "blue", "color": "aqua", "text-decoration": "underline"});
    $("div p:last-child").css({"background-color": "green", "color": "lime", "font-style": "italic", "border": "20px solid limegreen"});
    $("h3").css({"color": "white"});
    $("h4").css({"color": "white"});
    $('#button1').css({"background-color": "blue"});
    $('#b').css({"background-color": "green", "color": "lime"});
    $('button1').bind('click', alertButtonClick);
    $("div[class]").css("border", "3px solid black");
///    $("#").accordian({ header: "h4" });
    setInterval("slidePix()", 2000);

    
    $('#button1').bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
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
    $('#Add1').bind('click', addAPara);
    $('#remove1').bind('click', removeAPara);
    
});

function alertButtonClick() {
    alert("Why didn't you listen? You are now cursed with bad luck, just kidding.");
} 

function mouseOverMe(){
    $('#a').html("Don't Do It");
}

function mouseOutMe(){
    $('#a').html("Don't Click It");
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

function addAPara() {
    $('#Add1').append('<p>Paragraph Added</p>');
}

function removeAPara() {
    $('#Add1 p:last').remove('');
}

function slidePix() {
    var curPic = $('#flipPix div.active');
    var nextPic = curPic.next();
    if (nextPic.length === 0){
        nextPic = $('#flipPix div:first');
    }
    
    curPic.removeClass('active').addClass('prev');
    nextPic.css({opacity:0.0}).addClass('active').animate({opacity:1.0}, 2000,  function() {
        curPic.removeClass('prev');
    });
}