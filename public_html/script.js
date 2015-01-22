/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document") .ready(function(){
    //for the none working acordian
    $('#c > p').hide();
    $('#c h5').click(function() {
        $(this).siblings('p:visible').slideUp('2000');
        $(this).next().animate({'height':'toggle'}, '2000', 'easeInOutExpo');
    });
    //the css designs
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
//  this accordian thing disrupts the pictures
//    $("#d").accordian({ header: "h5" });
    setInterval("slidePix()", 2000);

    
    $('#button1').bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    $('#3').bind('click', toggleTheText);
    $('#Add1').bind('click', addAPara);
    $('#remove1').bind('click', removeAPara);
    
});

function alertButtonClick() {
    alert("Pointless");
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

function toggleTheText() {
    $('h3').toggle(2500);
}

function highlightLogo() {
    $('h3').effect('highlight', {color: 'lime'}, 500);
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