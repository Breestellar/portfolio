"use strict";

const navLinks = document.getElementById("navLinks");
const navButton = document.querySelector(".hamburger");

function setNav(open) {
  if (!navLinks || !navButton) {
    return;
  }

  navLinks.classList.toggle("open", open);
  navButton.setAttribute("aria-expanded", String(open));
  navButton.setAttribute(
    "aria-label",
    open ? "Close navigation" : "Open navigation",
  );
}

if (navButton && navLinks) {
  navButton.addEventListener("click", () => {
    setNav(!navLinks.classList.contains("open"));
  });
}

if (navLinks) {
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      setNav(false);
    });
  });
}

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    const hCaptchaResponse = contactForm.querySelector(
      'textarea[name="h-captcha-response"]',
    );

    if (!hCaptchaResponse || !hCaptchaResponse.value.trim()) {
      event.preventDefault();

      window.alert(
        "Please complete the security check before sending your message.",
      );
    }
  });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    },
  );

  revealItems.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  revealItems.forEach((element) => {
    element.classList.add("in");
  });
}
