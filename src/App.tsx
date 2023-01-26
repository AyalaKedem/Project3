import { Routes } from "react-router";
import { Route } from "react-router-dom";
import "./App.css";
import MainNav from "./components/nav/MainNav";
import About from "./routes/about/About";
import Menu from "./routes/menu/Menu";
import MenuItem from "./components/menu-item/MenuItem";
import Footer from "./components/footer/Footer";
import BranchSearch from "./components/branch-search/BranchSearch";
import GiftCard from "./components/gift-card/GiftCard";
import EditCard from "./components/edit-card/EditCard";
import OrderSummary from "./routes/order-summary/OrderSummary";
import { Badge } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <MainNav />
      <Badge />
      <GiftCard />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/branches" element={<BranchSearch />} />
        <Route path="/menu/:endpoint" element={<MenuItem />} />
        <Route path="/giftcard/:id" element={<EditCard />} />
        <Route path="/order_summary" element={<OrderSummary />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
