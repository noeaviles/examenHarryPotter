import Home from "./components/Home";
import store from './redux/index';
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Home/>
      </div>
    </Provider>
  );
}

export default App;
