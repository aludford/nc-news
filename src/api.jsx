import axios from "axios";

// export const fetchArticles = () => {
//   return fetch(
//     "https://northcoders-news-api-app.herokuapp.com/api/articles"
//   ).then((res) => {
//     return res.json();
//   });
// };

export const fetchArticles = (sort_by, order) => {
  return axios
    .get("https://northcoders-news-api-app.herokuapp.com/api/articles", {
      params: { sort_by, order },
    })
    .then((res) => {
      return res.data;
    });
};

export const fetchArticlesByTopic = (topic) => {
  return fetch(
    `https://northcoders-news-api-app.herokuapp.com/api/articles?topic=${topic}`
  ).then((res) => {
    return res.json();
  });
};

export const fetchSingleArticle = (article_id) => {
  return fetch(
    `https://northcoders-news-api-app.herokuapp.com/api/articles/${article_id}`
  ).then((res) => {
    return res.json();
  });
};

export const fetchTopics = () => {
  return fetch(
    "https://northcoders-news-api-app.herokuapp.com/api/topics"
  ).then((res) => {
    return res.json();
  });
};

export const patchArticleVotesUp = (article_id) => {
  return axios.patch(
    `https://northcoders-news-api-app.herokuapp.com/api/articles/${article_id}`,
    { inc_votes: 1 }
  );
};

export const patchArticleVotesDown = (article_id) => {
  return axios.patch(
    `https://northcoders-news-api-app.herokuapp.com/api/articles/${article_id}`,
    { inc_votes: -1 }
  );
};

export const fetchComments = (article_id) => {
  return fetch(
    `https://northcoders-news-api-app.herokuapp.com/api/articles/${article_id}/comments`
  ).then((res) => {
    return res.json();
  });
};

export const postCommentAPI = (article_id, username, comment) => {
  return axios.post(
    `https://northcoders-news-api-app.herokuapp.com/api/articles/${article_id}/comments`,
    { username: username, body: comment }
  );
};
