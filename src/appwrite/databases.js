import { ID } from "appwrite";
import { databases, collections } from "./config";

const db = {};

collections.forEach((collection) => {
  db[collection.name] = {
    create: async (payload, id = ID.unique()) => {
      console.log(payload);
      return await databases.createDocument(
        collection.dbID,
        collection.collectionID,
        id,
        payload
      );
    },
    delete: async (id) => {
      return await databases.deleteDocument(
        collection.dbID,
        collection.collectionID,
        id
      );
    },
    update: async (id, payload) => {
      return await databases.updateDocument(
        collection.dbID,
        collection.collectionID,
        id,
        payload
      );
    },
    list: async (queries) => {
      return await databases.listDocuments(
        collection.dbID,
        collection.collectionID,
        queries
      );
    },
    get: async (id) => {
      return await databases.getDocument(
        collection.dbID,
        collection.collectionID,
        id
      );
    },
  };
});

export { db };
