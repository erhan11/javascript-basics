const createPerson = (name, age) => {
  return {
    name: name,
    age: age,
  };
};

const getName = (object) => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = (person) => {
  if (person.age > 65) {
    return true;
  } else {
    return false;
  }
};

const getAges = (people) => {
  return people.map(person => {
    return person.age;
  })
};

const findByName = (name, people) => {
  return people.find(function(person) {
    return person.name === name;
  });
};

const findHondas = (cars) => {
return cars.filter(function(car) {
 return car.manufacturer === "Honda";
});
};

const averageAge = (people) => {
  const agesOfPeople = people.map(function(person) {
    return person.age;
  });
  const sumofAllAges = agesOfPeople.reduce((a, b) => a + b, 0);
  return sumofAllAges / people.length;
};

const createTalkingPerson = (name, age) => {
return {
  name: name,
  age: age,
  introduce: function(greetersName) {
  return  (
  "Hi " + 
  greetersName +
  ", my name is " +
  this.name +
  " and I am " + 
  this.age +
  "!"
  );
},
};
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson,
};
