const createAccount = (event) => {
  event.preventDefault();
  const newUser = {
    name: document.getElementsByName("Name")[0].value,
    email: document.getElementsByName("Email")[0].value,
    password: document.getElementsByName("Password")[0].value,
    phone: document.getElementsByName("Phone")[0].value,
    terms: document.getElementsByName("Terms")[0].checked,
    offers: document.getElementsByName("Offers")[0].checked,
  };

  fetch("http://localhost:5000/createAccount", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  }).then((res) => res.json());
};
