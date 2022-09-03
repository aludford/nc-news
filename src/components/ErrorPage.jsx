const ErrorPage = (props) => {
  return (
    <div>
      {Object.keys(props).length > 0 ? (
        <p>
          {props.errorRes.status} <strong>{props.errorRes.data.msg}</strong>
        </p>
      ) : null}
      {Object.keys(props).length === 0 ? (
        <p>
          404 <strong>Not Found</strong>
        </p>
      ) : null}
    </div>
  );
};

export default ErrorPage;
