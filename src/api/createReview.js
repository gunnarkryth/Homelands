export const createReview = (event, userData, setUpdateRes) => {
  event.preventDefault();

  // Opret body med alle værdier der skal sendes med
  const body = new URLSearchParams();
  body.append("title", event.target.title.value);
  body.append("content", event.target.content.value);
  body.append("user_id", userData.user_id);
  body.append("active", true);
  body.append("num_stars", event.target.num_stars.value);

  // Options hvor vi sætter method til PUT og sender body og token med
  const options = {
    method: "POST",
    body: body,
    headers: {
      Authorization: `Bearer ${userData.access_token}`,
    },
  };

  fetch("https://api.mediehuset.net/homelands/reviews", options)
    .then((res) => res.json())
    .then((data) => setUpdateRes(data))
    .catch((err) => console.log("Error: ", err));
};
