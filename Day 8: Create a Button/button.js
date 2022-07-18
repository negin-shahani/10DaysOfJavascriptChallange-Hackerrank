btn.onclick = function() {
    const count = Number(btn.innerHTML) + 1;    
    btn.innerText = count;
}

//another answer I found after submitting
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('btn');
    
    button.addEventListener('click', (e) => {
          const count = Number(e.currentTarget.innerText) + 1;
        
          e.currentTarget.innerText = count;
     });
});
