import { ChangeEvent, ChangeEventHandler } from "react";
import "./search-box.styles.css";

type ISearchBoxProps = {
  className: string;
  placeholder?: string; // or, placeholder: string | null;
  // onChangeHandler: ChangeEventHandler<HTMLInputElement>; // of type change event handler for/on input element here(as we can use onChange on diff elements such as input,textArea ,etc), but it by default assumes it returns void, but if we want to return something in this change handler user , manual function dfenition using event type as:
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void; // now by changing void, we can return any type from this function
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: ISearchBoxProps) => (
  <input
    type="search"
    className={`search-box ${className}`}
    placeholder={placeholder}
    onChange={onChangeHandler}
    // onChange={(e)=>onChangeHandler(e)} // to see type of e and onChangeHandler, defaultly provided/defined by React, hover on the e of parameters and on onChange respectively
  />
);

export default SearchBox;
