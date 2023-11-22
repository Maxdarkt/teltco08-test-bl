import * as dotenv from 'dotenv';
dotenv.config();

const user_name = process.env.USER_NAME;
const password = process.env.PASSWORD;
const base_url = process.env.BASE_URL;

console.log(user_name, password, base_url);

const loginButton = document.getElementById('login-button');
const getAllConcretesButton = document.getElementById('get-all-concretes-button');

const login = async() => {
  
  const urlLogin = `${base_url}/auth/login?user_name=${user_name}&password=${password}`;

  console.log(urlLogin)

  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: null
    };

    const response = await fetch(urlLogin, requestOptions);

    if (response.status === 200) {
      const data = await response.json();
      console.log('Connexion réussie:', data);
    } else {
      console.error('Échec de la connexion:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
  }
}

const getAllConcretes = async() => {

  const startDate = '2023-11-15';
  const endDate = '2023-11-17';
  
  const urlConcretes = `${base_url}/implenia/bl-data?start=${startDate}&end=${endDate}`;

  console.log(urlConcretes)

  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: null
    };

    const response = await fetch(urlConcretes, requestOptions);

    if (response.status === 200) {
      const data = await response.json();
      console.log('Récupération des BL:', data);
    } else {
      console.error('Échec de la requête:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Erreur lors de la requête:', error);
  }
}

loginButton?.addEventListener('click', login);
getAllConcretesButton?.addEventListener('click', getAllConcretes);