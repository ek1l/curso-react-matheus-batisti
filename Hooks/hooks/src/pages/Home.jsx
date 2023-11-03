import HookUseEffect from '../components/HookUseEffect';
import HookUseReducer from '../components/HookUseReducer';
import HookUseState from '../components/HookUseState';
import useFetch from '../hooks/useFetch';
import { useContext } from 'react';
import { SomeContext } from '../components/HookUseContext';
import HookUseRef from '../components/HookUseRef';
import HookUseCallback from '../components/HookUseCallback';
import HookUseMemo from '../components/HookUseMemo';
import HookUseLayoutEffect from '../components/HookUseLayoutEffect';
import HookUseImperativeHandle from '../components/HookUseImperativeHandle';
const Home = () => {
  const { data, error, isLoading } = useFetch(
    'https://api.chucknorris.io/jokes/random',
  );
  const { contextValue } = useContext(SomeContext);
  return (
    <div>
      <h1>home</h1>
      <HookUseState />
      <HookUseReducer />
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && <p>{data.value}</p>}
      <hr />
      <HookUseEffect />
      <h2>UseContext</h2>
      <p>Valor do context: {contextValue}</p>
      <hr />
      <HookUseRef />
      <HookUseCallback />
      <HookUseMemo />
      <HookUseLayoutEffect />
      <HookUseImperativeHandle />
    </div>
  );
};

export default Home;
