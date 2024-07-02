
  // Set the date we're counting down to
  const countDownDate = new Date("August 1, 2024 00:00:00").getTime();

  // Update the countdown every 1 second
  const x = setInterval(function() {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the countdown date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the corresponding elements
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;

      // If the countdown is over, display some text
      if (distance < 0) {
          clearInterval(x);
          document.querySelector(".countdown-container").innerHTML = "<h1>Countdown Expired</h1>";
      }
  }, 1000);

