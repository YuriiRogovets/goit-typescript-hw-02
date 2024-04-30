import { Formik, Form, Field } from "formik";
import css from "./SearchBar.module.css";
import { FC } from "react";

interface SearchBarProps {
  onSetSearchQuery: (query: string) => void;
  onMessage: () => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSetSearchQuery, onMessage }) => {
  return (
    <header>
      <Formik
        initialValues={{
          query: "",
        }}
        onSubmit={(values, { resetForm }) => {
          if (values.query.trim() === "") {
            onMessage();
            return;
          }
          onSetSearchQuery(values.query);
          resetForm();
        }}
      >
        <Form className={css.searchForm}>
          <Field
            className={css.searchField}
            type="text"
            name="query"
            placeholder="Search images and photos"
          />
          <button className={css.searchBtn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
