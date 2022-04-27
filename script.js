function openNav() {
    document.getElementById('mySidenav').style.width = '250px';
}

function closeNav() {
    document.getElementById('mySidenav').style.width = '0px'
}

function waitList() {
    const input = document.getElementById('email').value;
    if (input === "") {
        alert ("Pls fill in your Email")
    } else {
        alert('Congrats!, You have succesfully join the waitlist');
        input.value = 'nn'
    }

}