const toggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation-links");

toggle.addEventListener("click", () => {
  const open = navigation.classList.toggle("is-open");
});

const testimonials = [
  {
    image: "./assests/design/imgEllipse4.png",
    name: "LEO MAYNUS",
    position: "CEO at Softpanda",
    quote:
      "Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem adipiscing inw.",
  },
  {
    image: "./assests/design/imgEllipse8.png",
    name: "SARAH JOHNSON",
    position: "Product Designer",
    quote: "The team made the entire experience simple, smooth, and enjoyable.",
  },
  {
    image: "./assests/design/imgEllipse10.png",
    name: "JOHN SMITH",
    position: "Software Engineer",
    quote:
      "An excellent service that helped us improve our workflow significantly.",
  },
  {
    image: "./assests/design/imgEllipse6.png",
    name: "EMMA WILSON",
    position: "Marketing Manager",
    quote:
      "Everything was easy to use, and the results exceeded our expectations.",
  },
  {
    image: "./assests/design/imgEllipse12.png",
    name: "DAVID BROWN",
    position: "Business Owner",
    quote:
      "A reliable solution with a team that truly understands its customers.",
  },
];

const avatars = document.querySelectorAll(
  ".testimonial-portraits .avatar:not(.avatar-main)",
);

const mainImage = document.querySelector(".avatar-main");
const quote = document.querySelector(".testimonial-quote");
const name = document.querySelector(".testimonial-name");
const position = document.querySelector(".testimonial-position");

avatars.forEach((avatar) => {
  avatar.addEventListener("click", () => {
    const index = Number(avatar.dataset.index);
    const testimonial = testimonials[index];

    // Save the currently displayed testimonial.
    const currentTestimonial = {
      image: mainImage.src,
      name: name.textContent,
      position: position.textContent,
      quote: quote.textContent,
    };

    // Show the selected testimonial.
    mainImage.src = testimonial.image;
    mainImage.alt = testimonial.name;
    name.textContent = testimonial.name;
    position.textContent = testimonial.position;
    quote.textContent = testimonial.quote;

    // Put the previous main image into the clicked avatar's position.
    avatar.src = currentTestimonial.image;
    avatar.alt = currentTestimonial.name;

    // Update the data so the next click selects the correct testimonial.
    testimonials[index] = currentTestimonial;
  });
});
const animatedElements = document.querySelectorAll(
  ".slide-left, .slide-right"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2
  }
);

animatedElements.forEach((element) => {
  observer.observe(element);
});