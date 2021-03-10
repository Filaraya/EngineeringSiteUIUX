$(document).ready(function() {

    // Define variables that reference our script tags within the body of our page
    var topNavigation = $("#topNavigation").html();
    var sideNavigation = $("#sideNavigation").html();

    // Have MustacheJS render our script tags
    Mustache.parse(topNavigation);
    Mustache.parse(sideNavigation);

    // Define our data objects
    var topNav = Mustache.render(topNavigation, {
        item: [{
                name: "Home",
                link: "index.html"
            },
            {
                name: "About",
                link: "aboutUs.html"
            },
            {
                name: "Service",
                link: "service.html"
            },
            {
                name: "Market",
                link: "market.html"
            },
            {
                name: "Location",
                link: "location.html"
            },
            {
                name: "Career",
                link: "career.html"
            },

            {
                name: "Contact",
                link: "contact.html"
            },
            {
                name: "Login",
                link: "login.html"
            }

        ]
    });



    // Place data into the HTML of our page with the html() jQuery method
    $("#render_topLinks").html(topNav);


    // Insert current year into the Copyright text in the footer.  Note: MustacheJS is not needed to do this.
    $("#currentYear").html(new Date().getFullYear());

});