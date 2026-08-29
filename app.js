import { setupDatabase } from "./setupDatabase.js";

import { handlingGuide } from "./handlingGuide.js";

import { handlingGuide2wd } from "./handlingGuide2wd.js";

const settingsContainer = document.getElementById("settingsContainer");

const detailPage = document.getElementById("detailPage");

const detailTitle = document.getElementById("detailTitle");

const detailContent = document.getElementById("detailContent");

const imageOverlay = document.getElementById("imageOverlay");

const fullScreenImage = document.getElementById("fullScreenImage");

const closeImageButton = document.getElementById("closeImageButton");

const backButton = document.getElementById("backButton");

const searchInput = document.getElementById("searchInput");

const homePage = document.getElementById("homePage");

const mainPage = document.getElementById("mainPage");

const handlingGuideCard = document.getElementById("handlingGuideCard");

const setupDatabaseCard = document.getElementById("setupDatabaseCard");

const homeButton = document.getElementById("homeButton");

const handlingGuidePage = document.getElementById("handlingGuidePage");

const handlingGuideHomeButton = document.getElementById("handlingGuideHomeButton");

const handlingGuideBackButton = document.getElementById("handlingGuideBackButton");

const handlingGuideContainer = document.getElementById("handlingGuideContainer");

const setupNotesCard = document.getElementById("setupNotesCard");

const setupNotesPage = document.getElementById("setupNotesPage");

const notesHomeButton = document.getElementById("notesHomeButton");

const sessionNameInput = document.getElementById("sessionNameInput");

const vehicleInput = document.getElementById("vehicleInput");

const trackInput = document.getElementById("trackInput");

const dateInput = document.getElementById("dateInput");

const conditionsInput = document.getElementById("conditionsInput");

const adjustmentsInput = document.getElementById("adjustmentsInput");

const resultInput = document.getElementById("resultInput");

const ratingInput = document.getElementById("ratingInput");

const notesSearchInput = document.getElementById("notesSearchInput");

const saveNoteButton = document.getElementById("saveNoteButton");

const deleteNoteButton = document.getElementById("deleteNoteButton");

const clearFieldsButton = document.getElementById("clearFieldsButton");

const newNoteButton = document.getElementById("newNoteButton");

const savedNotesContainer = document.getElementById("savedNotesContainer");

const vehicleList = document.getElementById("vehicleList");

const sessionNameList = document.getElementById("sessionNameList");

const trackList = document.getElementById("trackList");

const conditionsList = document.getElementById("conditionsList");

const deleteModal = document.getElementById("deleteModal"); 

const cancelDeleteButton = document.getElementById("cancelDeleteButton");

const confirmDeleteButton = document.getElementById("confirmDeleteButton");

const breadcrumb = document.getElementById("breadcrumb");

let selectedArea = null;

let selectedIssue = null;

let selectedGrip = null;

let scrollHistory = [];

let activeTile = null;

let handlingGuideHistory = [];

let currentHandlingGuide = handlingGuide;

let currentHandlingGuideName = "4WD Handling Guide";

/* ==========================================================
   Setup Notes Variables
========================================================== */

let notes = [];

let currentNoteId = null;

/* ==========================================================
   Setup Notes Functions
========================================================== */

function saveNotesToStorage() {

    localStorage.setItem(
        "setupNotes",
        JSON.stringify(notes)
    );

}

function loadNotesFromStorage() {

    notes =
        JSON.parse(
            localStorage.getItem("setupNotes")
        ) || [];

}

function renderNotes(filter = "") {

    savedNotesContainer.innerHTML = "";

    const filteredNotes =
        notes.filter(note => {

            const searchText = `
                ${note.sessionName}
                ${note.vehicle}
                ${note.track}
                ${note.conditions}
            `.toLowerCase();

            return searchText.includes(
                filter.toLowerCase()
            );

        });

        if (filteredNotes.length === 0) {

            savedNotesContainer.innerHTML = `
                <p>No matching notes found.</p>
            `;

            return;

        }
    
        filteredNotes.forEach(note => {

        const noteCard =
            document.createElement("div");

        noteCard.className = "settingTile";

        if (note.id === currentNoteId) {

            noteCard.classList.add("active");

        }

        noteCard.innerHTML = `
            <h3>${note.sessionName}</h3>
            <p>${note.vehicle}</p>
            <p>${note.track}</p>
            <p>${note.date}</p>
        `;

        noteCard.addEventListener(
            "click",
            () => {

                openNote(note);

            }
        );

        savedNotesContainer.appendChild(
            noteCard
        );

    });

}

