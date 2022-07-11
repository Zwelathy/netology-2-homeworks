function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let pasha = new Student('Pasha', 'female', 5);
let sveta = new Student('Sveta', 'diplodok', 14);
let uasya = new Student('UasyaChotkey', 'muzhik', 39);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...mark) {
  if (this.marks === undefined) {
    this.marks = mark;
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.getAverage = function () {
  let result = this.marks.reduce((a, b) => a + b, 0) / this.marks.length;

  return result;
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;

  this.excluded = reason;
}
