import css from "../ErrorMessage/ErrorMessage.module.css";
function ErrorMessage() {
  return (
    <p className={css.errorText}>
      Whoops, something went wrong! Please try reloading this page!
    </p>
  );
}

export default ErrorMessage;
