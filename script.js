const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzn9NljLxJzgw5-9ckNOhXgzi-gDYxZf8y1kuTNPsrXvNonzDdNwB6nvwLUx6lfcrGVNQ/exec";

document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const firstName = form.querySelector('input[type="text"]').value.trim();
    const lastName = form.querySelectorAll('input[type="text"]')[1].value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();

    const checks = form.querySelectorAll('input[type="checkbox"]');

    const data = {
      firstName,
      lastName,
      email,
      sep11: checks[0].checked,
      sep12matinee: checks[1].checked,
      sep12evening: checks[2].checked,
      sep13: checks[3].checked
    };

    if (
      !firstName ||
      !lastName ||
      !email ||
      (!data.sep11 &&
       !data.sep12matinee &&
       !data.sep12evening &&
       !data.sep13)
    ) {
      alert("Please complete all fields and select at least one performance.");
      return;
    }

    try {

      await fetch(SCRIPT_URL,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      });

      alert("Thank you! We can't wait to celebrate with you.");

      form.reset();

    } catch(err){

      alert("There was a problem submitting your RSVP.");

      console.error(err);

    }

  });

});
