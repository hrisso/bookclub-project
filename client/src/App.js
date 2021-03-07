import './App.css';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainContainer from './containers/MainContainer/MainContainer';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <h1>LET'S GO</h1>
          <Route path='/'>
            <MainContainer />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
