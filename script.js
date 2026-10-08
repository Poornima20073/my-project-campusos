const complaintForm = document.getElementById("complaintForm");

const resultBox = document.getElementById("result");

const ticketIdElement = document.getElementById("ticketId");

const displayTicket = document.getElementById("displayTicket");


complaintForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const studentName =
        document.getElementById("studentName").value;

    const studentId =
        document.getElementById("studentId").value;

    const location =
        document.getElementById("location").value;

    const complaint =
        document.getElementById("complaint").value;


    if (
        studentName === "" ||
        studentId === "" ||
        location === "" ||
        complaint === ""
    ) {

        alert("Please fill all the fields.");

        return;
    }


    // Generate a temporary ticket ID

    const randomNumber =
        Math.floor(1000 + Math.random() * 9000);

    const ticketID =
        "CAMP-" + randomNumber;


    ticketIdElement.textContent = ticketID;

    displayTicket.textContent = ticketID;


    // Show successful submission

    resultBox.classList.remove("hidden");


    // Scroll to result

    resultBox.scrollIntoView({
        behavior: "smooth"
    });


    /*
       IMPORTANT:

       This is currently frontend-only.

       Later, your backend teammate will replace
       this section with a fetch() request to the
       backend API.
    */


    const complaintData = {

        ticketId: ticketID,

        studentName: studentName,

        studentId: studentId,

        location: location,

        complaint: complaint,

        status: "Received",

        createdAt: new Date().toISOString()

    };


    console.log("Complaint data:", complaintData);


    // Clear form

    complaintForm.reset();

});