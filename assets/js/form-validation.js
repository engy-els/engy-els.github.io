document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    
    if (name.length < 3) {
        alert("Name must be at least 3 characters long.");
        return;
    }
    
    if (!email.includes("@")) {
        alert("Enter a valid email address.");
        return;
    }

    window.location.href = "confirmation.html";
});
