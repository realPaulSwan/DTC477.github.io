const url = 'ingredients.html';
const url2 = 'directions.html';
const contentDiv = document.getElementById('Ingredients');
const contentDiv2 = document.getElementById('Directions');


fetch(url)
  .then(response => response.text())
  .then(data => {
    contentDiv.innerHTML = data;
  })
  .catch(error => {
    console.error(error);
  });

  fetch(url2)
  .then(response => response.text())
  .then(data => {
    contentDiv2.innerHTML = data;
  })
  .catch(error => {
    console.error(error);
  });
