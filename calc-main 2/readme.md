# Tip Calculator App

A beautiful, responsive tip calculator built with vanilla HTML, CSS, and JavaScript. This app helps users calculate tips and split bills among multiple people.

![Tip Calculator Preview](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desktop.jpg-Vyrs1yVNQH3GF24yarvjUpaK9Hhess.jpeg)

## 🚀 Features

- **Bill Input**: Enter the total bill amount
- **Tip Selection**: Choose from preset percentages (5%, 10%, 15%, 25%, 50%) or enter a custom amount
- **People Counter**: Split the bill among multiple people
- **Real-time Calculations**: Automatically calculates tip amount and total per person
- **Reset Functionality**: Clear all inputs and start over
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Accessible**: Keyboard navigation and screen reader friendly

## 📁 File Structure

```
tip-calculator/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This documentation
```

## 🛠️ Installation & Setup

1. **Download the files**: Save all three files (index.html, styles.css, script.js) in the same folder
2. **Open in browser**: Double-click on `index.html` or right-click and select "Open with" your preferred browser
3. **Start calculating**: The app is ready to use!

## 💻 Usage

1. **Enter Bill Amount**: Click on the bill input field and enter the total bill amount
2. **Select Tip Percentage**: 
   - Click on one of the preset buttons (5%, 10%, 15%, 25%, 50%)
   - OR enter a custom percentage in the "Custom" field
3. **Set Number of People**: Use the input field or +/- buttons to set how many people are splitting the bill
4. **View Results**: The app automatically calculates and displays:
   - Tip amount per person
   - Total amount per person (bill + tip)
5. **Reset**: Click the "RESET" button to clear all inputs and start over

## 🎨 Design Features

