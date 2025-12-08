import { Client, Databases, Query } from "appwrite";
import { conf } from "./conf.js";

class FeedbackService {
    client = new Client();
    databases;

    constructor() {
        this.client
            .setEndpoint(conf.endPoint)
            .setProject(conf.projectId);

        this.databases = new Databases(this.client);
    }

    async sendFeedbacks({name, message}) {
        return await this.databases.createDocument(
            conf.databaseId,
            conf.tableId,
            "unique()",
            {
                name,
                message
            }
        );
    }

    async getFeedbacks() {
        return await this.databases.listDocuments(
            conf.databaseId,
            conf.tableId
        );
    }
}

const services = new FeedbackService();
export default services;