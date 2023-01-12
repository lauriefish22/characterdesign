// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphraseEl = document.getElementById('catchphrases');
const catchphraseInputEl = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
let headCount = 0;
let middleCount = 0;
let bottomCount = 0;
let catchphrases = [];
// set state for all of the character's catchphrases

headDropdown.addEventListener('change', () => {
    // get the value of the head dropdown
    const headValue = headDropdown.value;
    // increment the head change count state
    headCount++;

    headEl.style.backgroundImage = `url(./assets/${headValue}-head.png)`;
    // update the stats to show the new count (call displayStats() to do this work)
});

middleDropdown.addEventListener('change', () => {
    // get the value of the middle dropdown
    const middleValue = middleDropdown.value;
    // increment the middle change count state
    middleCount++;
    middleEl.style.backgroundImage = `url(./assets/${middleValue}-middle.png)`;
    // update the stats to show the new count (call displayStats() to do this work)
});

bottomDropdown.addEventListener('change', () => {
    // get the value of the bottom dropdown
    const bottomValue = bottomDropdown.value;
    // increment the bottom change count state
    bottomCount++;
    bottomEl.style.backgroundImage = `url(./assets/${bottomValue}-pants.png)`;
    // update the stats to show the new count (call displayStats() to do this work)
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    const word = catchphraseInputEl.value;

    // push the new catchphrase to the catchphrase array in state
    catchphrases.push(word);
    catchphraseInputEl.value = '';
    displayCatchphrases();
    const newElement = document.createElement('p');
    newElement.classList.add('phrases');
    newElement.textContent = catchphraseInputEl.value;
    catchphraseEl.append(newElement);
});

// clear out the form input's value so it's empty to the user

// update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)

function displayStats() {
    // text content of the reportEl to tell the user how many times they've changed each piece of the state
    headEl.textContent = headCount;
    middleEl.textContent = middleCount;
    bottomEl.textContent = bottomCount;
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    // loop through each catchphrase in state
    // and for each catchphrase
    // create an HTML element with the catchphrase as its text content
    // and append that HTML element to the cleared-out DOM
}
