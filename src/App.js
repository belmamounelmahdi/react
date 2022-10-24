import ProfilePhoto from './Component/ProfilePhoto';
import FullName from './Component/FullName';
import Address from './Component/Address';
import './Css/app.css';

function App() {
  return (
    <div className='content'>
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
