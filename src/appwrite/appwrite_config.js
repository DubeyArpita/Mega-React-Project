import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl) // Set your Appwrite endpoint
      .setProject(config.appwriteProjectID); // Set your Appwrite project ID

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, userId, status }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        slug, // Use slug as the document ID
        {
          title,
          content,
          featuredImage,
          userId,
          status,
        }
      );
    } catch (error) {
      console.log("Error creating post:", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        slug, // Use slug as the document ID
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Error updating post:", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        slug // Use slug as the document ID
      );
      return true; // Return true if deletion was successful
    } catch (error) {
      console.log("Error deleting post:", error);
      return false; // Return false if there was an error
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        slug // Use slug as the document ID
      );
    } catch (error) {
      console.log("Error fetching post:", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        queries
      );
    } catch (error) {
      console.log("Error fetching posts:", error);
      return false;
    }
  }

  // file upload services

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        config.appwriteBucketID,
        ID.unique(), // Generate a unique ID for the file
        file
      );
    } catch (error) {
      console.log("Error uploading file:", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(
        config.appwriteBucketID,
        fileId // Use the file ID to delete the specific file
      );
      return true; // Return true if deletion was successful
    } catch (error) {
      console.log("Error deleting file:", error);
      return false; // Return false if there was an error
    }
  }

  async getFilePreview(fileId) {
    try {
      return await this.bucket.getFilePreview(
        config.appwriteBucketID,
        fileId // Use the file ID to get the specific file
      );
    } catch (error) {
      console.log("Error fetching file:", error);
      return false; // Return false if there was an error
    }
  }
}

const service = new Service();

export default service;
