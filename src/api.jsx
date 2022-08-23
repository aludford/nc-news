export const fetchArticles = () => {
  return fetch(
    "https://northcoders-news-api-app.herokuapp.com/api/articles"
  ).then((res) => {
    return res.json();
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
