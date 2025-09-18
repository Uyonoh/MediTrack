import Metrics from "../components/Metrics";
import SalesTrend from "../components/SalesTrend";
import TopSales from "../components/TopSales";
import Inventory from "../components/Inventory";
import Notifications from "../components/Notifications";

function Dashboard() {

  return (
      <section className="">
          <Metrics />
          <div className="grid grid-cols-12">
            <SalesTrend />
            <TopSales />
            <Inventory />
            <Notifications />
          </div>
          
        
      </section>
  )
}

export default Dashboard
