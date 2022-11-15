function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const links = [
    {name: 'Home', link: '/'},
    {name: 'Form', link: '/works/form.html'},
    {name: 'RPS', link: '/works/rps.html'},
    {name: 'Prompt', link: '/works/rpsprompt.html'},
    {name: 'JQuery', link: '/works/jquery.html'},
    {name: 'Random', link: '/works/random.html'}
    {name: 'Cars', link: '/works/cars.html'}
]

$(document).ready(() => {
    $("body").prepend('<div id="navbar"></div>')
    $("#navbar").load("/components/navbar.html")
})