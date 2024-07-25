document.addEventListener('DOMContentLoaded', function() {
    const floatingButton = document.getElementById('floating-button');
    const socialLinks = document.getElementById('social-links');

    floatingButton.addEventListener('click', function() {
        socialLinks.classList.toggle('visible');
    });
});
