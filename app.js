const generateBtn = document.getElementById('btn-generate');
const passwordEl = document.getElementById('password');
const password2El = document.getElementById('password2');
const characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
];

console.log(generateBtn);

function generatePassword() {
  let password = '';

  for (let i = 1; i <= 15; i++) {
    let randomNumber = Math.floor(Math.random() * characters.length);
    password += characters[randomNumber];
  }

  return password;
}

generateBtn.addEventListener('click', () => {
  const password = generatePassword();
  const password2 = generatePassword();

  passwordEl.innerText = password;
  password2El.innerText = password2;
});

// Copy link to clipboard

passwordEl.addEventListener('click', () => {
  navigator.clipboard.writeText(passwordEl.textContent).catch((err) => {
    console.error('Failed to copy text: ', err);
  });
});
password2El.addEventListener('click', () => {
  navigator.clipboard.writeText(password2El.textContent).catch((err) => {
    console.error('Failed to copy text: ', err);
  });
});
