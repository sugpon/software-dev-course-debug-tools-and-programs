const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) { // Bug: <= should be <
    debugger; // Debugging point
      total += cartItems[i].price; // Bug: cartItems[i] is undefined on the last iteration -- fixed
  }
  return total;
}

function applyDiscount(total, discountRate) {
  if(typeof total !== 'number' || typeof discountRate!== 'number'){
    console.error("Invalid input Total: discount must be numbers!");
    return total;
  }

  if(discountRate <0 || discountRate>1) {
    console.error("Invalid discount rates: discount should be always between 0 and 1");
    return total;
  } 

  return total - total * discountRate; // Bug: Missing validation for discountRate -- fixed
  debugger; // Debugging point
}

function generateReceipt(cartItems, total) {
  let receipt = "Items:\n";
  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}\n`;
  });

  if (typeof total!= 'number'){
    console.error("Invalid total: total must be a number");
    return "Error: Invalid total";
  }
  receipt += `Total: $${total.toFixed(2)}`; // Bug: total may not be a number -- fixed
  debugger; // Debugging point
  return receipt;
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;


// === DEBUGGING SUMMARY ===
// Completing this assignment after completing React module. which is giving me much more insights than i had while doing this lesson.

// 1. Fixed Logic Errors:
//    - Changed `i <= cartItems.length` to `i < cartItems.length` in `calculateTotal` to prevent accessing undefined index.
//    - Validated `discountRate` in `applyDiscount` to ensure it's a number between 0 and 1.
//    - Validated `total` in `generateReceipt` before using `.toFixed()`.


// 2. Used Chrome DevTools:
//    - Set breakpoints via `debugger` statements.
//    - Used Console to catch runtime errors and inspect variable values.
//    - Observed call stack and step-through execution to find logical bugs.


// 3. DOM Access:
//    - Ensured correct HTML element IDs (`total`, `receipt`) were used.
//    - Verified no timing issues by using `defer` in script tag.
//
// 4. Tested Edge Cases:
//    - [ ] Empty cart
//    - [ ] One item
//    - [ ] discountRate = 0 and 1

// 5. Learnings:
//    - Validating data before processing helps avoid failures.
//    - Step-by-step debugging with breakpoints was key to catching loop bugs.
//    - Even small typos (like `<=` instead of `<`) can break logic.
//    - Console log is invaluable for understanding flow and state of variables.