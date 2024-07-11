// Smooth scroll to anchor links
$(document).ready(function() {
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
        // Ensure the pathname and hostname match to avoid issues with different base URLs
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            // Find the target element based on the anchor link's hash
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                event.preventDefault(); // Prevent the default anchor link behavior
                // Animate the scroll to the target element
                $('html, body').animate({
                    scrollTop: target.offset().top - 100 // Adjust offset as needed
                }, 500); // Duration of the scroll animation in milliseconds
            }
        }
    });
});

