import "./App.css";
import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCurrency } from "./store/actions/currencyAction";
import Currency from "./components/Currency";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrency());
  }, []);
  return (
    <Fragment>
      <div className="container">
        <h3 className="m-3 d-flex justify-content-center">Currency App</h3>
      </div>
      <Currency />
    </Fragment>
  );
}

export default App;
