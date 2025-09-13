import Metrics from "../components/Metrics";
import SideBar from "../components/SideBar";
import SalesTrend from "../components/SalesTrend";
import TopSales from "../components/TopSales";
import Inventory from "../components/Inventory";
import Notifications from "../components/Notifications";

function Dashboard() {

  return (
      <section className="">
        <div className="overview grid grid-cols-10 gap-1">
          <SideBar />
          <Metrics />
          <div className="col-span-8 grid grid-cols-12">
            <SalesTrend />
            <TopSales />
            <Inventory />
            <Notifications />
          </div>
          
        </div>
      </section>
  )
}

export default Dashboard
