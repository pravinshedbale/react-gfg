import { setName } from './NameSlice';
import { AppState } from './AppState';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Container/Card';
import Navigator from './Navigator';
const ReduxExample = () => {
  const dispatch = useDispatch();
  const value = useSelector((x: AppState) => x.nameSlice.name);
  return (
    <>
      <Navigator />
      <Card>
        <input
          type='text'
          onChange={(e) => {
            dispatch(setName(e.target.value));
          }}
        />
        <label>{value}</label>
      </Card>
    </>
  );
};

export default ReduxExample;
