import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://63dfbef959bccf35dab8cf70.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAPI',
    async (_, thunkAPI) => {
        try {
            const responce = await axios.get('/contacts');
            return responce.data;
        } catch (evt) {
            return thunkAPI.rejectWithValue(evt.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({ name, number }, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', {
                name,
                number
            });
            return response.data;
        } catch (evt) {
            return thunkAPI.rejectWithValue(evt.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${id}`);
            return response.data;
        } catch (evt) {
            return thunkAPI.rejectWithValue(evt.message);
        }
    }
);

