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