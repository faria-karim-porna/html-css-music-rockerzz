const login = (event) => {
  event.preventDefault();
  const loggedInUserInfo = {
    email: document.getElementsByName("Email")[0].value,
    password: document.getElementsByName("Password")[0].value,
  };

  fetch("http://localhost:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loggedInUserInfo),
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.status === "ok") {
        console.log("Got the token: ", result.data);
        localStorage.setItem("token", result.data);
      } else {
        alert(result.error);
      }
    });
};
