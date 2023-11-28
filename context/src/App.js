import logo from './logo.svg';
import './App.css';
import Family from './components/Family';
import FamilyContext from './components/context/FamilyContext';
import { Context, Context2 } from './components/context/Context';
import { useState } from 'react';

function App() {
  const familyDetails = {
    "name": "Family name",
    funcForParent: () => {
        return 'This is a function for parent'
    },
    funcForGrandChildren: () => {
        return 'This is a fucntion for grand children'
    }
  }

  const data = {
    "text": "some text"
  }

  const [state, setState] = useState(0)
  
  return (
    <div className="App">
      <Context.Provider value={familyDetails}>
        <Context2.Provider value={state}>
          <FamilyContext />
        </Context2.Provider>
      </Context.Provider>
    </div>
  );
}

export default App;
