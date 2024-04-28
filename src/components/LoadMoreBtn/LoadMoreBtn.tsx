import css from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ onClick }) {
  return (
    <div>
      <button className={css.loadMoreBtn} type="click" onClick={onClick}>
        LoadMoreBtn
      </button>
    </div>
  );
}

export default LoadMoreBtn;
