import CountdownTimer from './timer.js';

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Sep 30, 2022'),
});
