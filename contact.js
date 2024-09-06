document.addEventListener('DOMContentLoaded', () => {
    const email = document.getElementById('email');
    const cellphone = document.getElementById('cellphone');
    const linkedin = document.getElementById('linkedin');

    linkedin.addEventListener('click', () => {
        window.open("https://www.linkedin.com/in/vicourtbitt/", target="_blank");
    })
})