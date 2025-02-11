/* function changeParagraph() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function addNumbers() {
    document.getElementById("demo2").innerHTML = 5 + 6;
}
*/


/* document.addEventListener("DOMContentLoaded", function () {

    let demo = document.getElementById("demo");
    let demo2 = document.getElementById("demo2");

    document.querySelector("button").addEventListener("click", changeParagraph);
    demo2.addEventListener("click", addNumbers);
});


function changeParagraph() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function addNumbers() {
    document.getElementById("demo2").innerHTML = 5 + 6;
}

window.onload = function() {
    alert("Page has loaded!");
};

document.addEventListener("DOMContentLoaded", function () {
    let a, b, c;
    a = 5;
    b = 6;
    c = a + b;

    document.getElementById("demo3").innerHTML = 
        "a = " + a + "<br>" +
        "b = " + b + "<br>" +
        "c = " + c;
}); */

fetch('https://www.iremitx.com/MyService.asmx?op=GetAgents', { // Replace with actual API URL
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json' // Specifies JSON format
    },
    body: JSON.stringify({ 
      token: '', //
      branch_id: 1
    }) // Convert JavaScript object to JSON
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse JSON response
  })
  .then(data => {
    console.log('Success:', data); // Handle success response
  })
  .catch(error => {
    console.error('Error:', error);
  });
  