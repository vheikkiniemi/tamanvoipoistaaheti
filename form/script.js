const lomake = document.querySelector('#lomake');
const rivit = document.querySelector('#rivit');

lomake.addEventListener('submit', function (event) {
  event.preventDefault();

  const tiedot = new FormData(lomake);
  const rivi = document.createElement('tr');
  const sarakkeet = rivit.closest('table')
    .querySelectorAll('thead th[data-field]');

  for (const sarake of sarakkeet) {
    const kentta = sarake.dataset.field;
    const arvo = tiedot.get(kentta) ?? '';

    const solu = document.createElement('td');
    solu.textContent = String(arvo).trim();
    rivi.appendChild(solu);
  }

  rivit.appendChild(rivi);

  lomake.reset();
  lomake.querySelector('input').focus();
});