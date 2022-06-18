import UseCallback from './UseCallback';
import UserContextExample from './UseContext';
import { ArrayDepMount, BasicEffect, EffectCleanup } from './UseEffect';
import UseLayoutEffect from './UseLayoutEffect';
import UseMemo from './UseMemo';
import UserReducerBar from './UserReducer';
import UseState from './UseState';

function App() {
  return (
    <div className='App'>
      <UseState />
      <hr />
      <BasicEffect />
      <hr />
      <EffectCleanup />
      <hr />
      <ArrayDepMount />
      <hr />
      <UserContextExample />
      <hr />
      <UseLayoutEffect />
      <hr />
      <UserReducerBar />
      <hr />
      <UseCallback />
      <hr />
      <UseMemo />
    </div>
  );
}

export default App;
