import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
  return (
    <div className={css.loadMoreBtnWrapp}>
      <button className={css.loadMoreBtn} type="button" onClick={onClick}>
        LoadMoreBtn
      </button>
    </div>
  );
}

export default LoadMoreBtn;
