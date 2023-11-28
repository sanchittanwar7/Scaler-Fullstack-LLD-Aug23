import logo from './logo.svg';
import './App.css';
import Family from './components/Family';
import FamilyContext from './components/context/FamilyContext';
import { Context, Context2 } from './components/context/Context';
import { useState } from 'react';
import Reference from './components/Reference';
import Form from './components/Form';
import Memo1 from './components/Memo1';

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
      {/* <Context.Provider value={familyDetails}>
        <Context2.Provider value={state}>
          <FamilyContext />
        </Context2.Provider>
      </Context.Provider> */}
      {/* <Reference /> */}
      {/* <Form /> */}
      <Memo1 />
    </div>
  );
}

export default App;
