let formBtn = document.querySelector('.btn');
let loader = document.querySelector('.loader');
formBtn.addEventListener('click', ()=>{
    let name = document.querySelector('.cname') ;
    let email = document.querySelector('.cemail') ;
    let textarea = document.querySelector('.ctextarea');
    
    if(name.value.length<1){
        showFormError("Please enter your name");
    }
    else if(!email.value.length){
        showFormError("Please enter your Email");
    }
    else if(!textarea.value.length){
        showFormError("Please enter your message");
    }
    else{
        // loader.style.display = 'block';
        sendData('/contact',{
            name: name.value,
            email: email.value,
            textarea: textarea.value
        })
    }
})