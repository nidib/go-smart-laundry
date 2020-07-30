const holidays = ['07/04', '12/25', '12/31'];
let isHoliday = false;

function getAmericanDate(now) {
  const currMonth = now.getMonth() + 1;
  const currDate = now.getDate();
  const month = ((currMonth) < 10) ? `0${currMonth}` : currMonth;
  const date = (currDate < 10) ? `0${currDate}` : currDate;

  return `${month}/${date}`;
}

function isOpen(now) {
  const currentTime = now.toTimeString().substring(0, 8);

  // Holidays
  if (holidays.includes(getAmericanDate(now))) {
    isHoliday = true;
    return false;
  }

  // Sunday
  if (now.getDay() === 0) {
    return false;
  }

  // Saturday
  if (((now.getDay() === 6)) && (currentTime < '09:00:00' || currentTime > '17:00:00')) {
    return false;
  }

  // Regular weekday
  if (currentTime < '07:30:00' || currentTime > '19:00:00') {
    return false;
  }

  return true;
}

const isOpenElement = document.querySelector('.is-open p');

function up() {
  isOpenElement.classList.remove('false');
  isOpenElement.classList.add('true');
  isOpenElement.innerText = 'Open';
}

function down() {
  isOpenElement.classList.remove('true');
  isOpenElement.classList.add('false');
  isOpenElement.innerText = (isHoliday) ? 'Closed (Holiday)' : 'Closed';
}

function keepChecking() {
  setInterval(() => {
    const now = new Date();
    if (isOpen(now)) {
      up();
    } else {
      down();
    }
  }, 5000);
}

export default keepChecking;
