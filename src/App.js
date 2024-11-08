import { useId, useState } from 'react';
import BasicEffect from './useEffect/BasicEffect';
import EffectWithDeps from './useEffect/EffectWithDeps';
import RunOnce from './useEffect/RunOnce';
import UserDetail from './useEffect/UserDetail';
import UserPosts from './useEffect/UserPosts';
import Counter from './useState/Counter';
import FormExample from './useState/FormExample';
import ItemList from './useState/Itemlist';
import ToggleText from './useState/ToggleText';
import UserProfile from './useState/UserProfile';
import { ThemeContext } from './useContext/ThemedComponent';
import ThemedComponent from './useContext/ThemedComponent';
import Counter1 from './useState/Counter1';
import CounterWithPreviousState from './useState/CounterWithPreviousState';
import HomePage from './useContext/HomePage';
import Navbar from './useContext/Navbar';
import AuthProvider from './useContext/AuthContext';
import { AuthContext } from './useContext/AuthContext';
import LanguageProvider from './useContext/LanguageContext';
import Greeting from './useContext/Greeting';
import ThemeProvider from './useContext/ThemeContext';
import ThemedButton from './useContext/ThemedButton';

function App() {
  // const [UserId, setUserId] = useState(1);

  // const [isAuthenticated, setIsAuthenticated] = (false);
  return (
    <div>
      {/* <Counter /> */}
      {/* <ToggleText/> */}
      {/* <FormExample/> */}
      {/* <UserProfile/> */}
      {/* <ItemList/> */}
      {/* <BasicEffect/> */}
      {/* <RunOnce/> */}
      {/* <EffectWithDeps/> */}
      {/* <UserPosts/> */}

      {/* <UserDetail userId={9} /> */}
      {/* <div>
      <h1>{UserId}</h1>
      <button onClick={() => setUserId(UserId + 1)}>Increment UserId</button>
    </div>
      <UserDetail userId={UserId}/>  */}
      {/* <ThemeContext.Provider>
      
        <ThemedButton />
        <ThemedComponent />
      </ThemeContext.Provider> */}
      <ThemeProvider>
        <ThemedComponent />
        <ThemedButton />
      </ThemeProvider>
      {/* <Counter1/> */}
      {/* <CounterWithPreviousState/> */}
      {/* <AuthProvider>
        <HomePage>


        </HomePage>
        <Navbar>

        </Navbar>
      </AuthProvider> */}
      {/* <LanguageProvider>
        <Greeting>
          
        </Greeting>
      </LanguageProvider> */}
    

    </div>
  );
}
export default App;
