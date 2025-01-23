let ask = (question,yes,no) => confirm(question) ? yes() : no(); //func name diya parameter banaite hoibo
ask("Do you agree?",
    () => alert("You agreed."),                         //judi func e argument dite hoy let use kortam na 
    () => alert("You canceled the execution."));