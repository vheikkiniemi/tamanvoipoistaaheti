const form = document.querySelector('#entry-form');
const tableRows = document.querySelector('#table-rows');

form.addEventListener('submit', function (event) {
  // Keep the page open instead of submitting it to a server.
  event.preventDefault();

  const formData = new FormData(form);
  const row = document.createElement('tr');
  const columns = tableRows.closest('table')
    .querySelectorAll('thead th[data-field]');

  // Follow the table heading order, independently of the input order.
  for (const column of columns) {
    const fieldName = column.dataset.field;
    const value = formData.get(fieldName) ?? '';
    const cell = document.createElement('td');

    // Display user input as plain text, including any HTML characters.
    cell.textContent = String(value).trim();
    row.appendChild(cell);
  }

  tableRows.appendChild(row);
  form.reset();
  form.querySelector('input').focus();
});
