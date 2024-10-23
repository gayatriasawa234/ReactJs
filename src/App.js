import './App.css';
// import Greeting from './components/functionalComponents/Greeting';
// import Counter from './components/statefulFunctionalComponent/Counter';
// import Welcomemessage from './components/conditionalRendering/WelcomeMessage';
import ContactForm from './handlingForms/ContactForm';
function App() {
  return (
    <div>
      {/* <Greeting name="John" /> */}
      {/* <Greeting name="Jane" />
      <Greeting number= {30} /> */}
      {/* <Counter /> */}
      {/* <Welcomemessage isLoggedIn={false}/>  */}
      <ContactForm />
    </div>
  );
}

export default App;
