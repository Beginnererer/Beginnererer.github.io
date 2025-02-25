
        
        function fetchData() {
            const id = document.getElementById("idInput").value;
            if (!id) {
                alert("Input the Customer ID");
                return;
            }

            const username = "irxdigital";
            const password = "test123";
            const credentials = btoa(`${username}:${password}`);
            
            const apiUrl = `https://dev.i-cash.app:448/api/inquire/virtual-account?merchantCustomerId=${id}`; // Replace with your API URL

            fetch(apiUrl, {
                method: "GET",
                headers: {
                    "Authorization": `Basic ${credentials}`,
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Invalid Network Response");
                }
                return response.json();
            })
            .then(data => {

                document.getElementById("result").innerText = data.statusMessage;
            })
            .catch(error => {
                document.getElementById("result").innerText = "Error: " + error.message;
            });
        }

function generateQRP2P() {
  // Predefined values
  const merchantCode = "IRXDIGITAL";
  const merchantCustomerId = "MER_CUST001";
  const firstName = "Amiel";
  const lastName = "Ildesa";
  const merchantTransactionId = "TRANSACT0004";

  const username = "irxdigital";
  const password = "test123";
  const credentials = btoa(`${username}:${password}`);

  // User input for transaction amount
  const amount = parseFloat(document.getElementById("amount").value);

  // Validate input
  if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount!");
      return;
  }

  const apiUrl = "https://dev.i-cash.app:448/api/merchant/generate-trans-qr";

  const requestData = {

      merchantCode: merchantCode,
      merchantCustomerId: merchantCustomerId,
      firstName: firstName,
      lastName: lastName,
      merchantTransactionId: merchantTransactionId,
      amount: amount,
  };

  fetch(apiUrl, {
    method: "POST",
    headers: {
        "Authorization": `Basic ${credentials}`,
        "Content-Type": "application/json"
    },
      body: JSON.stringify(requestData)
  })
  .then(response => {
      if (!response.ok) {
          throw new Error("Failed to generate image");
      }
      return response.json(); // Assuming the API returns JSON with image URL
  })
  .then(data => {
    console.log(data.base64Image);
      const imageUrl = data.base64Image; // Adjust based on API response structure
      
      // Show image
      const imgElement = document.getElementById("QRP2PResult");
      imgElement.src = imageUrl;
      imgElement.style.display = "block";
  })
  .catch(error => {
      console.error("Error:", error);
      alert("Error generating image. Please try again.");
  });
}