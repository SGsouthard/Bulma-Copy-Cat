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
  let archiveLink = document.querySelectorAll('.navbar-item')[5];
  let helpLink = document.querySelectorAll('.navbar-item')[6];

  storeLink.onclick = function() {
    window.open('https://ciciluna.square.site/', '_blank');
    event.preventDefault();
  }
  
  illustrationsLink.onclick = function() {
    window.alert("Sorry, that doesn't exist yet");
  }
  
  artistLink.onclick = function() {
    window.alert("Sorry, that doesn't exist yet");
  }

  archiveLink.onclick = function() {
    window.alert("Sorry, that doesn't exist yet");
  } 

  helpLink.onclick = function() {
    window.alert("Hey man, we all need a little help");
  } 