function openNote(note) {

    currentNoteId = note.id;

    sessionNameInput.value =
        note.sessionName;

    vehicleInput.value =
        note.vehicle;

    trackInput.value =
        note.track;

    dateInput.value =
        note.date;

    conditionsInput.value =
        note.conditions;

    adjustmentsInput.value =
        note.adjustments;

    resultInput.value =
        note.result;

    updateSaveButton();

    renderNotes();    

}

function saveNote() {

     if (!sessionNameInput.value.trim()) {

        alert("Please enter a Session Name before saving.");

        return;

    }

const note = {

    id:
        currentNoteId ||
        Date.now(),

    sessionName:
        sessionNameInput.value,

    vehicle:
        vehicleInput.value,

    track:
        trackInput.value,

    date:
        dateInput.value,

    conditions:
        conditionsInput.value,

    adjustments:
        adjustmentsInput.value,

    result:
        resultInput.value,

};

if (currentNoteId) {

    const index =
        notes.findIndex(
            note =>
                note.id === currentNoteId
        );

    notes[index] = note;

}

else {

    notes.push(note);

}

saveNotesToStorage();

renderNotes();

updateAutocompleteLists();

}

function clearFields() {

    sessionNameInput.value = "";
    vehicleInput.value = "";
    trackInput.value = "";
    dateInput.value = "";
    conditionsInput.value = "";
    adjustmentsInput.value = "";
    resultInput.value = "";

}

function newNote() {

    currentNoteId = null;

    clearFields();

    dateInput.value =
        new Date()
            .toISOString()
            .split("T")[0];

    updateSaveButton();

    renderNotes();

}

function deleteNote() {

    if (!currentNoteId) {

        alert(
            "Open a note before deleting."
        );

        return;

    }

    deleteModal.style.display =
        "flex";

}

function performDelete() {

    notes = notes.filter(
        note =>
            note.id !== currentNoteId
    );

    saveNotesToStorage();

    renderNotes();

    updateAutocompleteLists();

    currentNoteId = null;

    newNote();

    deleteModal.style.display =
        "none";

}

function updateAutocompleteLists() {

    vehicleList.innerHTML = "";

    sessionNameList.innerHTML = "";

    trackList.innerHTML = "";

    conditionsList.innerHTML = "";

    const vehicles =
        [...new Set(
            notes
                .map(note => note.vehicle)
                .filter(item => item.trim())
        )];

    const sessionNames =
        [...new Set(
            notes
                .map(note => note.sessionName)
                .filter(item => item.trim())
        )];

    const tracks =
        [...new Set(
            notes
                .map(note => note.track)
                .filter(item => item.trim())
        )];

    const conditions =
        [...new Set(
            notes
                .map(note => note.conditions)
                .filter(item => item.trim())
        )];

    vehicles.forEach(item => {

        const option =
            document.createElement("option");

        option.value = item;

        vehicleList.appendChild(option);

    });

    sessionNames.forEach(item => {

        const option =
            document.createElement("option");

        option.value = item;

        sessionNameList.appendChild(option);

    });

    tracks.forEach(item => {

        const option =
            document.createElement("option");

        option.value = item;

        trackList.appendChild(option);

    });

    conditions.forEach(item => {

        const option =
            document.createElement("option");

        option.value = item;

        conditionsList.appendChild(option);

    });

}

function updateSaveButton() {

    if (currentNoteId) {

        saveNoteButton.textContent =
            "Update Note";

    }

    else {

        saveNoteButton.textContent =
            "Save New Note";

    }

}

/* ==========================================================
   Render Categories
========================================================== */

