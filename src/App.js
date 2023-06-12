import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SearchContextProvider } from "./context/SearchAPI";

const queryClient = new QueryClient();

function App() {
  return (
    <SearchContextProvider>
      <Header />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </SearchContextProvider>
  );
}

export default App;
