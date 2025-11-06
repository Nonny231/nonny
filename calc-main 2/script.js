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

        // Error message elements
        this.billError = document.getElementById('bill-error');
        this.tipError = document.getElementById('tip-error');
        this.peopleError = document.getElementById('people-error');

        // Initialize state variables
        this.selectedTipPercent = null;
        this.customTipPercent = null;

        // Debounce timer for input validation
        this.debounceTimer = null;

        // Start the app
        this.init();
    }

    init() {
        // Add event listeners with debouncing for better performance
        this.billInput.addEventListener('input', () => this.debounceCalculate());
        this.customTipInput.addEventListener('input', () => this.handleCustomTip());
        this.peopleInput.addEventListener('input', () => this.debounceCalculate());
        
        // Add blur events for validation
        this.billInput.addEventListener('blur', () => this.validateBill());
        this.customTipInput.addEventListener('blur', () => this.validateCustomTip());
        this.peopleInput.addEventListener('blur', () => this.validatePeople());
        
        this.tipButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleTipSelection(e));
        });

        this.peopleUpBtn.addEventListener('click', () => this.adjustPeople(1));
        this.peopleDownBtn.addEventListener('click', () => this.adjustPeople(-1));
        this.resetBtn.addEventListener('click', () => this.reset());

        // Add keyboard support
        this.addKeyboardSupport();

        // Add touch support for mobile
        this.addTouchSupport();

        // Initial calculation
        this.calculate();
    }

    // Debounced calculation for better performance
    debounceCalculate() {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
            this.calculate();
        }, 150);
    }

    // Input validation methods
    validateBill() {
        const bill = parseFloat(this.billInput.value);
        if (this.billInput.value && (isNaN(bill) || bill < 0)) {
            this.showError(this.billError, 'Please enter a valid bill amount');
            return false;
        } else if (bill > 999999) {
            this.showError(this.billError, 'Bill amount is too large');
            return false;
        }
        this.hideError(this.billError);
        return true;
    }

    validateCustomTip() {
        const tip = parseFloat(this.customTipInput.value);
        if (this.customTipInput.value && (isNaN(tip) || tip < 0)) {
            this.showError(this.tipError, 'Please enter a valid tip percentage');
            return false;
        } else if (tip > 100) {
            this.showError(this.tipError, 'Tip percentage seems high. Are you sure?');
            return true; // Warning, not error
        }
        this.hideError(this.tipError);
        return true;
    }

    validatePeople() {
        const people = parseInt(this.peopleInput.value);
        if (isNaN(people) || people < 1) {
            this.showError(this.peopleError, 'Number of people must be at least 1');
            this.peopleInput.value = '1';
            return false;
        } else if (people > 100) {
            this.showError(this.peopleError, 'That\'s a lot of people! Are you sure?');
            return true; // Warning, not error
        }
        this.hideError(this.peopleError);
        return true;
    }

    showError(errorElement, message) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }

    hideError(errorElement) {
        errorElement.textContent = '';
        errorElement.classList.remove('show');
    }

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
        this.hideError(this.tipError);
        
        this.calculate();
    }

    handleCustomTip() {
        const customValue = parseFloat(this.customTipInput.value) || 0;
        
        // Remove active class from all tip buttons
        this.tipButtons.forEach(btn => btn.classList.remove('active'));
        
        // Set custom tip and clear selected tip
        this.customTipPercent = customValue;
        this.selectedTipPercent = null;
        
        this.validateCustomTip();
        this.debounceCalculate();
    }

    adjustPeople(delta) {
        const currentPeople = parseInt(this.peopleInput.value) || 1;
        const newPeople = Math.max(1, currentPeople + delta);
        this.peopleInput.value = newPeople;
        this.validatePeople();
        this.calculate();
    }

    calculate() {
        // Validate inputs first
        const billValid = this.validateBill();
        const peopleValid = this.validatePeople();
        
        if (!billValid || !peopleValid) {
            return;
        }

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

        // Format and update display with animation
        this.updateDisplay(this.tipAmountDisplay, tipPerPerson);
        this.updateDisplay(this.totalAmountDisplay, totalPerPerson);

        // Enable/disable reset button
        const hasValues = bill > 0 || tipPercent > 0 || people > 1;
        this.resetBtn.disabled = !hasValues;
    }

    updateDisplay(element, value) {
        const formattedValue = `$${value.toFixed(2)}`;
        
        // Add animation class
        element.style.transform = 'scale(1.05)';
        element.style.transition = 'transform 0.2s ease';
        
        setTimeout(() => {
            element.textContent = formattedValue;
            element.style.transform = 'scale(1)';
        }, 100);
    }

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

        // Hide all error messages
        this.hideError(this.billError);
        this.hideError(this.tipError);
        this.hideError(this.peopleError);

        // Reset displays
        this.tipAmountDisplay.textContent = '$0.00';
        this.totalAmountDisplay.textContent = '$0.00';

        // Disable reset button
        this.resetBtn.disabled = true;

        // Focus on bill input
        this.billInput.focus();
    }

    // Keyboard support for accessibility
    addKeyboardSupport() {
        // Allow Enter key to trigger tip button clicks
        this.tipButtons.forEach((btn, index) => {
            btn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    btn.click();
                }
                
                // Arrow key navigation
                if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                    e.preventDefault();
                    const nextBtn = this.tipButtons[index + 1] || this.tipButtons[0];
                    nextBtn.focus();
                } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                    e.preventDefault();
                    const prevBtn = this.tipButtons[index - 1] || this.tipButtons[this.tipButtons.length - 1];
                    prevBtn.focus();
                }
            });
        });

        // Global keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + R for reset
            if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
                e.preventDefault();
                this.reset();
            }
            
            // Number keys for quick tip selection
            if (e.key >= '1' && e.key <= '5' && !e.target.matches('input')) {
                const tipIndex = parseInt(e.key) - 1;
                if (this.tipButtons[tipIndex]) {
                    this.tipButtons[tipIndex].click();
                }
            }
        });
    }

    // Touch support for mobile devices
    addTouchSupport() {
        // Add touch feedback for buttons
        const buttons = [...this.tipButtons, this.peopleUpBtn, this.peopleDownBtn, this.resetBtn];
        
        buttons.forEach(btn => {
            btn.addEventListener('touchstart', () => {
                btn.style.transform = 'scale(0.95)';
            });
            
            btn.addEventListener('touchend', () => {
                setTimeout(() => {
                    btn.style.transform = '';
                }, 100);
            });
        });

        // Prevent zoom on double tap for input fields
        const inputs = [this.billInput, this.customTipInput, this.peopleInput];
        inputs.forEach(input => {
            input.addEventListener('touchend', (e) => {
                e.preventDefault();
                input.focus();
            });
        });
    }
}

