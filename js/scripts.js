$(document).ready(function(){
    $("#design").click(function(){
        $("#designInfo").toggle();
        $("#designImage").toggle();
    })
    
    $("#development").click(function(){
        $("#devInfo").toggle();
        $("#devImage").toggle();
    })
    
    $("#productManagement").click(function(){
        $("#productInfo").toggle();
        $("#productImage").toggle();
    })

    // $ ("img#workImage1").hover(function(){
    //     $("img#workImage1").text("p#projectName1");
    //     $("img#workImage1").hover(function(){
    //         }, function(){
    //             $("p#projectName1");
    //     });
    // });
})



$('.submit').submit(function (e) {
    e.preventDefault()
    var userName = $('#inputName').val();
    var userEmail = $('#inputEmail').val();
    var userMessage = $('#inputMessage').val();
    var key ='c8fbd9a0cf3958e02be2822e55cfbfc5-us4';

    if (userName == '' || userEmail == '' || userMessage == '') {
        alert('Please fill in all fields!');
    } 
    else {
        alert(`Hello +userName+ . We have received your message. Thank you for contacting us.`);
    }
});