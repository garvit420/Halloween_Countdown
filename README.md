# Halloween Countdown Timer

A fun project showcasing a Halloween countdown timer with a captivating witch animation.

## Table of Contents

- [Instructions](#instructions)
- [Usage and Features](#usage-and-features)
- [Code Working](#code-working)
- [Blog Link](#blog-link)

## Instructions

To run the project locally:

1. Clone this repository.
2. Open the `index.html` file in your browser.

## Usage and Features

This Halloween countdown timer offers:

- Witch animation performing witchcraft.
- Flipping animation for the countdown timer.
- Automatic calculation of time until the next Halloween.
- Customizable ending date for the countdown timer.

## Code Working

### Time Calculation

The time calculation function operates in three main steps:

1. **Current Date Retrieval**: Retrieves the current date and year using JavaScript's `Date()` object.
2. **Determining Next Halloween Date**: Sets the target date for the next Halloween (October 31st) based on the current year. Adjusts if Halloween for the current year has passed.
3. **Calculating Time Remaining**: Computes the time remaining until the next Halloween and returns it in seconds, ensuring a positive count using `Math.ceil()`.

This process ensures an accurate countdown to the upcoming Halloween.

### Updating Countdown Flip Card

The function `updateFlippingCards(time)` manages the updating of a countdown flip card based on the time remaining until the next Halloween. It performs the following steps:

1. **Time Calculation**: Calculates the days, hours, minutes, and seconds from the given time in seconds.
2. **Updating Flip Cards**: Updates each element of the countdown flip card with its respective time value by calling the `flip()` function.

   - For days, it updates the hundreds, tens, and ones places.
   - For hours, minutes, and seconds, it updates the tens and ones places.

This function ensures that each part of the flip card accurately reflects the calculated time until the upcoming Halloween.

### Flipping of Cards

The function `flip(flipCard, newNumber)` manages the flipping animation for the countdown cards. It operates as follows:

1. **Elements Structure**: Each card consists of two parts - the top and bottom halves - simulated using nested `div` elements with classes `top1` and `bottom1`.
2. **Determination of Numbers**: It extracts the initial number from the top half of the card and compares it with the new number to be displayed. If they're the same, no flipping occurs.
3. **Creating Flip Elements**: Generates `div` elements (`topFlip` and `bottomFlip`) for the flipping animation and assigns classes `top-flip1` and `bottom-flip1` respectively.
4. **Setting Content**: Sets the content of the top and bottom flip elements to initiate the flipping animation with the new number.
5. **Animation Event Handling**: Utilizes animation events (`animationstart` and `animationend`) to control the flipping. Upon animation start, the top half is updated to display the new number. When the animation ends, the bottom half gets updated, and the flip elements are removed from the DOM.
6. **Appending Flips**: Finally, the top and bottom flip elements are appended to the respective flip card for the flipping animation effect.

This function enables the smooth flipping transition between numbers on the countdown flip cards, enhancing the visual appeal of the countdown timer.

### Spooky Halloween Animation

This code creates a Halloween-themed animation using HTML and CSS.

- Elements styled with CSS create shelves, bottles, a skull, candles, spiders, books, and a candy bowl.
- Shelves, bottles, skull, candles, spiders, books, and candy bowl are styled using classes and IDs.
- Elements have animations (`flame`, `eyes`, `spider`, `drip`) for movement, flickering, and dripping effects.

#### Conclusion
- The CSS and HTML combine to produce a spooky Halloween animation with various eerie elements.


## Blog Link

For more details and insights about this project, visit the [blog post](link) related to this project.


