const select = (el, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};

const typed = select(".typed");
if (typed) {
  let typed_strings = typed.getAttribute("data-typed-items");
  typed_strings = typed_strings.split(",");
  new Typed(".typed", {
    strings: typed_strings,
    loop: true,
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
  });
}

// Can also be included with a regular script tag
// const options = {
//   strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
//   typeSpeed: 40,
// };
// const typed = new Typed(".element", options);

// var typed = new Typed(".element", {
//   // Waits 1000ms after typing "First"
//   strings: ["First ^1000 sentence.", "Second sentence."],
// });
