
const h1 = document.querySelector('h1');
document.body.addEventListener('click', function (event) {
    // console.log('Test');

    const x = event.clientX;
    const y = event.clientY;
    
//     const h1 = document.createElement('h1');
//     document.body.appendChild(h1);
//     h1.style.textAlign = 'center';
    h1.textContent = x + ', ' + y;

//     console.log(x + ', ' + y);

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


