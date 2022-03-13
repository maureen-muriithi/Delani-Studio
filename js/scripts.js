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



$('#formInfo').submit(function () {
    // e.preventDefault()
    var userName = $('#inputName').val();
    var userEmail = $('#inputEmail').val();
    var userMessage = $('#inputMessage').val();
     console.log("Message")
        alert(`Hello ${userName} . We have received your message. Thank you for contacting us.`);
    
});