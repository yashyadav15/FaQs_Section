const accord = document.querySelectorAll('.container');

accord.forEach(container =>{
    const icon = container.querySelector('.icon');
    const answer = container.querySelector('.answer');

    container.addEventListener('click', () =>{
        if(icon.classList.contains('active'))
        {
            icon.classList.remove('active');
            answer.style.maxHeight = null;
        }
        else{
            icon.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';

        }
    })
})