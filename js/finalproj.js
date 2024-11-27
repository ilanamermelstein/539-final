function hamburgerMenu(){
    console.log("Hamburger Menu Clicked");
    const x = document.querySelector("#navLinks");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    console.log("Hamburger Menu Clicked");
};

// import musicals from '/musicals.json';
// console.log("Musicals loaded");

// document.getElementById("playHome").addEventListener("click", roundOne);
// document.getElementById("playAgain").addEventListener("click", roundOne);
// document.getElementById("playInstr").addEventListener("click", roundOne);

// function roundOne() {
//     console.log("Round One initiated");
//     const randomIndex = Math.floor(Math.random() * musicals.length);
//     const roundOneMusical = musicals[randomIndex][1];
//     const roundOneYear = musicals[randomIndex][0];
//     const roundOneSummary = musicals[randomIndex[2]];
//     let currentScore = 0
//     document.getElementById("yearOfNom").innerHTML = roundOneYear;
//     document.getElementById("musicalSummary").innerHTML = musicalSummary;
//     document.getElementById("round").innerHTML = "1";
//     document.getElementById("currentScore").innerHTML = currentScore;
//     console.log("Round One")
// }