async function generateQR() {
  const text = document.getElementById("text").value;

  const response = await fetch("/qr/qr-generator", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  });

  const data = await response.json();

  document.getElementById("qrImage").src = data.qr;
}
