import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // Logged in
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        // Logged out
        dispatch(logout())
      }
    })

    // clean up the add event listener
    return unsubscribe;
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        {!user ? <LoginScreen /> :
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>

            <Route exact path="/profile" >
              <ProfileScreen />
            </Route>

          </Switch>
        }
      </Router>
    </div>
  );
}

export default App;
