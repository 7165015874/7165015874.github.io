$( document ).ready(function() {
    $("#navBar").load("text/navbar.html"); 
    $("#mainArea").load("text/home.html"); 
});

$('#home').click(function(){
    $("#mainArea").load("text/home.html"); 
});

$('#faq').click(function(){
    $("#mainArea").load("text/faq.html"); 
});