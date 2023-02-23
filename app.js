var slideIndex =1;
showDivs(slideIndex);

function pluSivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName('imgslideshow');
    if(n > imgList.length) slide =1;
    else if (n <1) slideIndex =imgList.length;

    for (i =o; i < imgList.length; i++) {
        imgList[i].style.display = 'none';
    }

    imgList[slideIndex -1].style.display = 'block';
}

setInterval(() => {
    plusDivs(1);
},1000);

function validateForm() {
    //get input value
    var name = document.forms['message-form']['full-name'].value;
    var date = document.forms['message-form']['birth-date'].value;
    var gender = document.forms['message-form']['gender'].value;
    var messages = document.forms['message-form']['message'].value;
// validate input
if(name == '' || date == '' || gender == '' || messages == '') {
    alertinput ('tidak boleh kosong');
    return false;
}


document.getElementById('sender-full-name').innerText = name;
document.getElementById('sender-birth-date').innerText = name;
document.getElementById('sender-gender').innerText = name;
document.getElementById('sender-messages').innerText = name;
return false;
}