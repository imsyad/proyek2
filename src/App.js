import { Router } from "@reach/router";
import { Grommet, Text } from "grommet";
import Loadable from "react-loadable";
import "./assets/fonts/fonts.css";

const theme = {
  global: {
    focus: {
      outline: {
        color: "transparent"
      }
    },
    colors: {
      brand: "#0284c2",
      background: {
        light: "#ffffff",
        dark: "#333333"
      }
    },
    font: {
      family:
        'OpenSans, \n         -apple-system,\n         BlinkMacSystemFont, \n         "Segoe UI", \n         Roboto, \n         Oxygen, \n         Ubuntu, \n         Cantarell, \n         "Fira Sans", \n         "Droid Sans",  \n         "Helvetica Neue", \n         Arial, sans-serif,  \n         "Apple Color Emoji", \n         "Segoe UI Emoji", \n         "Segoe UI Symbol"'
    }
  }
};

function RouterComponent({ children }) {
  return <>{children}</>;
}

const Loading = () => <div>loading...</div>;
const NotFound = () => <Text>404. Content Not Found.</Text>;
const Home = Loadable({
  loader: () => import("./page/home"),
  loading: () => Loading
});
const About = Loadable({
  loader: () => import("./page/about"),
  loading: () => Loading
});
const Application = Loadable({
  loader: () => import("./page/application"),
  loading: () => Loading
});
const Result = Loadable({
  loader: () => import("./page/result"),
  loading: () => Loading
});

function App() {
  return (
    <Grommet full theme={theme}>
      <Router primary={false} component={RouterComponent}>
        <NotFound default />
        <Home path="/" />
        <About path="/tentang-kami" />
        <Application path="/aplikasi" />
        <Result path="/hasil" render={(props) => <Result {...props} />} />
      </Router>
    </Grommet>
  );
}

export default App;
