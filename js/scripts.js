$(document).ready(function(){
    // toggle function on the 'What we do" section, to display description
    $("#design").click(function(){
        $("#designInfo").toggle();
        $("#designImage").toggle();
    });
    
    $("#development").click(function(){
        $("#devInfo").toggle();
        $("#devImage").toggle();
    });
    
    $("#productManagement").click(function(){
        $("#productInfo").toggle();
        $("#productImage").toggle();
    });

    $("#prj-work1").hover(function(){
        $("#projectName1").addClass("project-hover")
        
    }, function(){
        $("#projectName1").removeClass("project-hover")
    });

    // Hover function on the portfolio section
    $("#prj-work2").hover(function(){
        $("#projectName2").addClass("project-hover")
        
    }, function(){
        $("#projectName2").removeClass("project-hover")
    });

    $("#prj-work3").hover(function(){
        $("#projectName3").addClass("project-hover")
        
    }, function(){
        $("#projectName3").removeClass("project-hover")
    });

    $("#prj-work4").hover(function(){
        $("#projectName4").addClass("project-hover")
        
    }, function(){
        $("#projectName4").removeClass("project-hover")
    });

    $("#prj-work5").hover(function(){
        $("#projectName5").addClass("project-hover")
        
    }, function(){
        $("#projectName5").removeClass("project-hover")
    });

    $("#prj-work6").hover(function(){
        $("#projectName6").addClass("project-hover")
        
    }, function(){
        $("#projectName6").removeClass("project-hover")
    });

    $("#prj-work7").hover(function(){
        $("#projectName7").addClass("project-hover")
        
    }, function(){
        $("#projectName7").removeClass("project-hover")
    });

    $("#prj-work8").hover(function(){
        $("#projectName8").addClass("project-hover")
        
    }, function(){
        $("#projectName8").removeClass("project-hover")
    });
});



$('#formInfo').submit(function() {
    // e.preventDefault()
    var userName = $('#inputName').val();
    var userEmail = $('#inputEmail').val();
    var userMessage = $('#inputMessage').val();
     console.log("Message")
        alert(`Hello ${userName} . We have received your message. Thank you for contacting us.`);
    
});