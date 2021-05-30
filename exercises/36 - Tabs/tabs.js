console.log("ya ya wes we get it.. IT WORKS!");

const tabs = document.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

const tabHandleClick = (e) => {
    console.log(e.currentTarget);
    // hide all tab panels
    tabPanels.forEach((panel) => {
        panel.hidden = true;
    });
    // unselect all the tabs
    tabs.forEach((tab) => {
        tab.setAttribute("aria-selected", false);
    });
    // select the one we want
    e.currentTarget.setAttribute("aria-selected", true);
    // show that panel
    tabPanels.forEach((panel) => {
        console.log(
            e.currentTarget.getAttribute("id") === panel.getAttribute("aria-labelledby")
        );
        if (
            e.currentTarget.getAttribute("id") === panel.getAttribute("aria-labelledby")
        ) {
            panel.removeAttribute("hidden");
        }
    });
};

tabs.forEach((tab) => {
    tab.addEventListener("click", tabHandleClick);
});

console.log(tabs);
