document.querySelectorAll('.cell').forEach(cell => {
  cell.addEventListener('click', () => {
    cell.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  });
});
