let homeButton = document.querySelector('.is-active');
let blogButton = document.querySelectorAll('.navbar-item')[1];
// console.log(blogButton);

//linking the Home Button to a site (temp link currently)
homeButton.onclick = function () {
    window.open('/Users/Sydney/Desktop/SEI-1025/unit-1/deliverables/Bulma-Copy-Cat/ghost-blog-page/rick-role.html', '_blank');
}

//linking the blog button to the blog page
blogButton.onclick = function () {
    window.open('/Users/Sydney/Desktop/SEI-1025/unit-1/deliverables/Bulma-Copy-Cat/ghost-blog-page/ghost-page.html', '_blank');
}

fetch('https://archiveofourown.org/users/SkyPilot') //request the data from the enpoint (url)
.then(function(response) { //when the response comes back, we run a function
    console.log(response); //printing the response
    if (response.status === 200) { //checking if response.status is equal to 200
        console.log('Success Response'); //print response if above line is true
        return response.json();
    } else { //if the conditional is not true
        console.log('Response was not successful'); //print this instead
    }
})
.then(function(data) {
    console.log(data); // {object}
    console.log(data.name); //{string} => Sydney Good-Southard
    console.log(data.login); //{string} => SGSouthard
})
.catch(function() {})

//attempting to fetch from the repository itself to try and link stuff through there.
//more to see if I can than for functionality
//unfortunately the response still fails but I think that's cause 
//the repository is private than anything else

// fetch('https://github.com/SGsouthard/Bulma-Copy-Cat', { mode: 'no-cors', }) //request the data from the enpoint (url)
// .then(function(response) { //when the response comes back, we run a function
//     console.log(response); //printing the response
//     if (response.status === 200) { //checking if response.status is equal to 200
//         console.log('Success Response'); //print response if above line is true
//         return response.json();
//     } else { //if the conditional is not true
//         console.log('Response was not successful'); //print this instead
//     }
// })
// .then(function(data) {
//     console.log(data); // {object}
// })
// .catch(function() {})