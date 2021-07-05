const paras = document.querySelectorAll('p');
const title = document.querySelector('.title');

paras.forEach(para => {
    if (para.textContent.includes('error')) {
        // Adding classes via "classList":
        para.classList.add('error');
    }

    if (para.textContent.includes('success')) {
        para.classList.add('success');
    }
})

// Toggling classes:
title.classList.toggle('test');
// title.classList.toggle('test');