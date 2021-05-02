const CountdownInitiator = {
  init({ countdownContainer, date }) {
    this._setCountdown(countdownContainer, date);
  },

  _setCountdown(countdown, countDownDate) {
    let runCountdown = setInterval(function () {
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result
      countdown.innerHTML = `
      <countdown-comp 
        days="${days}" 
        hours="${hours}" 
        minutes="${minutes}" 
        seconds="${seconds}"
      ></countdown-comp>`;

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(runCountdown);
        countdown.innerHTML = `
        <countdown-comp 
          days="00" 
          hours="00" 
          minutes="00" 
          seconds="00"
        ></countdown-comp>
        `;
      }
    }, 1000);

    return runCountdown;
  },
};

export default CountdownInitiator;
