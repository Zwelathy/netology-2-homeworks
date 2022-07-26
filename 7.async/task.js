class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if (typeof id === 'undefined') {
      throw new Error('Будильник не назван');
    } else if (typeof this.alarmCollection.find(key => key.id === id) !== 'undefined') {
        return console.error('Будильник существует');
    }

    return this.alarmCollection.push( { time, callback, id} );
  }

  removeClock (id) {
    const lengthBeforeFilter = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter(key => key.id !== id);
    const lengthAfterFilter = this.alarmCollection.length;

    return lengthBeforeFilter > lengthAfterFilter;
  }
  
  getCurrentFormattedTime () {
    const timeNow = new Date();

    const mutateTime = (arg) => {
      if (arg < 10) {
        return `0${arg}`;
    }

    return arg;
  }

    return `${mutateTime(timeNow.getHours())}:${mutateTime(timeNow.getMinutes())}`;
  }

  start () {
    const checkClock = (arg) => {
      const alarm = this.getCurrentFormattedTime();
        if (arg.time === alarm) {
          return arg.callback();
        }
    }

    if (this.timerId === null) {
        this.timerId = setInterval(() => {
            this.alarmCollection.forEach(key => checkClock(key));
        }, 666);
    }

    return;
  }

  stop () {
    if (this.timerId !== null) {
      clearInterval(this.timerId);

      return this.timerId = null;
    }
  }

  printAlarms () {
    return this.alarmCollection.forEach(key => console.log(`${key.id}: ${key.time}`));
  }

  clearAlarms () {
    this.stop();

    return this.alarmCollection = [];
  }
}

function testCase() {
  const newCase = new AlarmClock();

  newCase.addClock('02:51', () => console.log('Спать хочу!'), 1);
  newCase.addClock('02:52', () => console.log ('Да, хочу!'), 2);
  newCase.removeClock(2);
  newCase.addClock('02:53', () => console.log ('Но нельзя'), 3);
  newCase.addClock('02:54', () => console.log ('Ту-ру-ру'));
  newCase.start();
  newCase.stop();
  newCase.addClock('02:55', () => console.log ('Или можно?'), 4);
  newCase.addClock('02:56', () => console.log ('Или можно?'), 4);
  newCase.printAlarms();
}