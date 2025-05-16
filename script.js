document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("animateBtn");

    // Load user preference (e.g., hasClicked)
    const hasClicked = localStorage.getItem("hasClicked");

    if (hasClicked === "true") {
        button.textContent = "Clicked Before! Click Again";
    }

    button.addEventListener("click", () => {
        // Trigger CSS animation
        button.classList.add("animated");
        localStorage.setItem("hasClicked", "true");

        // Remove the animation class after it finishes so it can replay
        setTimeout(() => {
            button.classList.remove("animated");
        }, 600);
    });
});
