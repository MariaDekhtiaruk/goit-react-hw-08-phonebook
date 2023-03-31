import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactList from '../../components/Contactlist';
import Section from '../../components/Section';
import { useSelector } from 'react-redux';
import '../../components/App.css';

const Contacts = () => {
  const isLoading = useSelector(state => state.isLoading);

  return (
    <>
      <Section title="Phonebook" childrenClassName="phonebook">
        <ContactForm className="phonebook" />
      </Section>
      <Section title="Contacts" childrenClassName="contacts">
        {isLoading ? <h2>Loading...</h2> : null}
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};

export default Contacts;
