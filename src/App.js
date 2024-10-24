import Greeting from './Components/greeting';
import UserProfile from './Components/UserProfile';
import Welcome from './Components/Welcome';
import Button from './Components/button';
import { useState } from 'react';
import ChildComponent from './Components/ChildComponent';
import Container from './Components/Container';
import Card from './Components/Card';
import List from './Components/List';
function App() {
  // const handleClick = () => {
  //   alert('Button clicked!');
  // };

  // return <Button onClick={handleClick} label="Click Me" />
  const [count, setCount] = useState(0);

  const Increment = () => {
    // const[count, setCount] = useState(0);
    setCount(count + 1);
  }

  //   return (
  //     <>
  //       <ChildComponent Increment={Increment} label="Increment" count={count} />
  //       {/* <h1>Count: {count}</h1>
  //         <button onClick={Increment}>Increment</button> */}
  //     </>
  //   );
  // }
  return (
    <>
      {/* <Greeting name="Tarun" />
      <UserProfile name="Gayatri" age={24} />
      <Welcome /> */}
      {/* <Container>
        <h1>Hello</h1>
        <p>This is a child element.</p>
      </Container>; */}
      {/* <Card title="My card" content="This is the content of the card"></Card> */}
      <List items={['Apple', 'Banana', 'Cherry']} />;
      
    </>
  );
}
export default App;
