// Ensure the links work without interfering with normal navigation
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(event) {
        // Ensure the default behavior is not blocked for local links
        if (this.getAttribute('href').startsWith('#') || this.getAttribute('href').startsWith('mailto:') || this.getAttribute('href').startsWith('tel:')) {
            return; // Do not block these links
        }

        // Ensure normal link behavior for navigation
        window.location.href = this.href;
    });
});
