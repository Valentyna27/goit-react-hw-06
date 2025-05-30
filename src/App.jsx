
import ContactForm from './components/ContactFrom/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

import './App.css';

function App() {
  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
