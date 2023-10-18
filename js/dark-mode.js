const btnDark = document.querySelector('.btn-dark-mode');

btnDark.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.className === 'dark-mode') {
        btnDark.innerHTML = `
            <i class="fa-regular fa-sun"></i>
            Light Mode
        `;

        localStorage.setItem('dark', 'true');
    } else {
        btnDark.innerHTML = `
            <i class="fa-regular fa-moon"></i>
            Dark mode
        `;

        localStorage.setItem('dark', 'false');
    }
});

//Obtenemos el modo actual
if (localStorage.getItem('dark') === 'true') {
    document.body.classList.add('dark-mode');
} else {
    document.body.classList.remove('dark-mode');
}