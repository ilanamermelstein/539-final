function hamburgerMenu() {
    const x = document.querySelector("#navLinks");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    console.log("Hamburger Menu Clicked")
  }