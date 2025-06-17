function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    const serviceID = "service_ajajgjm";
    const templateId = "template_17cmnce";

    emailjs.send(serviceID, templateId, params)
    .then(res => {
       
        document.getElementById("name").value = "";
        document.getElementById("email").value = ""; 
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message was sent successfully!");
    })
    .catch(err => console.log(err));
}
