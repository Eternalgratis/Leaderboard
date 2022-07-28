const API = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const ID = '7qOXTBCXBCcg62zNDbTd';
const addScoreUrl = `${API + ID}/scores/`;

const fetchData = async () => {
  await fetch(API, {
    method: 'POST',
    body: JSON.stringify({
      name: 'My cool new game',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((json) => (json));
};

fetchData();

const adding = (page) => {
  let addScore = '';
  page.forEach((call) => {
    addScore += `<li>${call.user}: ${call.score}</li>`;
  });
  document.querySelector('.list').innerHTML = addScore;
};

const fetchScores = async () => {
  await fetch(addScoreUrl)
    .then((response) => response.json())
    .then((json) => adding(json.result));
};

//   fetchScores()

const addToScore = async (user, score) => {
  await fetch(addScoreUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      user, score,
    }),
  }).then((response) => response.json()).then((json) => {
    fetchScores(json);
  }).catch((error) => (error));
};
export { fetchScores, addToScore };
