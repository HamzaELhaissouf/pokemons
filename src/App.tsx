import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header, Items } from "./components";
import { getIsLoadingSelector } from "./store/selectors";




const App = () => {
    const idLoading = useSelector(getIsLoadingSelector);

  return (
    <>
      <Header />
      <Items />
    </>
  );
};

export default App;