// Enhanced input validation and formatting
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the calculator
    new TipCalculator();

    // Add number input restrictions with better UX
    const numberInputs = document.querySelectorAll('input[type="number"]');
    
    numberInputs.forEach(input => {
        // Prevent invalid characters
        input.addEventListener('keydown', (e) => {
            // Allow: backspace, delete, tab, escape, enter, decimal point
            if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
                // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X, Ctrl+Z
                (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
                (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
                (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
                (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
                (e.keyCode === 90 && (e.ctrlKey || e.metaKey)) ||
                // Allow: home, end, left, right, down, up
                (e.keyCode >= 35 && e.keyCode <= 40)) {
                return;
            }
            
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });

        // Format input on blur
        input.addEventListener('blur', (e) => {
            if (e.target.id === 'bill-input' || e.target.id === 'custom-tip') {
                const value = parseFloat(e.target.value);
                if (!isNaN(value)) {
                    e.target.value = value.toFixed(2);
                }
            }
        });

        // Prevent paste of non-numeric content
        input.addEventListener('paste', (e) => {
            e.preventDefault();
            const paste = (e.clipboardData || window.clipboardData).getData('text');
            const numericValue = parseFloat(paste);
            if (!isNaN(numericValue)) {
                e.target.value = numericValue;
                e.target.dispatchEvent(new Event('input'));
            }
        });
    });

    // Add visual feedback for form interactions
    const allInputs = document.querySelectorAll('input, button');
    allInputs.forEach(element => {
        element.addEventListener('focus', () => {
            element.style.outline = '2px solid #26c0ab';
            element.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', () => {
            element.style.outline = '';
            element.style.outlineOffset = '';
        });
    });

    // Add loading state for calculations (useful for complex calculations)
    let calculationTimeout;
    const originalCalculate = TipCalculator.prototype.calculate;
    TipCalculator.prototype.calculate = function() {
        clearTimeout(calculationTimeout);
        
        // Add subtle loading indicator for very fast feedback
        this.tipAmountDisplay.style.opacity = '0.7';
        this.totalAmountDisplay.style.opacity = '0.7';
        
        calculationTimeout = setTimeout(() => {
            originalCalculate.call(this);
            this.tipAmountDisplay.style.opacity = '1';
            this.totalAmountDisplay.style.opacity = '1';
        }, 50);
    };
});

// Service Worker registration for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Add performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
    });
}