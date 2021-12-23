import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "./routes/Home"
import Menu1 from "./routes/Menu1";

function Router(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/:productCode">
                    <Menu1 />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;