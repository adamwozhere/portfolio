import logo from '../assets/logo-ascii.txt?raw';

document.addEventListener('DOMContentLoaded', () => {
  // apply monospace css to ensure ascii art is legible
  console.log(`%c${logo}`, `font-family: monospace`);
  console.log('Thanks for taking a look at my website!');
  console.log(
    "It's created with AstroJS and you can find the source code here:",
  );
  console.log('https://github.com/adamwozhere/portfolio');
  console.log('');
});
