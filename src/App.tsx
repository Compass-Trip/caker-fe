import { Outlet } from "react-router";
import MainLayout from "./assets/layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default App;
