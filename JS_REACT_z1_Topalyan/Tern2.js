function manyChecks() {
  let a = Math.floor(Math.random() * 20) + 1;
  let b = 5;
  console.log(`a = ${a}`);

  let res = '';
  
 
  //a > 10 ? 'a is bigger than 10' : 'a is less than or equal to 10 '
  // + (a === 5 ? 'an example of a special case' : ''))
  // + (a === 15 ? 'but a is not 15' : '')
  // + (a > 5 ? 'and a is greater than 5' : 'and a is less than or equal to 5 ')
  // + (a % 2 ? ' and a is odd' : ' and a is even '

  if (a > 10) {
      res += 'a is bigger than 10 ';
  } else {
      res += 'a is less than or equal to 10 ';
      if (a === 5) {
      res += 'an example of a special case ';
      }
  }
  
  if (a === 15) {
      res += 'but a is not 15 ';
  }
  
  if (a > 5) {
      res += 'and a is greater than 5 ';
  } else {
      res += 'and a is less than or equal to 5 ';
  }
  
  if (a % 2) {
      res += 'and a is odd ';
  } else {
      res += 'and a is even ';
  }
  
  console.log(res);

  res = '';

  //a > 10 ? 'a is bigger than 10' : 'a is less than or equal to 10 '
  // + (a === 5 ? 'an example of a special case' : ''))
  // + (a === 15 ? 'but a is not 15' : '')
  // + (a > 5 ? 'and a is greater than 5' : 'and a is less than or equal to 5 ')
  // + (a % 2 ? ' and a is odd' : ' and a is even '

  switch (true) {
  case (a > 10):
      res += 'a is bigger than 10 ';
      break;
  default:
      res += 'a is less than or equal to 10 ';
  }

  switch (true) {
  case (a === 5):
      res += 'an example of a special case ';
      break;
  }

  switch (true) {
  case (a === 15):
      res += 'but a is not 15 ';
      break;
  }

  switch (true) {
  case (a > 5):
      res += 'and a is greater than 5 ';
      break;
  default:
      res += 'and a is less than or equal to 5 ';
  }

  switch (a % 2) {
  case 1:
      res += 'and a is odd ';
      break;
  default:
      res += 'and a is even ';
  }

  console.log(res);
  }

  manyChecks();

  // условие с условным (тернарным) оператором перевести в if...else И switch()
  // результат выводить в консоль, с пощью console.log()