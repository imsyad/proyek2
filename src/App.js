import { Router } from '@reach/router';
import { Grommet, Text } from 'grommet';
import Loadable from 'react-loadable';

const theme = {
  global: {
    focus: {
      outline: {
        color: 'transparent',
      },
    },
    colors: {
      brand: '#0284c2',
      background: {
        light: '#ffffff',
        dark: '#333333',
      },
    },
    font: {
      family:
        '-apple-system,\n         BlinkMacSystemFont, \n         "Segoe UI", \n         Roboto, \n         Oxygen, \n         Ubuntu, \n         Cantarell, \n         "Fira Sans", \n         "Droid Sans",  \n         "Helvetica Neue", \n         Arial, sans-serif,  \n         "Apple Color Emoji", \n         "Segoe UI Emoji", \n         "Segoe UI Symbol"',
    },
  },
};

function RouterComponent({ children }) {
  return <>{children}</>;
}

const NotFound = () => <Text>404. Content Not Found.</Text>;
const Home = Loadable({
  loader: () => import('./page/home'),
  loading(){return <div>loading...</div>}
});

function App() {
  return (
    <Grommet 
      full
      theme={theme}
    >
      <Router primary={false} component={RouterComponent}>
        <NotFound default/>
        <Home path="/" />
      </Router>
    </Grommet>
  );
}

export default App;
