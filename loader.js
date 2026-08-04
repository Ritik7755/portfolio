window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (!loader) return;

    gsap.to(loader, {

        opacity: 0,

        duration: 1,

        delay: 1,

        onComplete: () => {

            loader.style.display = "none";

        }

    });

});