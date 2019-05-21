$(document).ready(function() {
    
    var email = $('#email')
    var name = $('#name')
    var message = $('#message')
    
    $('#submit').click(function(event) {
        
        if(CheckerOnValid(email) &&
           CheckerOnValid(name) &&
           CheckerOnValid(message)){
            console.log("All is right!");
        }else{
            console.log("Something is wrong!");
        }
    })
    
    $(name).blur(function(event){
        if(!CheckerOnValid(name)){
             event.target.style.backgroundColor = "#B22222";
        }else{
            event.target.style.backgroundColor = "#3CB371";
        }
    })
    $(email).blur(function(event){
        if(!CheckerOnValid(email)){
             event.target.style.backgroundColor = "#B22222";
        }else{
            event.target.style.backgroundColor = "#3CB371";
        }
    })
    $(message).blur(function(event){
        if(!CheckerOnValid(message)){
             event.target.style.backgroundColor = "#B22222";
        }else{
            event.target.style.backgroundColor = "#3CB371";
        }
    })
    
    function CheckerOnValid(nameInput){
        var result = false;
        
        switch(nameInput){
            case email:
                if(CheckerEmailValid(nameInput.val())){
                    result = true;
                }else{
                    event.preventDefault()
                    result = false;
                }
                break;
            case name:
                if(nameInput.val().length > 2){
                    result = true;
                }else{
                    event.preventDefault()
                    result = false;
                }
                break;
            case message:
                if(nameInput.val().length > 5 ){
                    result = true;
                }else{
                    event.preventDefault()
                    result = false;
                }
                break;
        }
        return result;
    }
    function CheckerEmailValid(emailInput){
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        return pattern .test(String(emailInput).toLowerCase());
    }
})

