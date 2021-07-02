import { useReducer, useCallback } from "react";

const httpReducer = (state, action) => {
  if (action.type === "SUCCESS") {
    return {
      data: action.responseData,
      error: null,
      status: "completed",
    };
  }
  if (action.type === "SEND") {
    return {
      data: null,
      error: null,
      status: "pending",
    };
  }
  if (action.type === "ERROR") {
    return {
      data: null,
      status: "completed",
      error: action.errorMessage,
    };
  }
  return state;
};

const useHttp = (requestFunction, startWithPending = false) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? "pending" : null,
    data: null,
    error: null,
  });
  const sendRequest = useCallback(
    async function (requestData) {
      dispatch({ type: "SEND" });
      try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: "SUCCESS", responseData });
      } catch (err) {
        throw new Error(err.message || "Something was wrong!");
      }
    },
    [requestFunction]
  );
  return {
    sendRequest,
    ...httpState,
  };
};
export default useHttp;
