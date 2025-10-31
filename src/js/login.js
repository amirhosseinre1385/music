var phoneNumber = document.getElementById('phone-number');
var password = document.getElementById('password');
var submit = document.getElementById('register');

submit.addEventListener('click', validation)

function validation () {
    if (phoneNumber.value.length != 11) {
        alert('شماره تماس اشتباه می باشد')
        return
    }
    if(password.value.length < 8){
        alert('رمز عبور باید حداقل 8 کارکتر باشد')
        return
    }
    alert('با موفقیت وارد شدید')
    MyURL = document.URL = "../../index.html";
    window.open( MyURL , '_blank');
}