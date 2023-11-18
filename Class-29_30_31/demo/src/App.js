import MyComponent from "./components/MyComponent";
import MyComponent2 from "./components/MyComponent2"; // default export
import { sayHi, sayBye } from "./components/MyComponent"; // named export
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
import Products from "./components/Products";
import Form from "./components/Form";
import MultipleInputForm from "./components/MultipleInputForm";

function App(props) {
  sayBye(20)
  return (
    <div className="App">
      {/* <MyComponent />
      <MyComponent />
      <MyComponent />
      <MyComponent />
      <MyComponent2 /> */}
      {/* <UserProfile name='Sanchit' age={26} company='Atlassian'/> */}
      {/* <UserProfile name='Muqeeth' age={26} company='Atlassian'/>
      <UserProfile name='Partiban' age={26} company='Atlassian'/>
      <UserProfile name='Ritik' age={26} company='Atlassian'/> */}
      <Counter />
      {/* <Products /> */}
      {/* <Form /> */}
      {/* <MultipleInputForm /> */}
    </div>
  );
}

export default App;
