document.querySelector("#regForm").addEventListener("submit", chekcforblank);

async function chekcforblank(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var mobile = document.getElementById("mobile").value;

  const result = await fetch("/api/register", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      username,
      email,
      password,
      mobile,
    }),
  }).then((res) => res.json());

  if (result.status == "error") {
    alert(result.error);
  }
}