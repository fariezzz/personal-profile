const rolePill = document.getElementById("role-pill");
const backToTopButton = document.getElementById("back-to-top");

if (rolePill) {
    const roles = [
        "Full-Stack Web Developer",
        "Back-End & API Engineer",
        "Game Developer"
    ];
    let roleIndex = 0;

    setInterval(() => {
        roleIndex = (roleIndex + 1) % roles.length;
        rolePill.textContent = roles[roleIndex];
    }, 2400);
}

const revealItems = document.querySelectorAll(
    ".hero-card, .mini-hero-card, .section-title, .card, .timeline-item"
);

if (revealItems.length > 0) {
    revealItems.forEach((item) => item.classList.add("js-reveal"));

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        },
        { threshold: 0.18 }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
}

if (backToTopButton) {
    window.addEventListener("scroll", () => {
        backToTopButton.classList.toggle("visible", window.scrollY > 420);
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
