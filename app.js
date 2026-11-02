
/* =========================================
   VERTOXIA — JAVASCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    // -------------------------------------
    // MOBILE NAVIGATION
    // -------------------------------------

    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav-links");

    function closeMenu() {
        if (!menuButton || !navigation) return;

        menuButton.classList.remove("active");
        navigation.classList.remove("open");

        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");

        document.body.classList.remove("menu-open");
    }

    if (menuButton && navigation) {

        menuButton.addEventListener("click", () => {

            const isOpen =
                menuButton.getAttribute("aria-expanded") === "true";

            menuButton.classList.toggle("active", !isOpen);
            navigation.classList.toggle("open", !isOpen);

            menuButton.setAttribute("aria-expanded", String(!isOpen));

            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Open navigation" : "Close navigation"
            );

            document.body.classList.toggle("menu-open", !isOpen);

        });

        // Close menu when a link is selected

        navigation.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", closeMenu);

        });

        // Close menu with Escape

        document.addEventListener("keydown", event => {

            if (event.key === "Escape") {
                closeMenu();
            }

        });

        // Close menu when clicking outside

        document.addEventListener("click", event => {

            if (
                navigation.classList.contains("open") &&
                !navigation.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {
                closeMenu();
            }

        });

        // Reset mobile navigation when resizing to desktop

        window.addEventListener("resize", () => {

            if (window.innerWidth > 650) {
                closeMenu();
            }

        });

    }


    // -------------------------------------
    // AUTOMATIC COPYRIGHT YEAR
    // -------------------------------------

    const yearElement = document.getElementById("current-year");

    if (yearElement) {

        yearElement.textContent = new Date().getFullYear();

    }


    // -------------------------------------
    // FAQ
    // -------------------------------------

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const summary = item.querySelector("summary");

        if (!summary) return;

        summary.addEventListener("keydown", event => {

            if (event.key === "Enter" || event.key === " ") {

                event.preventDefault();

                item.open = !item.open;

            }

        });

    });


    // -------------------------------------
    // SMOOTH INTERNAL NAVIGATION
    // -------------------------------------

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {

                event.preventDefault();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

                return;

            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // -------------------------------------
    // FEATURED GAME LINK
    // -------------------------------------

    const featuredLink = document.querySelector(
        ".featured-info .text-link"
    );

    if (featuredLink) {

        featuredLink.addEventListener("click", () => {

            console.log("Vertoxia: Exploring games.");

        });

    }


    // -------------------------------------
    // INITIALIZATION
    // -------------------------------------

    console.log("--------------------------------");
    console.log("VERT OXIA WEBSITE INITIALIZED");
    console.log("Website version: 1.0");
    console.log("Status: Ready");
    console.log("--------------------------------");

});
