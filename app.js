document.addEventListener("DOMContentLoaded", function () {
    // Dynamic Circular Favicon Generation
    const faviconElement = document.getElementById('favicon');
    if (faviconElement) {
        const img = new Image();
        img.src = 'logo.png';
        img.onload = function() {
            const canvas = document.createElement('canvas');
            canvas.width = 32;
            canvas.height = 32;
            const ctx = canvas.getContext('2d');
            
            // Create circular clip path
            ctx.beginPath();
            ctx.arc(16, 16, 16, 0, Math.PI * 2);
            ctx.closePath();
            ctx.clip();
            
            // Draw image into cropped canvas
            ctx.drawImage(img, 0, 0, 32, 32);
            
            // Update favicon link source
            faviconElement.href = canvas.toDataURL('image/png');
        };
    }

    // Cookie Banner Logic
    const banner = document.getElementById("cookieBanner");
    const acceptBtn = document.getElementById("acceptCookies");

    if (banner && acceptBtn) {
        if (!localStorage.getItem("cookiesAccepted")) {
            setTimeout(() => {
                banner.classList.add("show");
            }, 1000);
        }

        acceptBtn.addEventListener("click", function () {
            localStorage.setItem("cookiesAccepted", "true");
            banner.classList.remove("show");
        });
    }
});
