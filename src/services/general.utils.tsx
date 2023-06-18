import { v4 as uuidv4 } from 'uuid';

const setElementOpacity = (identifier: string, opacity: number) => {
  const element = document.querySelector(identifier) as HTMLElement;
  element.style.opacity = `${opacity}`;
}

const generateRandomNumber = (n: number) => ((Math.ceil(Math.random() * 10)) % n);

const generateRandomUUID = () => uuidv4();

function smoothScrollTo(height: any, duration: any) {
  const startPosition = window.pageYOffset;
  const targetPosition = height + startPosition;
  const distance = targetPosition - startPosition;
  let startTime: any = null;

  function animation(currentTime: any) {
    if (!startTime) startTime = currentTime;
    const elapsedTime = currentTime - startTime;
    const progress = elapsedTime / duration;

    window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));

    if (elapsedTime < duration) {
      requestAnimationFrame(animation);
    } else {
      window.scrollTo(0, targetPosition);
    }
  }

  function easeInOutQuad(t: any) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }

  requestAnimationFrame(animation);
}

function formatDate(date: Date): string {
  var year: any = date.getFullYear();
  var month: any = date.getMonth() + 1; // getMonth() is zero-based
  var day: any = date.getDate();
  year = year.toString().substr(-2); // Get last two digits of year

  month = month < 10 ? '0' + month : month; // Add leading zero if necessary
  day = day < 10 ? '0' + day : day; // Add leading zero if necessary

  return year + '/' + month + '/' + day;
}


var date = new Date();
console.log(formatDate(date));


const restaurantsListElement = document.querySelector(".restaurants-page");
if (restaurantsListElement) {
  smoothScrollTo(restaurantsListElement, 1000); // Adjust the duration (1000ms) to your desired scroll speed
}


export { setElementOpacity, generateRandomUUID, generateRandomNumber, smoothScrollTo, formatDate }