const nav = document.querySelector('#header_container');
const footer = document.querySelector('#footer_container');
fetch('Header.html')
  .then(res => res.text())
  .then(data => {
    nav.innerHTML = data;
  });
fetch('Footer.html')
  .then(res => res.text())
  .then(data =>{
    footer.innerHTML = data;
  });
function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());

    fetch("http://localhost:3000/register", {
        method: "POST",
        body: JSON.stringify(value),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
}
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

