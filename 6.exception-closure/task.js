function parseCount(value) {
  let result = Number.parseInt(value);

  if (isNaN(result)) {
    throw new Error('Невалидное значение');
  }

  return result;
}

function validateCount(value) {
  try {
    let result = parseCount(value);
    return result;
  } catch(error) {
      return error;
  }
}

// Задача 2
class Triangle {
  constructor(a, b, c) {
    if (a + b < c || a + c < b || b + c < a) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    let halfMeter = this.getPerimeter() / 2;
    return Number(Math.sqrt(halfMeter * (halfMeter - this.a) * (halfMeter - this.b) * (halfMeter - this.c)).toFixed(3));
  }
}

function getTriangle(lenA, lenB, lenC) {
  try {
    return new Triangle(lenA, lenB, lenC);
  } catch (error) {
      return new Object ({
        getPerimeter() {
          return 'Ошибка! Треугольник не существует';
        },
        getArea() {
          return 'Ошибка! Треугольник не существует';
        }
      });
    }
}