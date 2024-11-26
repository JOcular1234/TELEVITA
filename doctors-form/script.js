
document.getElementById('application').addEventListener('submit', function(event){
    event.preventDefault();
    let docApplication = document.getElementById('fname').value;
let ThankYouMessage = `Thank you,  ${docApplication}  Thank you for your Application, We will review and send you feedback.
 `
 window.location.href = 'thankyou.html';
 alert(ThankYouMessage)
    
});
