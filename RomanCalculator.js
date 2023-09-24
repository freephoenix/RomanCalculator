//https://jm-program.github.io/frontend-calculator.html
function calculator(string) {
  const
    romanUnits = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
    romanTens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C'];
  let a, operator, b, isArabic = true, result;
  if(/^(?:VIII|III|VII|II|VI|IV|IX|X|V|I)\s*[+\-\*\/]\s*(?:VIII|III|VII|II|VI|IV|IX|X|V|I)$/.test(string)) {
    isArabic = false;
    [a, operator, b] = string.split(/\b/);
    a = romanUnits.indexOf(a);
    b = romanUnits.indexOf(b);
  } else if(/^(?:[1-9]|10)\s*[+\-\*\/]\s*(?:[1-9]|10)$/.test(string)) {
    [a, operator, b] = string.split(/\b/);
    a = Number(a);
    b = Number(b);
  } else throw Error('Wrong input');
  operator = operator.trim();
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      result = Math.floor(a / b);
      break;
  }
  if(isArabic) return String(result);
  result = ((result >= 0) ? result : 0);
  return romanTens[Math.floor(result/10)]+romanUnits[result%10];
}