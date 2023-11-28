// Function to calculate time left until next Halloween
function getTimeUntilNextHalloween() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const nextHalloween = new Date(currentYear, 9, 31); // October 31st (month is zero-indexed)

  // If Halloween for this year has passed, calculate for next year
  if (currentDate.getMonth() > 9 || (currentDate.getMonth() === 9 && currentDate.getDate() > 31)) {
    nextHalloween.setFullYear(currentYear + 1);
  }

  // Calculate time remaining until next Halloween and return in seconds
  return Math.ceil((nextHalloween - currentDate) / 1000);
}

// Function to update flipping cards with time values
function updateFlippingCards(time) {
  // Calculate days, hours, minutes, and seconds from the given time
  const seconds = Math.floor(time % 60);
  const minutes = Math.floor(time / 60) % 60;
  const hours = Math.floor(time / 3600) % 24;
  const days = Math.floor(time / 86400);

  // Update each flipping card with the respective time values
  flip(document.querySelector("[data-days-hundreds]"), Math.floor(days / 100));
  flip(document.querySelector("[data-days-tens]"), Math.floor((days % 100) / 10));
  flip(document.querySelector("[data-days-ones]"), days % 10);
  flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10));
  flip(document.querySelector("[data-hours-ones]"), hours % 10);
  flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10));
  flip(document.querySelector("[data-minutes-ones]"), minutes % 10);
  flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10));
  flip(document.querySelector("[data-seconds-ones]"), seconds % 10);
}

// Execute code when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  let previousTimeBetweenDates;

  // Update the countdown timer every 250 milliseconds
  setInterval(() => {
    // Get the time remaining until next Halloween
    const timeBetweenDates = getTimeUntilNextHalloween();
    
    // Update the flipping cards only if the time value has changed
    if (timeBetweenDates !== previousTimeBetweenDates) {
      updateFlippingCards(timeBetweenDates);
      previousTimeBetweenDates = timeBetweenDates;
    }
  }, 250);
});

// Function to perform the flipping animation on the flip card
function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector(".top1");
  const startNumber = parseInt(topHalf.textContent);
  if (newNumber === startNumber) return;

  const bottomHalf = flipCard.querySelector(".bottom1");
  const topFlip = document.createElement("div");
  topFlip.classList.add("top-flip1");
  const bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottom-flip1");

  // Set the content for top and bottom flip elements
  topFlip.textContent = startNumber;
  bottomFlip.textContent = newNumber;

  // Handle flipping animation events
  topFlip.addEventListener("animationstart", (e) => {
    topHalf.textContent = newNumber;
  });
  topFlip.addEventListener("animationend", (e) => {
    topFlip.remove();
  });
  bottomFlip.addEventListener("animationend", (e) => {
    bottomHalf.textContent = newNumber;
    bottomFlip.remove();
  });

  // Append the top and bottom flip elements to the flip card
  flipCard.append(topFlip, bottomFlip);
}