function renderSettings(filter = "") {

    settingsContainer.innerHTML = "";

    const filteredSettings = setupDatabase.filter(setting => {

        if (setting.showInDatabase === false) {
            return false;
        }

        return setting.name
            .toLowerCase()
            .includes(filter.toLowerCase());

    });

    const categories = [...new Set(
        filteredSettings.map(setting => setting.category)
    )];

    categories.forEach(category => {

        const section = document.createElement("div");
        section.className = "categorySection";

        const title = document.createElement("h2");
        title.className = "categoryTitle";
        title.textContent = category;

        section.appendChild(title);

        const tileGrid = document.createElement("div");
        tileGrid.className = "tileGrid";

        filteredSettings
            .filter(setting => setting.category === category)
            .forEach(setting => {

                const tile = document.createElement("div");
                tile.className = "settingTile";

                tile.innerHTML = `
                    <h3>${setting.name}</h3>
                    <div class="tileCategory">
                        ${setting.category}
                    </div>
                `;

                tile.addEventListener("click", () => {

                    if (activeTile) {
                        activeTile.classList.remove("active");
                    }

                    tile.classList.add("active");
                    activeTile = tile;

                    displaySetting(setting);

                });

                tileGrid.appendChild(tile);

            });

        section.appendChild(tileGrid);

        settingsContainer.appendChild(section);

    });

}

/* ==========================================================
   Helper Functions
========================================================== */

function renderList(title, items, headingLevel = "h4") {

    if (!items?.length) return "";

    return `
        <${headingLevel}>${title}</${headingLevel}>
        <ul>
            ${items.map(item => `<li>${item}</li>`).join("")}
        </ul>
    `;
}

function renderSection(title, content) {

    if (!content) {
        return "";
    }

    return `
        <h3>${title}</h3>
        <p>${content}</p>
    `;
}

function renderTradeOffs(items) {

    if (!items?.length) return "";

    return `
        <div class="tradeoffs-section">

            <h3>Trade-Offs</h3>

            <ul>
                ${items.map(item => `<li>${item}</li>`).join("")}
            </ul>

        </div>
    `;
}

/* ==========================================================
   Open Detail Page
========================================================== */

function openDetailPage() {

    scrollHistory.push(
        window.scrollY
    );

    detailPage.style.display = "";

    detailPage.classList.add("show");

    window.scrollTo(0, 0);

}

function closeDetailPage() {

    detailPage.classList.remove("show");

    const previousScroll =
        scrollHistory.pop();

    if (previousScroll !== undefined) {

        setTimeout(() => {

            window.scrollTo(
                0,
                previousScroll
            );

        }, 0);

    }

}

/* ==========================================================
   Guide Selection
========================================================== */

function renderGuideSelection() {

    handlingGuideContainer.innerHTML = "";

    const cardsWrapper = document.createElement("div");

    cardsWrapper.className = "homeCards";

    const guides = [

        {
            name: "2WD Handling Guide",
            guide: handlingGuide2wd
        },

        {
            name: "4WD Handling Guide",
            guide: handlingGuide
        }

    ];

    guides.forEach(item => {

        const card = document.createElement("div");

        card.className = "homeCard";

        card.innerHTML = `
            <h2>${item.name}</h2>
        `;

        card.addEventListener("click", () => {

    currentHandlingGuide = item.guide;
    currentHandlingGuideName = item.name;

    handlingGuideHistory.push(
        renderGuideSelection
    );

    renderHandlingGuideAreas();

});

        cardsWrapper.appendChild(card);

    });

    handlingGuideContainer.appendChild(cardsWrapper);

}

/* ==========================================================
   Render Handling Guide Areas
========================================================== */

