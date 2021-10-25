import { CssBaseline } from "@mui/material";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import routes from "./constants/routes";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Switch>
        <Layout>
          <Route exact path={routes.home} component={Home} />
        </Layout>
      </Switch>
    </>
  );
};

export default App;
