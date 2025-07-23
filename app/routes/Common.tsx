import { Outlet } from "react-router";
import {Header, Footer} from "~/components";

const Common = () => {
  return (
    <div>
        <Header/>


        {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer/>
    </div>
  )
}

export default Common