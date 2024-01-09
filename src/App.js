import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SearchContextProvider } from "./context/SearchAPI";
import Sidebar from "./components/Sidebar";
import "./index.css";
const queryClient = new QueryClient();

function App() {
  return (
    <SearchContextProvider>
      <Header />
      <div className="container">
        <Sidebar />
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </div>
    </SearchContextProvider>
  );
}

export default App;
