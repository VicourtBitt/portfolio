document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item')

    const stack = [
        { "img": "./assets/images/html5.png", "href": "https://www.w3schools.com/html/html_intro.asp","alt": "HTML5" },
        { "img": "./assets/images/python.png", "href": "https://docs.python.org/3/", "alt": "Python" },
        { "img": "./assets/images/javascript.png", "href": "https://www.w3schools.com/jsrEF/default.asp", "alt": "JavaScript" },
        { "img": "./assets/images/css.svg", "href": "https://www.w3schools.com/cssref/index.php", "alt": "CSS3" },
        { "img": "./assets/images/react.webp", "href": "https://react.dev/learn", "alt": "React" },
        { "img": "./assets/images/nodejs.png", "href": "https://nodejs.org/docs/latest/api/", "alt": "Node.js" },
        {"img": "./assets/images/mysql.png", "href": "https://www.mysql.com/", "alt": "MySQL" },
        {"img": "./assets/images/mongodb.png", "href": "https://www.mongodb.com/docs/", "alt": "MongoDB" },
        {"img": "./assets/images/bootstrap.png", "href": "https://getbootstrap.com/docs/5.3/getting-started/introduction/", "alt": "Bootstrap" }
    ]

    let sliderCount = 0

    items.forEach(item => {
        const image = item.querySelector('img')
        const link = item.querySelector('a')
        link.href = stack[sliderCount].href
        image.src = stack[sliderCount].img
        image.alt = stack[sliderCount].alt
        sliderCount++
    })
})