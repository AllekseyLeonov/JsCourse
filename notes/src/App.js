import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";

import rootReducer from "./redux/reducer";
import ApplicationRouter from "./routing";

const store = createStore(rootReducer);
const queryClient = new QueryClient();

const App = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <ApplicationRouter />
    </QueryClientProvider>
  </Provider>
);

export default App;
