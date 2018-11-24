
const textContainer = document.querySelector('.paragraphs');

// variant 1 (bad practice)

// text.forEach((name) => {
//   const textEl = document.createElement('p');
//   textEl.textContent = name;
//
//   setTimeout(() => textContainer.appendChild(textEl), 2000);
// });


// variant 2 (ok practice)

const textHTML = text.reduce(
  (acc, text) => {
    const newTextHTML = `${ acc } <p>${ text}</p>`;
    return newTextHTML;
  }, ''
);

textContainer.innerHTML = textHTML;


setTimeout(renderNewText, 5000);

// variant 1 (bad practice)

// function renderNewText() {
//   textFromServer.forEach((name) => {
//     const textEl = document.createElement('p');
//     textEl.textContent = name;
//
//     setTimeout(() => textContainer.appendChild(textEl), 2000);
//   });
//
// }


// variant 2 (ok practice)

// function renderNewText() {
//   const currentText = textContainer.innerHTML;
//
//   const textHTML = textFromServer.reduce(
//     (acc, text) => {
//       const newTextHTML = `${ acc } <p>${ text}</p>`;
//       return newTextHTML;
//     }, ''
//   );
//
//   textContainer.innerHTML = currentText + textHTML;
//
// }

// variant 3 (good practice)

// function renderNewText() {
//   const textHTML = textFromServer.reduce(
//     (acc, text) => {
//       const newTextHTML = `${ acc } <p>${ text}</p>`;
//       return newTextHTML;
//     }, ''
//   );
//
//   textContainer.insertAdjacentHTML('beforeend', textHTML) ;
//
// }

// variant 4 (good practice)

// function renderNewText() {
//
//   const textFragment = document.createDocumentFragment();
//
//   const textHTML = textFromServer.forEach(
//     (text) => {
//       const textEl = document.createElement('p');
//       textEl.innerText = text;
//
//       textFragment.appendChild(textEl);
//     }
//   );
//
//   textContainer.appendChild(textFragment);
//
// }

