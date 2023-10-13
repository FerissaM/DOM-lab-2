
// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
  

// Task 1
const mainEl = document.querySelector('main');

mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = '<h1>SEI Rocks!</h1>'

mainEl.classList.add = 'flex-ctr';


// Task 2
const topMenuEl = document.getElementById('top-menu');

topMenuEl.style.height = '100%';

topMenuEl.style.backgroundColor = '--top-menu-bg';

topMenuEl.classList.add = 'flex-around';


menuLinks.forEach(function (link) {
   const linkEl = document.createElement('a');
  linkEl.setAttribute('href', link.href);
  linkEl.textContent = link.text;
  topMenuEl.appendChild(linkEl);
});

