import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createWeb3ReactRoot, Web3ReactProvider } from "@web3-react/core";
import { ThemeContextProvider } from "providers/ThemeContext";
import { Header, Container } from "components";
import Privacy from "pages/Privacy";
import { NetworkContextName } from "constants/misc";
import getLibrary from "utils/getLibrary";

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName);

const App: React.FC = () => (
  <Web3ReactProvider getLibrary={getLibrary}>
    <Web3ProviderNetwork getLibrary={getLibrary}>
      <ThemeContextProvider>
        <Container>
          <Header />
          <Router>
            <Switch>
              <Route path="/" exact>
                <Privacy />
              </Route>
            </Switch>
          </Router>
        </Container>
      </ThemeContextProvider>
    </Web3ProviderNetwork>
  </Web3ReactProvider>
);

export default App;
