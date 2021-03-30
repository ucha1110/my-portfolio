// Project List Variables

const arrocesList = document.getElementById("arroces-list");
const surfList = document.getElementById("surf-list");
const creditList = document.getElementById("credit-list");
const organismList = document.getElementById("organism-list");

// Project info variables

const infoTitle = document.getElementById("info-title");
const arrocesInfo = document.getElementById("arroces-info");
const surfInfo = document.getElementById("surf-info");
const creditInfo = document.getElementById("credit-info");
const organismInfo = document.getElementById("organism-info");

// Hide all project info

infoTitle.hidden = true;
arrocesInfo.hidden = true;
surfInfo.hidden = true;
creditInfo.hidden = true;
organismInfo.hidden = true;

// Event for Arroces

arrocesList.addEventListener("click", function() {
    arrocesInfo.hidden = false;
    surfInfo.hidden = true;
    creditInfo.hidden = true;
    organismInfo.hidden = true;
    infoTitle.hidden = false;

    arrocesList.style.textDecoration = "underline";
    surfList.style.textDecoration = "none";
    creditList.style.textDecoration = "none";
    organismList.style.textDecoration = "none";
});

// Event for Surf

surfList.addEventListener("click", function() {
    arrocesInfo.hidden = true;
    surfInfo.hidden = false;
    creditInfo.hidden = true;
    organismInfo.hidden = true;
    infoTitle.hidden = false;

    arrocesList.style.textDecoration = "none";
    surfList.style.textDecoration = "underline";
    creditList.style.textDecoration = "none";
    organismList.style.textDecoration = "none";
});

// Event for Credit

creditList.addEventListener("click", function() {
    arrocesInfo.hidden = true;
    surfInfo.hidden = true;
    creditInfo.hidden = false;
    organismInfo.hidden = true;
    infoTitle.hidden = false;

    arrocesList.style.textDecoration = "none";
    surfList.style.textDecoration = "none";
    creditList.style.textDecoration = "underline";
    organismList.style.textDecoration = "none";
});

// Event for Organism

organismList.addEventListener("click", function() {
    arrocesInfo.hidden = true;
    surfInfo.hidden = true;
    creditInfo.hidden = true;
    organismInfo.hidden = false;
    infoTitle.hidden = false;

    arrocesList.style.textDecoration = "none";
    surfList.style.textDecoration = "none";
    creditList.style.textDecoration = "none";
    organismList.style.textDecoration = "underline";
});