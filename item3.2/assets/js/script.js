ele = document.querySelector('#key');


document.addEventListener('keydown', function(event){
    if (event.key === 'a' || event.key === 's' || event.key === 'd') {
        if (event.key === 'a') {
            color = 'pink'
        }
        else if (event.key === 's') {
            color = 'orange'
        }
        else if (event.key === 'd') {
            color = 'lightblue'
        }

        ele.style.backgroundColor = color;
    }
    else if (event.key === 'q' || event.key === 'w' || event.key === 'e') {
        if (event.key === 'q') {
            color = 'purple'
        }
        else if (event.key === 'w') {
            color = 'gray'
        }
        else if (event.key === 'e') {
            color = 'brown'
        }
        const newDiv = document.createElement('div');
        newDiv.style.height = '200px';
        newDiv.style.width = '200px';
        newDiv.style.backgroundColor = color;
        console.log(color);
        const parentElement = document.body;
        parentElement.appendChild(newDiv);

    }
})