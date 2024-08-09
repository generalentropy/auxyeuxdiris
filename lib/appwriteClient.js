import { Client, Account } from "appwrite";
import { appWrite } from "../config/global";

const client = new Client();

const { endpoint, projectId } = appWrite;

client.setEndpoint(endpoint).setProject(projectId);

const account = new Account(client);

export const signIn = async (email, password) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    throw new Error(error);
  }
};

export const getCurrentSession = async () => {
  account
    .get()
    .then((response) => {
      console.log(response); // Ici, vous aurez accès aux détails de l'utilisateur et de la session actuelle
    })
    .catch((error) => {
      console.error(error); // Gérer les erreurs ici
    });
};
