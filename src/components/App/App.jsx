
import React from "react";
import { Section } from "./App.styles";
import ContactForm from '../ContactForm/ContactForm';
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import { fetchContacts } from "redux/operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Section >
  );
};

