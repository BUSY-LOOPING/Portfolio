import { Outlet } from "react-router";
import { Header, Footer } from "~/components";

const Common = () => {
  return (
    <div>
      <Header />
      <main className="mt-5 flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Common;
