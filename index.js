
document.body.addEventListener('click', function (event) {
    // console.log('Test');

    const x = event.clientX;
    const y = event.clientY;

    console.log(x + ', ' + y);

    if (x % 2 === 0 && y % 2 === 0) {
        document.body.style.backgroundColor = 'red';
    }
    else {
        document.body.style.backgroundColor = 'green';
    }
    if (x % 2 === 1 && y % 2 === 1) {
        document.body.style.backgroundColor = 'blue';
    }
})


