// Реализуйте класс Singer, который будет наследоваться от класса Worker. Класс
// Worker состоит из: свойства name, свойства surname, метода getFullName(), с
// помощью которого можно вывести одновременно имя и фамилию; Класс Singer
// состоит из свойств years, birth, style и метода getMoreInfo(), который выводит
// информацию о певце: name, surname, years, birth, style. Необходимо вызвать
// методы getFullName , getMoreInfo через класс Singer

class Worker {
  name;
  surname;
  getFullName() {
    return `Имя ${this.name} Фамилия ${this.surname}`;
  }

  getName = () => this.name;
  getSurname = () => this.surname;

  setName = (name) => (this.name = name);
  setSurname = (surname) => (this.surname = surname);
}

class Singer extends Worker {
  years;
  birth;
  style;
  getMoreInfo() {
    return `Возраст ${this.years} Год рождения ${this.birth} Стиль ${this.style}`;
  }

  getYears = () => this.years;
  getBirth = () => this.birth;
  getStyle = () => this.style;

  setYears = (years) => (this.years = years);
  setBirth = (birth) => (this.birth = birth);
  setStyle = (style) => (this.style = style);
}

const singer = new Singer();
singer.setName("Kate");
singer.setSurname("Zh");
singer.setYears(27);
singer.setBirth("1995");
singer.setStyle("alternative");
const getFullName = singer.getFullName();
const getMoreInfo = singer.getMoreInfo();

console.log(getFullName, getMoreInfo);
