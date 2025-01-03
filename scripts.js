document.addEventListener('DOMContentLoaded', () => {
    // Adding interaction for the Get Started button
    const getStartedButton = document.getElementById('get-started-btn');

    getStartedButton.addEventListener('click', () => {
        alert('Welcome to Testify Solutions! Let\'s get started!');
    });

    // Adding hover effect animation dynamically for header links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.textDecoration = 'underline';
        });

        link.addEventListener('mouseout', () => {
            link.style.textDecoration = 'none';
        });
    });
});
