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
let fruit = fruits[Math.floor(Math.random()*fruits.length)];
if (localStorage.getItem('username')) {
    console.log('Item exists!');
}
fetch('https://example.com/authenticate', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: 'David', password: '12345' })
}).then(response => response.json()).then(data => {
    console.log(data);
}).catch(error => {
    console.error('Error:', error);
});
setTimeout(() => location.href = "https://codeshack.io", 10000);
const isRippleAddress = (address) => {
  const regex = /r[0-9a-zA-Z]{33}/;
  return regex.test(address);
}
el.addEventListener('keyup', e => {
  msg.style = e.getModifierState('CapsLock')
    ? 'display: block'
    : 'display: none';
});
window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
});
const currentUrl = window.location.href;
const isEthereumAddress = (address) => {
  const regex = /0x[a-fA-F0-9]{40}/;
  return regex.test(address);
}
const isEthereumAddress = (address) => {
  const regex = /0x[a-fA-F0-9]{40}/;
  return regex.test(address);
}
const isPostalCode = (postalCode, countryCode) => {
  if (countryCode === 'US') {
    const regex = /[0-9]{5}(?:-[0-9]{4})?/;
    return regex.test(postalCode);
  } else if (countryCode === 'CA') {
    const regex = /[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ] [0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]/;
    return regex.test(postalCode.toUpperCase());
  } else {
    // Add regex for other country codes as needed
    return false;
  }
}
let randomNum = Math.floor(Math.random() * maxNum);
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}
const uniqueNums = [...new Set(nums)];
if (/\S+@\S+\.\S+/.test('david@codeshack.io')) {
    console.log('Email is valid!');
} else {
    console.log('Email is invalid!');
}
setTimeout(() => location.href = "https://codeshack.io", 10000);
const isBitcoinAddress = (address) => {
  const regex = /[13][a-km-zA-HJ-NP-Z0-9]{25,34}/;
  return regex.test(address);
}
class Fruit {

    constructor(name, color) {
        this._name = name;
        this._color = color;
    }

    eat() {
        console.log('You ate the ' + this.name + '.');
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get color() {
        return this._color;
    }

    set color(color) {
        this._color = color;
    }   

}
function reverseString(str) {
  return str.split("").reverse().join("");
}
const isRippleAddress = (address) => {
  const regex = /r[0-9a-zA-Z]{33}/;
  return regex.test(address);
}
console.log(localStorage.getItem('username'));
const array = [...Array(10).keys()].map(i => i + 1);
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
const uniqueNums = [...new Set(nums)];
let newArr = oldArr.map(function(item) {
  return item + 1;
});
const openTab = (url) => {
  window.open(url, "_blank");
};
const element = document.querySelector('#element');
if (element.offsetParent === null) {
    console.log('Element is hidden');
}
window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
});
let uniqueArr = [...new Set(arr)];
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}
const isRGBColor = (rgb) => {
  const regex = /rgb\(\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*\)/;
  return regex.test(rgb);
}
function countOccurences(str, char) {
  return str.split(char).length - 1;
}
const isEthereumAddress = (address) => {
  const regex = /0x[a-fA-F0-9]{40}/;
  return regex.test(address);
}
function countOccurences(str, char) {
  return str.split(char).length - 1;
}
const onScrollStop = callback => {
  let isScrolling;
  window.addEventListener(
    'scroll',
    e => {
      clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        callback();
      }, 150);
    },
    false
  );
};
const uniqueNums = [...new Set(nums)];
let fruit = fruits[Math.floor(Math.random()*fruits.length)];
const isRippleAddress = (address) => {
  const regex = /r[0-9a-zA-Z]{33}/;
  return regex.test(address);
}
let randomNum = Math.floor(Math.random() * maxNum);
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
const isCreditCard = (cc) => {
  const regex = /(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})/;
  return regex.test(cc);
}
const isCreditCard = (cc) => {
  const regex = /(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})/;
  return regex.test(cc);
}
const isRippleAddress = (address) => {
  const regex = /r[0-9a-zA-Z]{33}/;
  return regex.test(address);
}
const onScrollStop = callback => {
  let isScrolling;
  window.addEventListener(
    'scroll',
    e => {
      clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        callback();
      }, 150);
    },
    false
  );
};
function sortByProperty(arr, property) {
  return arr.sort((a, b) => (a[property] > b[property]) ? 1 : -1);
}
