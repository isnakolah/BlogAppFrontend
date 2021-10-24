import { CssBaseline } from "@mui/material";
import { Switch } from "react-router-dom";
import Layout from "./components/Layout";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Layout>
        <Switch></Switch>
      </Layout>
    </>
  );
};

export default App;
