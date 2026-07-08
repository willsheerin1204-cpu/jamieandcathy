const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzn9NljLxJzgw5-9ckNOhXgzi-gDYxZf8y1kuTNPsrXvNonzDdNwB6nvwLUx6lfcrGVNQ/exec";

document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("form");

  form.addEventListener("submit", async (e) => {

    e.preventDefault();

    alert("Form submitted! Now contacting Google...");

    try {

      const response = await fetch(SCRIPT_URL,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          firstName:"Test",
          lastName:"User",
          email:"test@test.com",
          sep11:true,
          sep12matinee:false,
          sep12evening:false,
          sep13:false
        })
      });

      const text = await response.text();

      alert(text);

    } catch(err){

      alert(err.toString());

    }

  });

});
