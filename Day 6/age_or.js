function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
  }

checkAge(19);
checkAge(17);