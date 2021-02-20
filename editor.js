const left= document.querySelector('.left'),
    right = document.querySelector('.right'),
    bar = document.querySelector('.bar'),
    editor = document.querySelector('.editor'),
    run = document.querySelector('.run'),
    iframe = document.querySelector('.iframe'),
    darkMode = document.querySelector('.dark'),
    lightMode = document.querySelector('.light');

const drag= (e) =>{
    e.preventDefault();
    document.selection ? document.selection.empty() :
    window.getSelection().removeAllRanges();

    left.style.width= (e.pageX - bar.offsetWidth / 3) + 'px';

    editor.resize();
}

bar.addEventListener('mousedown', () => {
    document.addEventListener('mousemove', drag);
})
bar.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', drag);
})

//run code event listener

run.addEventListener('click', () => {
    const html = editor.textContent;
    iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
})

//set darkMode

darkMode.addEventListener('click', () =>{
    editor.style.backgroundColor='#363836';
    editor.style.color='#eee';
})
//set lightMode

lightMode.addEventListener('click', () =>{
    editor.style.backgroundColor='#fff';
    editor.style.color='#000';
})
//live code

document.getElementById('live').onclick= function(){
    if(this.checked){
        editor.addEventListener('keyup', () => {
            const html = editor.textContent;
            iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
        })
    }
}