function renderHandlingGuideAreas() {

    updateBreadcrumb();

    handlingGuideContainer.innerHTML = "";

    const cardsWrapper = document.createElement("div");

    cardsWrapper.className = "homeCards";

    currentHandlingGuide.forEach(area => {

        const card = document.createElement("div");

        card.className = "homeCard";

        card.innerHTML = `
            <h2>${area.name}</h2>
        `;

        card.addEventListener("click", () => {

            selectedArea = area.id;

            handlingGuideHistory.push(
                renderHandlingGuideAreas
            );

            if (area.sections.length === 1) {

                selectedIssue =
                    area.sections[0].id;

                renderGripSelection();

            }
            else {

                renderIssueSelection();

            }

        });

        cardsWrapper.appendChild(card);

    });

    handlingGuideContainer.appendChild(cardsWrapper);

}

/* ==========================================================
   Render Issue Selection
========================================================== */

function renderIssueSelection() {

    updateBreadcrumb();

    handlingGuideContainer.innerHTML = "";

    const title = document.createElement("h2");

    title.textContent = "What is the issue?";

    handlingGuideContainer.appendChild(title);

    const cardsWrapper = document.createElement("div");

    cardsWrapper.className = "homeCards";

    const issues = [

        {
            id: "reduceUndersteer",
            name: "Understeer (Push)",
            description: "Front end slides wide in corners."
        },

        {
            id: "reduceOversteer",
            name: "Oversteer (Loose)",
            description: "Rear end slides out in corners."
        }

    ];

    issues.forEach(issue => {

        const card = document.createElement("div");

        card.className = "homeCard";

        card.innerHTML = `
            <h2>${issue.name}</h2>

            <p class="issueDescription">
                ${issue.description}
            </p>
        `;

        card.addEventListener("click", () => {

            selectedIssue = issue.id;

        handlingGuideHistory.push(
            renderIssueSelection
        );

renderGripSelection();

        });

        cardsWrapper.appendChild(card);

    });

    handlingGuideContainer.appendChild(cardsWrapper);

}

/* ==========================================================
   Render Grip Selection
========================================================== */

function renderGripSelection() {

    updateBreadcrumb();

    handlingGuideContainer.innerHTML = "";

    const title = document.createElement("h2");

    title.textContent = "Track Grip";

    handlingGuideContainer.appendChild(title);

    const cardsWrapper = document.createElement("div");

    cardsWrapper.className = "homeCards";

    const gripLevels = [

        {
            id: "lowGrip",
            name: "Low Grip"
        },

        {
            id: "mediumGrip",
            name: "Medium Grip"
        },

        {
            id: "highGrip",
            name: "High Grip"
        }

    ];

    gripLevels.forEach(grip => {

        const card = document.createElement("div");

        card.className = "homeCard";

        card.innerHTML = `
            <h2>${grip.name}</h2>
        `;

        card.addEventListener("click", () => {

            selectedGrip = grip.id;

        handlingGuideHistory.push(
            renderGripSelection
        );

renderRecommendations();

        });

        cardsWrapper.appendChild(card);

    });

    handlingGuideContainer.appendChild(cardsWrapper);

}

/* ==========================================================
   Render Recommendations
========================================================== */

function renderRecommendations() {

    updateBreadcrumb();

    handlingGuideContainer.innerHTML = "";

    const area =
        currentHandlingGuide.find(
            item => item.id === selectedArea
        );

    if (!area) return;

    const section =
        area.sections.find(
            item => item.id === selectedIssue
        );

    if (!section) return;

    const recommendations =
        section.trackConditions[selectedGrip];

    const title = document.createElement("h2");

    title.textContent =
        "Recommended Adjustments";

    handlingGuideContainer.appendChild(title);

    const cardsWrapper =
        document.createElement("div");

    cardsWrapper.className = "homeCards";

    recommendations.forEach(recommendation => {

        const card =
            document.createElement("div");

        card.className = "homeCard";

        card.innerHTML = `
            <h2>${recommendation.setting}</h2>
        `;

        card.addEventListener("click", () => {

        openSettingFromRecommendation(
            recommendation.setting
        );

        });

        cardsWrapper.appendChild(card);

    });

    handlingGuideContainer.appendChild(cardsWrapper);

}

/* ==========================================================
   Open Setting From Recommendation
========================================================== */

