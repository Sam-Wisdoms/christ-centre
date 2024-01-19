let requestFormEl = document.querySelector(".request-form");
let nameEl = document.getElementById("name")
let emailEl = document.getElementById("email")
let countryEl = document.getElementById("country")
let contactEl = document.getElementById("contact")
let textEl = document.getElementById("text")


function prayerRequest(e){
    e.preventDefault()

    let nameElInput = nameEl.value;
    let emailElInput = emailEl.value;
    let countryElInput = countryEl.value;
    let contactElInput = contactEl.value;
    let textElInput = textEl.value;

// From SMTP
Email.send({
    Host : "smtp.elasticemail.com",
    Username : "samwisdoms.a@gmail.com",
    Password : "1977076D3A7C6850AAC5A9FFD4BEC1DEA765",
    To : 'samwisdomsamenyenu@gmail.com',
    From : "samwisdoms.a@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);


    // https://www.youtube.com/watch?v=8JBl2Ug7P_E 

    
    console.log(nameElInput)
    
    console.log(emailElInput)
    
    console.log(countryElInput);
  
    console.log(contactElInput);
   
    console.log(textElInput)
}

requestFormEl.addEventListener("submit" , prayerRequest)
