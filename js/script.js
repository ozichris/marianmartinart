document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    const mainContent = document.querySelector('main');

    // Function to load content
    function loadContent(url) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                mainContent.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading the page:', error);
                mainContent.innerHTML = '<p>Error loading content.</p>';
            });
    }

    // Event listeners for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            const pageUrl = link.getAttribute('data-page');
            loadContent(pageUrl); // Load the content
        });
    });

    // Optionally, load the default content (e.g., 'content/shop.html') on page load
    loadContent('content/gallery.html'); // Change this URL to your default content's URL
});