function openSettingFromRecommendation(
    recommendationText
) {

    const settingName =
        recommendationText.split(":")[0].trim();

    const setting = setupDatabase.find(item => {

        const databaseName =
            item.name
                .replaceAll("-", "")
                .replaceAll(" ", "")
                .trim()
                .toLowerCase();

        const searchName =
            settingName
                .replaceAll("-", "")
                .replaceAll(" ", "")
                .trim()
                .toLowerCase();

        return databaseName === searchName;

    });

    if (!setting) {

        alert(
            `Could not find setting: ${settingName}`
        );

        return;

    }

    displaySetting(setting);

}

/* ==========================================================
   Display Setting
========================================================== */

function displaySetting(setting) {

    detailTitle.textContent = setting.name;

    const settingImage = setting.image
        ? `
            <img
                src="${setting.image}"
                alt="${setting.name}"
                class="settingReferenceImage"
                data-image="${setting.image}"
            >
        `
        : "";

    detailContent.innerHTML = `

            ${settingImage}

            ${renderSection("What It Is", setting.whatItIs)}

            ${renderSection("Why It Matters", setting.whyItMatters)}

            ${setting.increase ? `
                <h3>${setting.increaseTitle || `Increase ${setting.name}`}</h3>

                ${renderList("Effects", setting.increase.effects)}

                ${renderList("Benefits", setting.increase.benefits)}

                ${renderList("Drawbacks", setting.increase.drawbacks)}
            ` : ""}

            ${setting.decrease ? `
                <h3>${setting.decreaseTitle || `Decrease ${setting.name}`}</h3>

                ${renderList("Effects", setting.decrease.effects)}

                ${renderList("Benefits", setting.decrease.benefits)}

                ${renderList("Drawbacks", setting.decrease.drawbacks)}
            ` : ""}

            ${setting.adjustments
                ? setting.adjustments.map(adjustment => `

                    <h3>${adjustment.title}</h3>

                    ${renderList(
                        "Effects",
                        adjustment.effects
                    )}

                    ${renderList(
                        "Benefits",
                        adjustment.benefits
                    )}

                    ${renderList(
                        "Drawbacks",
                        adjustment.drawbacks
                    )}

                `).join("")
                : ""
            }

            ${renderList("Common Uses", setting.commonUses)}

            ${renderTradeOffs(setting.tradeOffs)}

            ${renderSection("Quick Summary", setting.quickSummary)}

        `;

        const settingImageElement =
            detailContent.querySelector(
                ".settingReferenceImage"
            );

        if (settingImageElement) {

            settingImageElement.addEventListener(
                "click",
                () => {

                    fullScreenImage.src =
                        settingImageElement.dataset.image;

                    fullScreenImage.alt =
                        setting.name;

                    imageOverlay.classList.add("show");

                }
            );

        }

        openDetailPage();
}

/* ==========================================================
   Back Button
========================================================== */

backButton.addEventListener("click", closeDetailPage);

closeImageButton.addEventListener(
    "click",
    () => {

        imageOverlay.classList.remove("show");

        fullScreenImage.src = "";

    }
);

/* ==========================================================
   Search
========================================================== */

searchInput.addEventListener("input", () => {

    renderSettings(searchInput.value);

});

function showSetupNotesPage() {

    homePage.style.display = "none";

    mainPage.style.display = "none";

    closeDetailPage();

    handlingGuidePage.style.display = "none";

    setupNotesPage.style.display = "block";

}

/* ==========================================================
   Home Page Navigation
========================================================== */

setupDatabaseCard.addEventListener("click", () => {

    homePage.style.display = "none";

    mainPage.style.display = "block";

});

setupNotesCard.addEventListener(
    "click",
    showSetupNotesPage
);

handlingGuideCard.addEventListener("click", () => {

    handlingGuideHistory = [];

    selectedArea = null;
    selectedIssue = null;
    selectedGrip = null;

    currentHandlingGuide = handlingGuide;
    currentHandlingGuideName = null;

    homePage.style.display = "none";

    handlingGuidePage.style.display = "block";

    renderGuideSelection();

});

homeButton.addEventListener("click", () => {

    mainPage.style.display = "none";

    homePage.style.display = "block";

});

