window.onload = () =>{
    user = JSON.parse(sessionStorage.user || null);
    if(user == null){
        location.replace('/login');
    }else if(user.seller){
        location.replace('/dashboard');
    }
}

let loader = document.querySelector('.loader');
let applyBtn = document.querySelector('.apply-btn');

applyBtn.addEventListener('click', ()=>{

    let businessName = document.querySelector('#name').value;
    let address = document.querySelector('#address').value;
    let number = document.querySelector('#number').value;
    let about = document.querySelector('#about').value;
    
    if(!businessName.length || !about.length || !address.length || number < 10 || !Number(number)){
        showFormError('some information(s) is/are incorrect');
    }
    else{
        //send data
        loader.style.display = 'block';
        sendData('/seller',{
            name: businessName,
            address: address,
            about: about,
            number: number,
            email: JSON.parse(sessionStorage.user).email
        })
    }
})