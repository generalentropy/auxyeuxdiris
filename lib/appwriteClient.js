import { Client, Account, Databases } from "appwrite";
import { appWrite } from "../config/global";

const client = new Client();

const { endpoint, projectId, databaseId, collectionId, documentId, userId } =
  appWrite;

client.setEndpoint(endpoint).setProject(projectId);

const account = new Account(client);
const databases = new Databases(client);

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
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const logout = async () => {
  try {
    const session = await account.deleteSession("current");
    return session;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateModaleContent = async (title, content) => {
  try {
    const result = await databases.updateDocument(
      databaseId,
      collectionId,
      documentId,
      { title, content },
      [`user:${userId}`], // Permissions de lecture
      [`user:${userId}`], // Permissions d'écriture
    );

    return result;
  } catch (error) {
    console.error("Erreur lors de la mise à jour du contenu:", error);
  }
};

export const fetchDocuments = async () => {
  try {
    const response = await databases.listDocuments(
      databaseId, // ID de la base de données
      collectionId, // ID de la collection
    );
    // console.log("Documents:", response.documents);
    return response.documents;
  } catch (error) {
    console.error("Erreur lors de la récupération des documents:", error);
  }
};
