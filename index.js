const string = 'Hello world'
// comment
console.log(string)

alert(string)
const isRGBColor = (rgb) => {
  const regex = /rgb\(\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*\)/;
  return regex.test(rgb);
}
if (localStorage.getItem('username')) {
    console.log('Item exists!');
}
const isRippleAddress = (address) => {
  const regex = /r[0-9a-zA-Z]{33}/;
  return regex.test(address);
}
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let uniqueArr = [...new Set(arr)];
const btn = document.querySelector('a[data-btn]');
btn.onclick = event => {
    event.preventDefault();
    // Output data attributes
    console.log(btn.dataset.name); // David
    console.log(btn.dataset.surname); // Adams
    console.log(btn.dataset.uniqueId); // 30
};
const openTab = (url) => {
  window.open(url, "_blank");
};
