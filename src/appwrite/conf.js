export const conf = {
    endPoint: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
    projectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    databaseId: String(import.meta.env.VITE_DATABASE_ID),
    tableId: String(import.meta.env.VITE_TABLE_ID)
}