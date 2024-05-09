import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Layout from './Layout/Layout';
import Admin from './Admin/Admin';
import User from './User/User';
import NoPage from './NoPage/NoPage';
import LogIn from './LogIn/LogIn';
import SignUp from './SignUp/SignUp';
import Home from './Home/Home';
import PollingForm from './PollingForm/PollingForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/user' element={<User />} />
          <Route path='/createPoll' element={<PollingForm />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
