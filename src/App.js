import ReferenceComponent from "./Components/SubComponent/SubComponentContent/ReferenceComponent";
import PortfolioComponent from "./Components/SubComponent/SubComponentContent/PortfolioComponent";
import {Switch, Route, BrowserRouter } from 'react-router-dom';
import AboutMeComponent from "./Components/SubComponent/SubComponentContent/AboutMeComponent";
import ContactComponent from "./Components/SubComponent/SubComponentContent/ContactComponent";
import MainPageComponent from "./Components/Main/MainPageComponent";
// import CreateAccount from "./Components/Website/Authentication/CreateAccount";
import MilkywayTea from "./Components/Website/milkywayTea";
import Resume from "./PortfolioSVG/Resume.pdf"
// import CartProvider from "./store/CartProvider";
// import firebase from "./firebase"
import React from "react";
// import {useAuth} from "./Components/Website/Authentication/useAuth";
// import CartContext from "./store/CartContext";
// import UserContext from "./store/UserContext";


function App() {

  return (
      // <CartContext.Provider value={{items: '', totalAmount: 0}}>

        <div>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route exact path="/" component={MainPageComponent}/>
              <Route exact path="/AboutMeComponent" component={AboutMeComponent}/>
              <Route exact path="/PortfolioComponent" component={PortfolioComponent}/>
              <Route exact path="/ReferenceComponent" component={ReferenceComponent}/>
              <Route exact path="/ContactComponent" component={ContactComponent}/>
              {/*<Route exact path="/CreateAccount" component={CreateAccount}/>*/}
              <Route exact path="/MilkywayTea" component={MilkywayTea}/>
              <Route exact path="/Resume" component={Resume}/>
              {/*<Route exact path="/Profile" component={Profile}/>*/}
            </Switch>
          </BrowserRouter>
        </div>
      // </CartContext.Provider>
  );

}

export default App;
