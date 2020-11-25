/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon cureentscrollTo.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
//

let listnav = document.getElementById("navbar__list");
let allSections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
// loop througth the section to get its links in nav
getdynamicLinks = () => {
  allSections.forEach((el) => {
    var item = document.createElement("li");
    // add elements to the navigation list

    item.innerHTML = `<a class='menu__link' onclick='scrollToIDSection(this)'  >${el.getAttribute(
      "data-nav"
    )}</a>`;

    // Add it to the nav list:
    listnav.appendChild(item);
  });
};
// build the nav
getdynamicLinks();

//remove active class from other section
allSectionsRemoveActive = () => {
  allSections.forEach((el) => {
    el.classList.remove("your-active-class");
    // get the actual active  section in the view

    if (
      window.scrollY > el.offsetTop &&
      window.scrollY < el.offsetTop + el.offsetHeight - 50
    ) {
      el.classList.add("your-active-class");
    }
  });
};

// Add class 'active' to section when near top of viewport
getTheSectionInViewPort = () => {
  allSectionsRemoveActive();

  // appear scroll to top button if scroll bottom
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("Top").style.display = "block";
  } else {
    document.getElementById("Top").style.display = "none";
  }
  // fixed nav to top while scrolling and hide if not scroll

  var prevpostion = window.pageYOffset;

  setTimeout(function () {
    var currentposition = window.pageYOffset;
    // check if position of scroll change
    if (currentposition !== prevpostion) {
      document.getElementsByTagName("header")[0].style.cssText =
        "position: fixed;top: 0px;visibility:visible;";
    }
    // check if position of scroll not changed
    else if (currentposition == prevpostion && window.scrollY > 50) {
      document.getElementsByTagName("header")[0].style.cssText =
        "visibility:hidden;";
    }
  }, 150);
};
window.addEventListener("scroll", getTheSectionInViewPort);

// Scroll to anchor ID using scrollTO event
goTheSection = (linkToSection) => {
  window.scrollTo(
    0,
    document.querySelector(`[data-nav="${linkToSection}"]`).offsetTop + 50
  );
};
scrollToIDSection = (el) => {
  goTheSection(el.innerText);
};

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

//scroll to Top of Page
 goToTop = () => {
  window.scrollTo(0, 0);
  document.getElementsByTagName("header")[0].style.cssText =
    "position: fixed;top: 0px;visibility:visible;";
};