handlingGuideHomeButton.addEventListener("click", () => {

    handlingGuidePage.style.display = "none";

    homePage.style.display = "block";

});

notesHomeButton.addEventListener(
    "click",
    () => {

        setupNotesPage.style.display =
            "none";

        homePage.style.display =
            "block";

    }
);

handlingGuideBackButton.addEventListener(
    "click",
    () => {

        const previousScreen =
            handlingGuideHistory.pop();

        if (!previousScreen) {

            handlingGuidePage.style.display =
                "none";

            homePage.style.display =
                "block";

            return;

        }

        if (
            previousScreen ===
            renderGripSelection
        ) {

            selectedGrip = null;

        }

        else if (
            previousScreen ===
            renderIssueSelection
        ) {

            selectedGrip = null;
            selectedIssue = null;

        }

        else if (
            previousScreen ===
            renderHandlingGuideAreas
        ) {

            selectedGrip = null;
            selectedIssue = null;
            selectedArea = null;

        }

        previousScreen();

    }
);

saveNoteButton.addEventListener("click", saveNote);

clearFieldsButton.addEventListener("click", clearFields);

newNoteButton.addEventListener("click", newNote);

deleteNoteButton.addEventListener("click", deleteNote);

cancelDeleteButton.addEventListener(
    "click",
    () => {

        deleteModal.style.display =
            "none";

    }
);

confirmDeleteButton.addEventListener(
    "click",
    performDelete
);

notesSearchInput.addEventListener(
    "input",
    () => {

        renderNotes(
            notesSearchInput.value
        );

    }
);

/* ==========================================================
   Update Breadcrumb
========================================================== */

function updateBreadcrumb() {

    const path = [];

    if (currentHandlingGuideName) {

        path.push(currentHandlingGuideName);

    }

    if (selectedArea) {

        const area =
            currentHandlingGuide.find(
                item => item.id === selectedArea
            );

        if (area) {

            path.push(area.name);

        }

    }

    if (selectedIssue) {

        const area =
            currentHandlingGuide.find(
                item => item.id === selectedArea
            );

        const issue =
            area?.sections.find(
                item => item.id === selectedIssue
            );

        if (issue) {

            path.push(issue.name);

        }

    }

    if (selectedGrip) {

        const gripNames = {

            lowGrip: "Low Grip",
            mediumGrip: "Medium Grip",
            highGrip: "High Grip"

        };

        path.push(
            gripNames[selectedGrip]
        );

    }

    breadcrumb.textContent =
        path.join(" > ");

}

function handleSwipe() {

     if (
        imageOverlay.classList.contains("show")
    ) {

        closeImageButton.click();

        return;

    }

    const swipeDistanceX =
        touchEndX - touchStartX;

    const swipeDistanceY =
        Math.abs(touchEndY - touchStartY);

    if (
        swipeDistanceX > 100 &&
        swipeDistanceY < 60
    ) {

        if (
            detailPage.classList.contains("show")
        ) {

            backButton.click();

        }

        else if (
            handlingGuidePage.style.display === "block"
        ) {

            handlingGuideBackButton.click();

        }

        else if (
            setupNotesPage.style.display === "block"
        ) {

            notesHomeButton.click();

        }

        else if (
            mainPage.style.display === "block"
        ) {

            homeButton.click();

        }

    }

}

/* ==========================================================
   Swipe Navigation
========================================================== */

let touchStartX = 0;
let touchEndX = 0;

let touchStartY = 0;
let touchEndY = 0;

document.addEventListener("touchstart", (event) => {

    touchStartX =
        event.changedTouches[0].screenX;

    touchStartY =
        event.changedTouches[0].screenY;

});

document.addEventListener("touchend", (event) => {

    touchEndX =
        event.changedTouches[0].screenX;

    touchEndY =
        event.changedTouches[0].screenY;

    handleSwipe();

});

/* ==========================================================
   Initial Load
========================================================== */

renderSettings();

loadNotesFromStorage();

renderNotes();

updateSaveButton();

updateAutocompleteLists();

homePage.style.display = "block";

mainPage.style.display = "none";