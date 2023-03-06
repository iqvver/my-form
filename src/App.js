import { useState } from 'react';
import app from './App.module.css';
import SubmitForm from './components/Form/SubmitForm';

function App() {
  const [form, showForm] = useState(false);
  return (
    <div className={app.container}>
      <button onClick={() => showForm((form) => !form)}>{form ? <span>Скрыть форму</span> : <span>Показать форму</span>}</button>
      {form ?
        <SubmitForm /> : null
      }
    </div>
  );
}

export default App;
