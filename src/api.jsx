export const fetchArticles = () => {
  return fetch(
    "https://northcoders-news-api-app.herokuapp.com/api/articles"
  ).then((res) => {
    return res.json();
  });
};
