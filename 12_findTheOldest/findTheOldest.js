const findTheOldest = function(people) {
    let oldestPerson = people[0];

    for (let i = 0; i < people.length; i++) {
      const person = people[i];
      const currentYear = new Date().getFullYear();
      const age = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : currentYear - person.yearOfBirth;
  
      if (age > (oldestPerson.yearOfDeath ? oldestPerson.yearOfDeath - oldestPerson.yearOfBirth : currentYear - oldestPerson.yearOfBirth)) {
        oldestPerson = person;
      }
    }
  
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
