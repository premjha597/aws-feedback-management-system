const API_URL = "https://kjpjmfp70b.execute-api.us-east-1.amazonaws.com/feedback";

const form = document.getElementById("feedbackForm");
const button = document.getElementById("submitBtn");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    message.innerHTML = "";
    message.className = "";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const feedback = document.getElementById("feedback").value.trim();

    if(name==="" || email==="" || feedback===""){
        message.innerHTML="Please fill all fields.";
        message.className="error";
        return;
    }

    button.disabled = true;
    button.innerHTML = "Submitting...";

    try{

        const response = await fetch(API_URL,{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({
                name:name,
                email:email,
                feedback:feedback
            })

        });

        const data = await response.json();

        if(response.ok){

            message.innerHTML="✅ Feedback submitted successfully!";
            message.className="success";

            form.reset();

        }else{

            message.innerHTML="❌ "+JSON.stringify(data);
            message.className="error";

        }

    }catch(error){

        console.error(error);

        message.innerHTML="❌ Unable to connect to API.";
        message.className="error";

    }

    button.disabled=false;
    button.innerHTML="Submit Feedback";

});