import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    plaform: 'com.jsm.aora',
    projectId: '66f79b5c00282a27c484',
    databaseId: '66f79d0200103978ee9a',
    userCollectionId: '66f79d30000671e354b9',
    videoCollectionId: '66f79d7c002e7f0f59f3',
    storageId: '66f79f20002d9d761b17'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.plaform) // Your application ID or bundle ID.

    const account = new Account(client);
    const avatars = new Avatars(client);
    const databases = new Databases(client);

    export const createUser = async (email, password, user_name) => {
        try{
            const newAccount = await account.create(
                ID.unique(),
                email,
                password,
                user_name
            );
            console.log('newAccount', newAccount)
            if(!newAccount) throw Error;

            const avatarurl = avatars.getInitials(user_name);

            await SignIn(email, password);

            const newUser = await databases.createDocument(
                config.databaseId,
                config.userCollectionId,
                ID.unique(),
                {
                    accountId: newAccount.$id,
                    email,
                    user_name,
                    avatar: avatarurl
                }
            )

            return newUser;
        }catch(error){
            console.log(error);
            throw new Error(error);
        }
    } 

    export async function SignIn(email, password) {
        try {
            const session = await account.createEmailPasswordSession(email, password);
        } catch(error){
            throw new Error(error);
        }
    }
;



