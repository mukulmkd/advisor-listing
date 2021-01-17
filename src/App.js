import AdvisorList from './components/AdvisorList';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <AdvisorList />
      </Provider>
    </>
  );
};

export default App;
