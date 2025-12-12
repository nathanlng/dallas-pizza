function scrollWithOffset(el, offset = 80) {
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const targetId = params.get("scroll");

    if (targetId) {
        const element = document.getElementById(targetId);
        if (element) {
            scrollWithOffset(element, 100); // offset 100px
        }
    }
});