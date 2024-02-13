import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Account from "./pages/Account";
import Investments from "./pages/Investments";
import CreditCards from "./pages/CreditCards";
import Loans from "./pages/Loans";
import Services from "./pages/Services";
import Settings from "./pages/Settings";
import { ContextProvider } from "./context/DashContext";

const Root = () => {
  return (
    <>
      <ContextProvider>
        <main className=" h-screen flex flex-1  overflow-hidden">
          <SideBar />
          <div className="flex flex-col flex-1">
            <Header />
            <div className="flex-1 px-[25px] xl:px-10 py-5 bg-cultred-blue overflow-y-auto custom-scrollbar">
              <Outlet />
            </div>
          </div>
        </main>
      </ContextProvider>
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/account" element={<Account />} />
      <Route path="/investments" element={<Investments />} />
      <Route path="/credit-cards" element={<CreditCards />} />
      <Route path="/Loans" element={<Loans />} />
      <Route path="/services" element={<Services />} />
      <Route path="/settings" element={<Settings />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
