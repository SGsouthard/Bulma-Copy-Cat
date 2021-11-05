let cardsData = [{
    id: 1,
    image: 'https://pbs.twimg.com/media/EMRLRLaUcAAXRIF?format=jpg&name=medium',
    avatar: 'https://pbs.twimg.com/profile_images/858853558644387840/ju4bWNIF_400x400.jpg',
    user: {
        name: 'Espresso',
        handle: 'cicilunaart',
        title: 'Illustrator and Software Engineer'
    },
    content: 'An illustration I made for a series called Coffee Ghosts.'
},
{
    id: 1,
    image: 'https://pbs.twimg.com/media/EMRLRxLUcAEKqSS?format=jpg&name=medium',
    avatar: 'https://pbs.twimg.com/profile_images/858853558644387840/ju4bWNIF_400x400.jpg',
    user: {
        name: 'Pumpkin Spice',
        handle: 'cicilunaart',
        title: 'Illustrator and Software Engineer'
    },
    content: 'An illustration I made for a series called Coffee Ghosts'
},
{
    id: 1,
    image: 'https://pbs.twimg.com/media/EMRLRd1UwAEHfVu?format=jpg&name=medium',
    avatar: 'https://pbs.twimg.com/profile_images/858853558644387840/ju4bWNIF_400x400.jpg',
    user: {
        name: 'Iced Coffee',
        handle: 'cicilunaart',
        title: 'Illustrator and Software Engineer'
    },
    content: 'An illustration I made for a series called Coffee Ghosts.'
},
{
    id: 1,
    image: 'https://pbs.twimg.com/media/EJczvOhUYAADAiU?format=jpg&name=medium',
    avatar: 'https://pbs.twimg.com/profile_images/858853558644387840/ju4bWNIF_400x400.jpg',
    user: {
        name: 'Cafe Mocha',
        handle: 'cicilunaart',
        title: 'Illustrator and Software Engineer'
    },
    content: 'An illustration I made for a series called Coffee Ghosts.'
},
{
    id: 1,
    image: 'https://pbs.twimg.com/media/EJczvYoUcAEAXJ9?format=jpg&name=medium',
    avatar: 'https://pbs.twimg.com/profile_images/858853558644387840/ju4bWNIF_400x400.jpg',
    user: {
        name: 'Cappuccino',
        handle: 'cicilunaart',
        title: 'Illustrator and Software Engineer'
    },
    content: 'An illustration I made for a series called Coffee Ghosts.'
},
{
    id: 1,
    image: 'https://pbs.twimg.com/media/EJczvpjVAAAcMsU?format=jpg&name=medium',
    avatar: 'https://pbs.twimg.com/profile_images/858853558644387840/ju4bWNIF_400x400.jpg',
    user: {
        name: 'Coffee',
        handle: 'cicilunaart',
        title: 'Illustrator and Software Engineer'
    },
    content: 'An illustration I made for a series called Coffee Ghosts.'
},
]

let storeLink = document.querySelectorAll('.navbar-item')[2];
let illustrationsLink = document.querySelectorAll('.navbar-item')[3];
let artistLink = document.querySelectorAll('.navbar-item')[4];
let blogLink = document.querySelectorAll('.navbar-item')[5];
let helpLink = document.querySelectorAll('.navbar-item')[6];

//store link leads to the store
storeLink.onclick = function () {
    window.open('https://ciciluna.square.site/', '_blank');
    event.preventDefault();
}

//illustrations should open to a gallery of images, currently linked to coffee ghosts page
illustrationsLink.onclick = function () {
    window.open("/Users/Sydney/Desktop/SEI-1025/unit-1/deliverables/Bulma-Copy-Cat/card-page/card-page.html", '_blank');
}

//linked to a profile page perhaps?
artistLink.onclick = function () {
    window.alert("Sorry, that doesn't exist yet");
}

//linked to the ghost-blog page
blogLink.onclick = function () {
    window.open("/Users/Sydney/Desktop/SEI-1025/unit-1/deliverables/Bulma-Copy-Cat/ghost-blog-page/ghost-page.html");
}

//may change this link in the future, undecided
helpLink.onclick = function () {
    window.alert("Hey man, we all need a little help");
}
