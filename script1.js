function validPassword(){
    
    let y= document.getElementById('password').value
    let b=/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])[\w!@#$%^&*]{8,}$/.test(y);
        return (b)
    }
function validMail(){
    let y= document.getElementById('email').value
    let b=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(y);
        return (b)
    }
document.getElementById("sub").onclick=search
function search(){
    let i=0
    while(i<3){
    if (document.getElementsByClassName('form-control')[i].value=="")
        {
            var j=i
            break;
        }
    if (validMail()==false)
        { 
            j=3
            break;    
        }
    
    if (validPassword()==false)
        { 
            j=4
            break;
   
        }
    i++
    }
    
   
    
    switch (j){
        case 0: {alert("User name must be filled out");document.forms["myForm"].setAttribute("onsubmit", "return false")}
        break;
        case 1: {alert("Adress must be filled out");document.forms["myForm"].setAttribute("onsubmit", "return false")}
        break;
        case 2: {alert("Comments must be filled out");document.forms["myForm"].setAttribute("onsubmit", "return false")}
        break;
        case 3: {alert("E-mail invalid");document.forms["myForm"].setAttribute("onsubmit", "return false")}
        break;
        case 4: {alert("Password invalid \n it should coutains at least one number and one capital letter and minimum 8 caracters");document.forms["myForm"].setAttribute("onsubmit", "return false")}
        break;
        
        default: document.forms["myForm"].setAttribute("onsubmit", "return true")       
    }

    
   
}
document.getElementById("reset").onclick= blank
function blank(){
    for(let i=0;i<5;i++)
    document.getElementsByClassName('reset')[i].value=""
}