- **Color Scheme**: 
  - Primary: Teal (#26c0ab)
  - Secondary: Dark Green (#00494d)
  - Background: Light Mint (#c5e4e7)
  - Text: Various shades of gray and white
- **Typography**: Bold, easy-to-read fonts with proper spacing
- **Layout**: Card-based design with clean separation of input and output sections
- **Responsive**: Adapts to different screen sizes using CSS Grid and Flexbox

## 🔧 Technical Details

- **HTML5**: Semantic markup with proper form elements
- **CSS3**: Modern styling with Grid, Flexbox, and custom properties
- **Vanilla JavaScript**: ES6+ features with class-based architecture
- **No Dependencies**: Pure web technologies, no external libraries required


This is a learning project perfect for beginners. Feel free to:
- Add new features
- Improve the design
- Fix bugs
- Enhance accessibility

## 📚 Learning Resources

If you're new to web development, this project covers:
- HTML form elements and semantic markup
- CSS Grid and Flexbox layouts
- JavaScript DOM manipulation
- Event handling
- Responsive design principles
- Class-based JavaScript architecture

## 📄 License

This project is open source and available under the MIT License.
```

```md project="Tip Calculator" file="DOCUMENTATION.md" type="markdown"
# Tip Calculator - Complete Code Documentation

This document explains every line of code in the tip calculator app, making it perfect for beginners to understand how everything works.

## Table of Contents
1. [HTML Structure (index.html)](#html-structure)
2. [CSS Styling (styles.css)](#css-styling)
3. [JavaScript Functionality (script.js)](#javascript-functionality)

---

## HTML Structure (index.html)

### Document Setup
```html
&lt;!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tip Calculator</title>
    <link rel="stylesheet" href="styles.css">
</head>
```

**Line by line explanation:**
- `<!DOCTYPE html>`: Tells the browser this is an HTML5 document
- `<html lang="en">`: Root element with English language attribute
- `<meta charset="UTF-8">`: Sets character encoding to UTF-8 (supports all characters)
- `<meta name="viewport"...>`: Makes the page responsive on mobile devices
- `<title>`: Sets the browser tab title
- `<link rel="stylesheet"...>`: Links our CSS file for styling

### Main Container Structure
```html
<body>
    <div class="container">
        &lt;!-- Logo -->
        <div class="logo">
            <h1>SPLI<br>TTER</h1>
        </div>
```

**Explanation:**
- `<body>`: Contains all visible content
- `<div class="container">`: Main wrapper that centers everything on the page
- `<div class="logo">`: Container for the app logo
- `<h1>SPLI<br>TTER</h1>`: App title with line break for styling

### Calculator Card Structure
```html
<div class="calculator-card">
    <div class="calculator-grid">
        &lt;!-- Left Side - Input Section -->
        <div class="input-section">
```

**Explanation:**
- `calculator-card`: White card container with rounded corners and shadow
- `calculator-grid`: Uses CSS Grid to create two-column layout
- `input-section`: Left side containing all input fields

### Bill Input Section
```html
<div class="input-group">
    <label for="bill-input">Bill</label>
    <div class="input-wrapper">
        <span class="dollar-sign">$</span>
        <input type="number" id="bill-input" placeholder="0" step="0.01">
    </div>
</div>
```

**Explanation:**
- `input-group`: Container for each input section
- `<label for="bill-input">`: Label that connects to the input field
- `input-wrapper`: Positions the dollar sign and input field
- `dollar-sign`: Dollar symbol positioned inside the input
- `<input type="number"...>`: Number input for bill amount
  - `id="bill-input"`: Unique identifier for JavaScript
  - `placeholder="0"`: Shows "0" when empty
  - `step="0.01"`: Allows decimal values (cents)

### Tip Selection Buttons
```html
<div class="input-group">
    <label>Select Tip %</label>
    <div class="tip-buttons">
        <button class="tip-btn" data-tip="5">5%</button>
        <button class="tip-btn" data-tip="10">10%</button>
        <button class="tip-btn" data-tip="15">15%</button>
        <button class="tip-btn" data-tip="25">25%</button>
        <button class="tip-btn" data-tip="50">50%</button>
        <input type="number" id="custom-tip" placeholder="Custom" step="0.01">
    </div>
</div>
```

**Explanation:**
- `tip-buttons`: Grid container for tip percentage buttons
- `<button class="tip-btn" data-tip="5">`: Tip button
  - `data-tip="5"`: Custom attribute storing the tip percentage value
  - JavaScript uses this to know which percentage was clicked
- `#custom-tip`: Input field for custom tip percentages

### People Counter Section
```html
<div class="input-group">
    <label for="people-input">Number of People</label>
    <div class="input-wrapper people-wrapper">
        <span class="person-icon">👤</span>
        <input type="number" id="people-input" value="1" min="1">
        <div class="people-controls">
            <button id="people-up">+</button>
            <button id="people-down">-</button>
        </div>
    </div>
</div>
```

**Explanation:**
- `person-icon`: Person emoji icon inside the input
- `value="1"`: Default value of 1 person
- `min="1"`: Minimum value (can't have less than 1 person)
- `people-controls`: Container for +/- buttons
- `people-up` and `people-down`: Buttons to increment/decrement people count

### Results Section
```html
<div class="results-section">
    <div class="results-content">
        &lt;!-- Tip Amount -->
        <div class="result-item">
            <div class="result-label">
                <div class="label-text">Tip Amount</div>
                <div class="label-subtext">/ person</div>
            </div>
            <div class="result-value" id="tip-amount">$0.00</div>
        </div>

        &lt;!-- Total -->
        <div class="result-item">
            <div class="result-label">
                <div class="label-text">Total</div>
                <div class="label-subtext">/ person</div>
            </div>
            <div class="result-value" id="total-amount">$0.00</div>
        </div>
    </div>

    &lt;!-- Reset Button -->
    <button id="reset-btn" class="reset-button">RESET</button>
</div>
```

**Explanation:**
- `results-section`: Dark green container for displaying results
- `result-item`: Container for each result (tip amount and total)
- `result-label`: Contains the label text and subtext
- `result-value`: Large text showing the calculated amount
- `id="tip-amount"` and `id="total-amount"`: JavaScript updates these elements
- `reset-btn`: Button to clear all inputs and reset the calculator

---

## CSS Styling (styles.css)

### Global Reset and Base Styles
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

**Explanation:**
- `*`: Selects all elements
- `margin: 0; padding: 0;`: Removes default spacing from all elements
- `box-sizing: border-box;`: Makes padding and border included in element's total width/height

### Body Styling
```css
body {
    font-family: 'Space Mono', monospace, Arial, sans-serif;
    background-color: #c5e4e7;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}
```

**Explanation:**
- `font-family`: Sets the font (Space Mono preferred, fallback to monospace, then Arial)
- `background-color: #c5e4e7`: Light mint green background
- `min-height: 100vh`: Minimum height of full viewport height
- `display: flex`: Makes body a flex container
- `align-items: center`: Centers content vertically
- `justify-content: center`: Centers content horizontally
- `padding: 20px`: Adds space around the edges

### Container and Logo
```css
.container {
    width: 100%;
    max-width: 920px;
}

.logo {
    text-align: center;
    margin-bottom: 40px;
}

.logo h1 {
    font-size: 24px;
    font-weight: 700;
    color: #00494d;
    letter-spacing: 0.3em;
    line-height: 1.2;
}
```

**Explanation:**
- `.container`: Main wrapper with maximum width
- `.logo`: Centers the logo text
- `font-size: 24px`: Size of the logo text
- `font-weight: 700`: Bold text
- `color: #00494d`: Dark green color
- `letter-spacing: 0.3em`: Adds space between letters
- `line-height: 1.2`: Controls spacing between lines

### Calculator Card
```css
.calculator-card {
    background: white;
    border-radius: 25px;
    padding: 32px;
    box-shadow: 0 32px 43px rgba(79, 166, 175, 0.2);
}

.calculator-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
}
```

**Explanation:**
- `background: white`: White background for the card
- `border-radius: 25px`: Rounded corners
- `padding: 32px`: Internal spacing
- `box-shadow`: Adds shadow effect (x-offset, y-offset, blur, color with transparency)
- `display: grid`: Creates a grid layout
- `grid-template-columns: 1fr 1fr`: Two equal columns
- `gap: 48px`: Space between grid items

### Input Styling
```css
.input-wrapper input {
    width: 100%;
    height: 48px;
    padding: 0 17px;
    padding-left: 50px;
    font-size: 24px;
    font-weight: 700;
    background-color: #f4fafa;
    border: 2px solid transparent;
    border-radius: 5px;
    color: #00494d;
    text-align: right;
    outline: none;
}
```

**Explanation:**
- `width: 100%`: Full width of container
- `height: 48px`: Fixed height
- `padding-left: 50px`: Space for the dollar sign icon
- `font-size: 24px`: Large, readable text
- `background-color: #f4fafa`: Very light mint background
- `border: 2px solid transparent`: Invisible border (for focus state)
- `text-align: right`: Numbers align to the right
- `outline: none`: Removes default browser outline

### Focus States
```css
.input-wrapper input:focus {
    border-color: #26c0ab;
}
```

**Explanation:**
- `:focus`: Applies when user clicks/tabs to the input
- `border-color: #26c0ab`: Teal border when focused

### Tip Buttons
```css
.tip-btn {
    background-color: #00494d;
    color: white;
    border: none;
}

.tip-btn:hover {
    background-color: #26c0ab;
    color: #00494d;
}

.tip-btn.active {
    background-color: #26c0ab;
    color: #00494d;
}
```

**Explanation:**
- Default state: Dark green background, white text
- `:hover`: Changes color when mouse hovers over button
- `.active`: Style when button is selected (JavaScript adds this class)

### Results Section
```css
.results-section {
    background-color: #00494d;
    border-radius: 15px;
    padding: 40px 24px 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 257px;
}
```

**Explanation:**
- `background-color: #00494d`: Dark green background
- `display: flex`: Flexbox layout
- `flex-direction: column`: Stack items vertically
- `justify-content: space-between`: Spreads items apart
- `min-height: 257px`: Minimum height to maintain proportions

### Result Values
```css
.result-value {
    color: #26c0ab;
    font-size: 48px;
    font-weight: 700;
    letter-spacing: -1px;
}
```

**Explanation:**
- `color: #26c0ab`: Bright teal color
- `font-size: 48px`: Large text for emphasis
- `letter-spacing: -1px`: Slightly tighter letter spacing

### Responsive Design
```css
@media (max-width: 768px) {
    .calculator-grid {
        grid-template-columns: 1fr;
        gap: 32px;
    }
}
```

**Explanation:**
- `@media (max-width: 768px)`: Applies styles only on screens smaller than 768px
- `grid-template-columns: 1fr`: Changes to single column layout on mobile
- This makes the app stack vertically on smaller screens

---

## JavaScript Functionality (script.js)

### Class Definition
```javascript
class TipCalculator {
    constructor() {
        // Get references to HTML elements
        this.billInput = document.getElementById('bill-input');
        this.customTipInput = document.getElementById('custom-tip');
        this.peopleInput = document.getElementById('people-input');
        this.tipButtons = document.querySelectorAll('.tip-btn');
        this.peopleUpBtn = document.getElementById('people-up');
        this.peopleDownBtn = document.getElementById('people-down');
        this.resetBtn = document.getElementById('reset-btn');
        this.tipAmountDisplay = document.getElementById('tip-amount');
        this.totalAmountDisplay = document.getElementById('total-amount');

        // Initialize state variables
        this.selectedTipPercent = null;
        this.customTipPercent = null;

        // Start the app
        this.init();
    }
```

**Explanation:**
- `class TipCalculator`: Creates a class to organize our code
- `constructor()`: Runs when we create a new TipCalculator
- `document.getElementById()`: Gets HTML elements by their ID
- `document.querySelectorAll()`: Gets all elements with the specified class
- `this.selectedTipPercent = null`: Stores which tip button is selected
- `this.customTipPercent = null`: Stores custom tip percentage
- `this.init()`: Calls the initialization method

### Event Listeners Setup
```javascript
init() {
    // Add event listeners
    this.billInput.addEventListener('input', () => this.calculate());
    this.customTipInput.addEventListener('input', () => this.handleCustomTip());
    this.peopleInput.addEventListener('input', () => this.calculate());
    
    this.tipButtons.forEach(btn => {
        btn.addEventListener('click', (e) => this.handleTipSelection(e));
    });

    this.peopleUpBtn.addEventListener('click', () => this.adjustPeople(1));
    this.peopleDownBtn.addEventListener('click', () => this.adjustPeople(-1));
    this.resetBtn.addEventListener('click', () => this.reset());

    // Initial calculation
    this.calculate();
}
```

**Explanation:**
- `addEventListener()`: Listens for events (like clicks or typing)
- `'input'`: Event that fires when user types in an input field
- `'click'`: Event that fires when user clicks a button
- `() => this.calculate()`: Arrow function that calls the calculate method
- `forEach()`: Loops through all tip buttons to add click listeners
- `this.calculate()`: Runs initial calculation when app starts

### Tip Button Selection
```javascript
handleTipSelection(e) {
    const tipPercent = parseFloat(e.target.dataset.tip);
    
    // Remove active class from all buttons
    this.tipButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    e.target.classList.add('active');
    
    // Set selected tip and clear custom input
    this.selectedTipPercent = tipPercent;
    this.customTipPercent = null;
    this.customTipInput.value = '';
    
    this.calculate();
}
```

**Explanation:**
- `e.target`: The button that was clicked
- `parseFloat()`: Converts text to a decimal number
- `e.target.dataset.tip`: Gets the `data-tip` attribute value
- `classList.remove('active')`: Removes the active styling from all buttons
- `classList.add('active')`: Adds active styling to clicked button
- `this.customTipInput.value = ''`: Clears the custom tip input
- `this.calculate()`: Recalculates with new tip percentage

### Custom Tip Handling
```javascript
handleCustomTip() {
    const customValue = parseFloat(this.customTipInput.value) || 0;
    
    // Remove active class from all tip buttons
    this.tipButtons.forEach(btn => btn.classList.remove('active'));
    
    // Set custom tip and clear selected tip
    this.customTipPercent = customValue;
    this.selectedTipPercent = null;
    
    this.calculate();
}
```

**Explanation:**
- `|| 0`: If parseFloat returns NaN (not a number), use 0 instead
- When user types in custom field, we clear the selected tip button
- `this.selectedTipPercent = null`: Clears the button selection

### People Counter Adjustment
```javascript
adjustPeople(delta) {
    const currentPeople = parseInt(this.peopleInput.value) || 1;
    const newPeople = Math.max(1, currentPeople + delta);
    this.peopleInput.value = newPeople;
    this.calculate();
}
```

**Explanation:**
- `parseInt()`: Converts text to a whole number
- `delta`: The change amount (+1 or -1)
- `Math.max(1, ...)`: Ensures the result is never less than 1
- `currentPeople + delta`: Adds or subtracts 1 from current value

### Main Calculation Function
```javascript
calculate() {
    const bill = parseFloat(this.billInput.value) || 0;
    const people = parseInt(this.peopleInput.value) || 1;
    
    let tipPercent = 0;
    if (this.selectedTipPercent !== null) {
        tipPercent = this.selectedTipPercent;
    } else if (this.customTipPercent !== null) {
        tipPercent = this.customTipPercent;
    }

    // Calculate tip and total
    const tipTotal = (bill * tipPercent) / 100;
    const tipPerPerson = tipTotal / people;
    const totalPerPerson = (bill + tipTotal) / people;

    // Update display
    this.tipAmountDisplay.textContent = `$\${tipPerPerson.toFixed(2)}`;
    this.totalAmountDisplay.textContent = `$\${totalPerPerson.toFixed(2)}`;

    // Enable/disable reset button
    const hasValues = bill > 0 || tipPercent > 0 || people > 1;
    this.resetBtn.disabled = !hasValues;
}
```

**Explanation:**
- Gets current values from all inputs
- Determines which tip percentage to use (button or custom)
- `(bill * tipPercent) / 100`: Calculates total tip amount
- `tipTotal / people`: Divides tip among all people
- `(bill + tipTotal) / people`: Calculates total per person including tip
- `toFixed(2)`: Rounds to 2 decimal places (cents)
- `textContent`: Updates the displayed text
- `this.resetBtn.disabled`: Enables/disables reset button based on whether there are values

### Reset Function
```javascript
reset() {
    // Clear all inputs
    this.billInput.value = '';
    this.customTipInput.value = '';
    this.peopleInput.value = '1';

    // Clear selections
    this.selectedTipPercent = null;
    this.customTipPercent = null;

    // Remove active states
    this.tipButtons.forEach(btn => btn.classList.remove('active'));

    // Reset displays
    this.tipAmountDisplay.textContent = '$0.00';
    this.totalAmountDisplay.textContent = '$0.00';

    // Disable reset button
    this.resetBtn.disabled = true;

    // Focus on bill input
    this.billInput.focus();
}
```

**Explanation:**
- Clears all input fields
- Resets all state variables to their initial values
- Removes active styling from all buttons
- Sets displays back to $0.00
- Disables the reset button
- `focus()`: Puts cursor in the bill input field

### App Initialization
```javascript
// Initialize the calculator when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new TipCalculator();
});
```

**Explanation:**
- `DOMContentLoaded`: Event that fires when HTML is fully loaded
- `new TipCalculator()`: Creates a new instance of our calculator class
- This ensures the JavaScript runs only after the HTML is ready

### Input Validation
```javascript
document.addEventListener('DOMContentLoaded', () => {
    // Add number input restrictions
    const numberInputs = document.querySelectorAll('input[type="number"]');
    
    numberInputs.forEach(input => {
        input.addEventListener('keydown', (e) => {
            // Allow: backspace, delete, tab, escape, enter
            if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
                // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
                (e.keyCode === 65 && e.ctrlKey === true) ||
                (e.keyCode === 67 && e.ctrlKey === true) ||
                (e.keyCode === 86 && e.ctrlKey === true) ||
                (e.keyCode === 88 && e.ctrlKey === true) ||
                // Allow: home, end, left, right, down, up
                (e.keyCode >= 35 && e.keyCode &lt;= 40)) {
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode &lt; 48 || e.keyCode > 57)) && (e.keyCode &lt; 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });
    });
});
```

**Explanation:**
- Gets all number input fields
- `keydown`: Event that fires when user presses a key
- `e.keyCode`: Numeric code for the pressed key
- Allows navigation keys (arrows, home, end, etc.)
- Allows keyboard shortcuts (Ctrl+A, Ctrl+C, etc.)
- `e.preventDefault()`: Stops the key from being typed if it's not a number
- This prevents users from typing letters in number fields

---

## Key Programming Concepts Explained

### 1. **DOM Manipulation**
- **What it is**: Changing HTML elements using JavaScript
- **How we use it**: Getting elements by ID, changing their content, adding/removing CSS classes

### 2. **Event Handling**
- **What it is**: Responding to user actions (clicks, typing, etc.)
- **How we use it**: Adding event listeners to buttons and input fields

### 3. **State Management**
- **What it is**: Keeping track of the app's current condition
- **How we use it**: Variables that store selected tip percentage, bill amount, etc.

### 4. **Responsive Design**
- **What it is**: Making the app work on different screen sizes
- **How we use it**: CSS media queries that change layout on mobile devices

### 5. **Input Validation**
- **What it is**: Making sure users enter valid data
- **How we use it**: Preventing non-numeric characters in number fields

### 6. **Class-Based Architecture**
- **What it is**: Organizing code into reusable, logical groups
- **How we use it**: TipCalculator class that contains all related functions
