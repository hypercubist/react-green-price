import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "./routes/Home"
import Item from "./routes/Item";
import ItemMenu from "./routes/ItemMenu";


function Router(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/:categoryCode/:itemCode/:kindCode">
                    <Item />
                </Route>
                <Route path="/:categoryCode">
                    <ItemMenu />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;