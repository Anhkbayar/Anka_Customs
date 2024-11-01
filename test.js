const nav = document.querySelector('#header_container');
const footer = document.querySelector('#footer_container');
const div = document.querySelector('#product_box');
fetch('/Header.html')
  .then(res => res.text())
  .then(data => {
    nav.innerHTML = data;
  });
fetch('/Footer.html')
  .then(res => res.text())
  .then(data =>{
    footer.innerHTML = data;
  });
fetch('/Productbox.html')
  .then(res => res.text())
  .then(data =>{
    div.innerHTML = data;
  })