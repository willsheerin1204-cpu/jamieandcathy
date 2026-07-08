const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzn9NljLxJzgw5-9ckNOhXgzi-gDYxZf8y1kuTNPsrXvNonzDdNwB6nvwLUx6lfcrGVNQ/exec";

document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("form");

  form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        test: true
      })
    });

    console.log(response.status);
    console.log(await response.text());

  });

});
