import React from 'react';
import LoginForm from './component/LoginForm';
import FileUploadForm from './component/FileUploadForm';
import CheckboxForm from './component/CheckboxForm';
import PreferencesForm from './component/PreferencesForm';
import ConditionalForm from './component/ConditionalForm';
function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to the App</h1> */}
      <LoginForm />
      {/* <FileUploadForm/>  */}
      {/* Render the LoginForm component */}
      {/* <CheckboxForm/> */}
      {/* <PreferencesForm/> */}
      {/* <ConditionalForm/> */}
    </div>
  );
}

export default App;