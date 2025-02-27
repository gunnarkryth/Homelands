export const updateReview = (
  event,
  userData,
  updateID,
  setUpdateID,
  setUpdateRes
) => {
  // PreventDefault for at undgå refresh når vi "submitter"
  event.preventDefault();

  // Opret body med alle værdier der skal sendes med
  const body = new URLSearchParams();
  body.append("title", event.target.updateTitle.value);
  body.append("content", event.target.updateContent.value);
  body.append("user_id", userData.user_id);
  body.append("active", true);
  body.append("num_stars", 5);
  body.append("id", updateID);

  // Options hvor vi sætter method til PUT og sender body og token med
  const options = {
    method: "PUT",
    body: body,
    headers: {
      Authorization: `Bearer ${userData.access_token}`,
    },
  };

  fetch(`https://api.mediehuset.net/homelands/reviews`, options)
    .then((res) => res.json())
    .then((data) => setUpdateRes(data))
    .then(setUpdateID())
    .catch((err) => console.log(err));
};
