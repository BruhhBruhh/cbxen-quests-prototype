let popPoints = 0;

function completeQuest(questId, points) {
    popPoints += points;
    alert(`Quest ${questId} completed! You earned ${points} PoP Points. Total: ${popPoints}`);
    localStorage.setItem('popPoints', popPoints);
}

// Load PoP points on page load
document.addEventListener('DOMContentLoaded', () => {
    popPoints = parseInt(localStorage.getItem('popPoints')) || 0;
});