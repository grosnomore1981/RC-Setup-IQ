import { setupDatabase } from "./setupDatabase.js";

import { handlingGuide } from "./handlingGuide.js";

const settingsContainer = document.getElementById("settingsContainer");

const detailPage = document.getElementById("detailPage");

const detailTitle = document.getElementById("detailTitle");

const detailContent = document.getElementById("detailContent");

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

const breadcrumb = document.getElementById("breadcrumb");

let selectedArea = null;

let selectedIssue = null;

let selectedGrip = null;

let previousPage = null;

let activeTile = null;

let handlingGuideHistory = [];

/* ==========================================================
   Render Categories
========================================================== */

function renderSettings(filter = "") {

    settingsContainer.innerHTML = "";

    const filteredSettings = setupDatabase.filter(setting =>
        setting.name.toLowerCase().includes(filter.toLowerCase())
    );

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

    detailPage.classList.add("show");

    window.scrollTo(0, 0);
}

function closeDetailPage() {

    detailPage.classList.remove("show");
}

/* ==========================================================
   Render Handling Guide Areas
========================================================== */

function renderHandlingGuideAreas() {

    updateBreadcrumb();

    handlingGuideContainer.innerHTML = "";

    const cardsWrapper = document.createElement("div");

    cardsWrapper.className = "homeCards";

    handlingGuide.forEach(area => {

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
            name: "Understeer (Push)"
        },

        {
            id: "reduceOversteer",
            name: "Oversteer (Loose)"
        }

    ];

    issues.forEach(issue => {

        const card = document.createElement("div");

        card.className = "homeCard";

        card.innerHTML = `
            <h2>${issue.name}</h2>
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
        handlingGuide.find(
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

           previousPage = "handlingGuideRecommendations";

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

    detailContent.innerHTML = `

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

        ${renderList("Common Uses", setting.commonUses)}

        ${renderTradeOffs(setting.tradeOffs)}

        ${renderSection("Quick Summary", setting.quickSummary)}

    `;

    openDetailPage();
}

/* ==========================================================
   Back Button
========================================================== */

backButton.addEventListener("click", closeDetailPage);

/* ==========================================================
   Search
========================================================== */

searchInput.addEventListener("input", () => {

    renderSettings(searchInput.value);

});

/* ==========================================================
   Home Page Navigation
========================================================== */

setupDatabaseCard.addEventListener("click", () => {

    homePage.style.display = "none";

    mainPage.style.display = "block";

});

handlingGuideCard.addEventListener("click", () => {

    renderHandlingGuideAreas();

    homePage.style.display = "none";

    handlingGuidePage.style.display = "block";

});

homeButton.addEventListener("click", () => {

    mainPage.style.display = "none";

    homePage.style.display = "block";

});

handlingGuideHomeButton.addEventListener("click", () => {

    handlingGuidePage.style.display = "none";

    homePage.style.display = "block";

});

handlingGuideBackButton.addEventListener(
    "click",
    () => {

        const previousScreen =
            handlingGuideHistory.pop();

        if (!previousScreen) return;

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

/* ==========================================================
   Update Breadcrumb
========================================================== */

function updateBreadcrumb() {

    const path = [];

    if (selectedArea) {

        const area =
            handlingGuide.find(
                item => item.id === selectedArea
            );

        if (area) {

            path.push(area.name);

        }

    }

    if (selectedIssue) {

        const area =
            handlingGuide.find(
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

/* ==========================================================
   Initial Load
========================================================== */

renderSettings();

homePage.style.display = "block";

mainPage.style.display = "none";