const navMenu = document.querySelector("header nav");
const menuBtn: HTMLElement = document.querySelector("header button");
const links = document.querySelectorAll("header nav ul li a");

export function toggleMenu() {
  menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    navMenu.classList.toggle("active");
    menuBtn.classList.toggle("close");
  });
}

export function menuLinks() {
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const sectionTarget = document.querySelector(link.getAttribute("href"));
      if (getComputedStyle(document.querySelector(".menu-btn"), null).display === "none") {
        console.log(1);
        sectionTarget.scrollIntoView();
      } else {
        navMenu.classList.toggle("active");
        menuBtn.classList.toggle("close");
        setTimeout(() => {
          sectionTarget.scrollIntoView();
        }, 300);
      }
    });
  });
}

export default { toggleMenu, menuLinks };
