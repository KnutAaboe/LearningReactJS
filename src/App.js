import './App.css';
import Artist from "./Components/Artist"
import Frame from "./Components/Frame"
import Credit from "./Components/Credit"
import Form from "./Components/Form"
import Input from "./Components/Input"
import InputParent from "./Components/InputParent"
import ClickCounter from './Components/ClickCounter';
import DobClickCounter from './Components/DobClickCounter';
import CarList from './Components/CarList';
import WithCounter from './Components/WithCounter';
import ChangeName from './Components2/ChangeName';
import FetchParent from './Components2/FetchParent';

function App() {
  return (
    <div className="App">
    {/* <Frame />
    <Frame />
    <Frame />
    <Credit /> */}
    {/* <Form /> */}
    {/* <Input /> */}
    {/* <InputParent /> */}
    {/* <ClickCounter name="once"/>
    <DobClickCounter name="Dobbel"/> */}
    {/* <CarList /> */}
    {/* <WithCounter>
    {(count, incCount) => (
        <ClickCounter count={count} incCount={incCount}/>
      )}
    </WithCounter>
    <WithCounter>
    {(count, incCount) => (
        <DobClickCounter count={count} incCount={incCount}/>
      )}
    </WithCounter> */}
    {/* <ChangeName /> */}
    <FetchParent />
    </div>
  );
}

export default App;

{/* <withCounter>
      {(count, incCount) => (
        <ClickCounter count={count} incCount={incCount}/>
      )}
    <withCounter />
    <withCounter>
      {(count, incCount) => (
        <DobClickCounter count={count} incCount={incCount}/>
      )}
    <withCounter /> */}