const tl = gsap.timeline({defaults: {duration: 0.75, ease: "power3.out"}})

tl.fromTo('.hero-image', {scale: 1.3, borderRadius: '0rem'}, {scale: 1, borderRadius: '2rem', delay: 0.4, duration: 4, ease: "elastic.out(1.5, 1)"})

tl.fromTo('.cta1', {x: 110, opacity: 0}, {x: 0, opacity: 1}, '<30%')
tl.fromTo('.cta3', {x: -110, opacity: 0}, {x: 0, opacity: 1}, '<30%')
tl.fromTo('.cta2', {y: 110, opacity: 0}, {y: 0, opacity: 1}, '<30%')
tl.fromTo('.cta4', {x: 110, opacity: 0}, {x: 0, opacity: 1}, '<30%')
tl.fromTo('.cta6', {x: -110, opacity: 0}, {x: 0, opacity: 1}, '<30%')
tl.fromTo('.cta5', {y: 110, opacity: 0}, {y: 0, opacity: 1}, '<30%')
tl.fromTo('.cta-button', {y: 20, opacity: 0}, {y: 0, opacity: 1}, '<')

//Split text alternative
const logo = document.querySelector(".logo");
const letters = logo.textContent.split("");

logo.textContent = "";

letters.forEach((letter) => {
  logo.innerHTML += '<span class="letter">' + letter + "</span>";
});
gsap.set(".letter", { display: "inline-block" });
gsap.fromTo(
  ".letter",
  { y: "100%" },
  { y: 0, delay: 2, stagger: 0.1, ease: "back.out(3)" }
);