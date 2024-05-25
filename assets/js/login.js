document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll(".form");
    const tabs = document.querySelectorAll(".tab a");

    forms.forEach(form => {
        const inputs = form.querySelectorAll("input, textarea");

        inputs.forEach(input => {
            const label = input.previousElementSibling;

            input.addEventListener("input", () => {
                label.classList.toggle("active", !!input.value);
                label.classList.toggle("highlight", !!input.value);
            });
        });
    });

    tabs.forEach(tab => {
        tab.addEventListener("click", e => {
            e.preventDefault();

            const parent = tab.parentElement;
            parent.classList.add("active");
            parent.siblings().forEach(sibling => sibling.classList.remove("active"));

            const target = tab.getAttribute("href");
            const content = document.getElementById(target.substring(1));

            document.querySelectorAll(".tab-content > div").forEach(div => {
                div.style.display = div === content ? "block" : "none";
            });
        });
    });
});

// Pre-calculate siblings for each tab parent for better performance
Element.prototype.siblings = function () {
    const siblings = [];
    let sibling = this.parentNode.firstChild;
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== this) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};
