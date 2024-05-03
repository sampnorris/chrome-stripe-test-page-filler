const params = new URLSearchParams(window.location.href);
const componentName = params.get("componentName");

const values = {
  cardNumber: "4242424242424242",
  phoneNumber: "0404040040",
  billingName: "John Doe",
  cardExpiry: "12/45",
  cardCvc: "888",
  billingAddressLine1: "101 Collins Street",
};

// Function to simulate typing into fields
function typeIntoField(fieldId, text) {
  var field = document.getElementById(fieldId);
  if (!field) return;
  field.focus(); // Focus on the field
  field.value = text; // Clear existing value
  field.dispatchEvent(new Event("input", { bubbles: true }));
}

// Function to populate fields
function populateFields() {
  Object.keys(values).forEach((key) => {
    const element = document.getElementById(key);
    if (element) {
      typeIntoField(key, values[key]);
    }
  });
}

// Event listener for shortcut trigger (e.g., Control + P on Mac)
document.addEventListener("keydown", function (event) {
  // Check if the Control key is pressed and the key is 'p' (lowercase)
  if (event.ctrlKey && event.key === "p") {
    populateFields();
  }
});
