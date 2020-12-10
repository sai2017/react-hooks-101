import React, {useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers';
import EventForm from '../components/EventForm';
import Events from '../components/Events';
import AppContext from '../contexts/AppContext';

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className='container-fluid'>
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  );
}

export default App;
