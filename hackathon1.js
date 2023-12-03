const foodForm = document.getElementById('food-form');
const foodTable = document.getElementById('food-table');

foodForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const foodItem = document.getElementById('food-item').value;
  const quantity = document.getElementById('quantity').value;
  const expirationDate = document.getElementById('expiration-date').value;

  if (!foodItem || !quantity || !expirationDate) {
    alert('Please enter all fields');
    return;
  }
)
  