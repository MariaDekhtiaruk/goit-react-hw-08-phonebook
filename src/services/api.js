import { AUTH_TOKEN } from 'redux/usersSlice';

const api = {
  async processResponse(response) {
    // Check if response is an error
    if (![200, 201].includes(response.status)) {
      // Throw an error with a status and message from an error
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    // Response is not an error. Convert response to JSON and return its body
    return response.json();
  },
  baseUri: 'https://641a9ef1f398d7d95d5a8094.mockapi.io/contacts',
  baseUriHeroku: 'https://connections-api.herokuapp.com',
  token: '',
  setAuthToken(token) {
    this.token = `Bearer ${token}`;
  },
  async fetchContacts() {
    const response = await fetch(`${this.baseUriHeroku}/contacts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.token,
      },
    });

    return this.processResponse(response);
  },
  async addContact(data) {
    console.log('data', data);
    const response = await fetch(`${this.baseUriHeroku}/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.token,
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    return this.processResponse(response);
  },
  async delete(id) {
    const response = await fetch(`${this.baseUri}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return this.processResponse(response);
  },
  async login(email, password) {
    const response = await fetch(`${this.baseUriHeroku}/users/login`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return this.processResponse(response);
  },
};

const cachedAuthToken = localStorage.getItem(AUTH_TOKEN);

if (cachedAuthToken) api.setAuthToken(cachedAuthToken);

window.api = api;

export default api;
