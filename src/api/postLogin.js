export const postLogin = (event, setUserData) => {
  event.preventDefault();

  // Create body
  const body = new URLSearchParams();
  body.append("username", event.target.username.value);
  body.append("password", event.target.password.value);

  // Create options med header og body
  const options = {
    body: body,
    method: "POST",
  };

  // Send med POST til API
  fetch("https://api.mediehuset.net/token", options)
    .then((res) => res.json())
    .then((data) => setUserData(data))
    .catch((err) => console.log(err));

  console.log("Event data", event.target.username.value);
};
