const strong = document.querySelector(".watch");
const terms = document.querySelector(".terms-and-conditions");
const accept = document.querySelector(".accept");

function obCallback(payload) {
    console.log(payload[0]);
    if (payload[0].isIntersecting) {
        accept.disabled = false;
        ob.unobserve(terms.lastElementChild);
    }
}

const ob = new IntersectionObserver(obCallback);

ob.observe(terms.lastElementChild);
