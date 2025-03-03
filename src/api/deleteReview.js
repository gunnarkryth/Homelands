export const deleteReview = (id, userData, setDeleteRes) => {
  // Opret options (objekt) med method: DELETE og vores user token som authorization
  const options = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${userData.access_token}`,
    },
  };

  fetch(`https://api.mediehuset.net/homelands/reviews/${id}`, options)
    .then((res) => res.json())
    .then((data) => setDeleteRes(data))
    .catch((err) => console.log("Error: ", err));
};
