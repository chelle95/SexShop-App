import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import Productos from "./Pages/Productos";
import DrawerPropio from "./components/Drawer/DrawerPropio";
import Principal from "./Pages/Principal";
import ParaEllas from "./Pages/ParaEllas";
import Compras from "./Pages/Compras";
import { CssBaseline } from "@material-ui/core";

function App() {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div className="App">
      <CssBaseline />
      <Navbar
        showDrawer={showDrawer}
        setShowDrawer={() => {
          setShowDrawer(true);
        }}
      />
      <DrawerPropio showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
      <Route exact path="/" component={Principal} />
      <Route exact path="/Productos" component={Productos} />
      <Route exact path="/paraEllas" component={ParaEllas} />
      <Route exact path="/Compras" component={Compras} />
    </div>
  );
}

export default App;
