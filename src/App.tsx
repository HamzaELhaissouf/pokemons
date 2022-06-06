import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemsRequest } from "./store/actions";

import {
  getIsLoadingSelector,
  getItemsSelector,
  getErrorSelector
} from "./store/selectors";


const App = () => {
  const dispatch = useDispatch();
  const idLoading = useSelector(getIsLoadingSelector);
  const items = useSelector(getItemsSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchItemsRequest());
  }, []);

  return (
    <div style={{ padding: "15px" }}>
      {idLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        items.map((item: any, index: number) => (
          <div style={{ marginBottom: "10px" }} key={index}>
            {++index}. {item.name}
          </div>
        ))
      )}
    </div>
  );
};

export default App;
