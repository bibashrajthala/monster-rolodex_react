import { ChangeEventHandler } from "react";
import "./search-box.styles.css";

// typing functions : we need to type all the values in it (parameters , variables declared inside it) and the return type=> void means nothing , so void type can be used if it returns nothing
const func: (a: string, b: number, c: boolean) => void = (a, b, c) => {};
const func1: (a: string, b: number, c: boolean) => boolean = (a, b, c) => {
  return true;
};

//  type and interface is similar but interface can be extended(use types of another interface , just like classes in OOP) and composed/overloaded(declaring more than one interfaces with same interface name will get combined to one behind the scene) whereas we can use union of different types using type(just like we union sets in maths)

// so, basically its your preference to use type or interface , but usually interface is used in OOP(class components), and  type is preferred for fuctional programming(functional components)
// so here we will use type

//////////////
// using interface
// // interface extended
// interface ISearchBoxProps extends IChangeHandlerProp {
//   // ISearchBoxProps now, is extended with IChangeHandlerProp, ie it uses all types of IChangeHandlerProp as well.
//   className: string;
//   placeholder?: string; // or, placeholder: string | null;
// }

// interface IChangeHandlerProp {
//   onChangeHandler: (a: string) => void;
// }

// // interface composed/combined (of same name)
// interface ISearchBoxProps {
//   className: string;
//   placeholder?: string; // or, placeholder: string | null;
// }
// interface ISearchBoxProps {
//   onChangeHandler: (a: string) => void;
// }

// // or directly
// interface ISearchBoxProps {
//   className: string;
//   placeholder?: string; // or, placeholder: string | null;
//   onChangeHandler: (a: string) => void;
// }

/////////////////
// using type

// we make an object using type whose properties define types
type ISearchBoxProps = {
  className: string;
  placeholder?: string; // or, placeholder: string | null;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

// union of types
// eg: lets say we have an object address , who have a property that varies according to country ie it will have property state if it is for Usa, region if it is for Italy, province if it is for Canada ie very similar to action types in action(where an component can dispatch action with diff types)
type TCanadianAddress = {
  street: string;
  province: string;
};
type TUsaAddress = {
  street: string;
  state: string;
};
type TItalyAddress = {
  street: string;
  region: string;
};
// unioned type
type TAddress = TCanadianAddress | TUsaAddress | TItalyAddress;

const address: TAddress = {
  street: "abcd",
  region: "hello",
  state: "bib",
  // continent:'sa' // error as it is not in any of unioned types
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
