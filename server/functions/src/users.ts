import { Response, Request, region } from "firebase-functions";
import { firestore } from "firebase-admin";
import * as cors from "cors";
import { Region } from "./utils/constant";

const corsHandler = cors({ origin: true });

export const addUser = region(Region).https.onRequest(
  async (req: Request, res: Response) => {
    corsHandler(req, res, async () => {
      try {
        console.log(req.body);
        const { name, email, mobile, password } = req.body;

        if (!name || !email || !mobile || !password) {
          return res
            .status(400)
            .send({ message: "Name, email, mobile and password are required." });
        }
        const userRef = firestore().collection("users").doc();
        const userData = {
          name,
          email,
          mobile,
          password,
          id: userRef.id,
        };

        await userRef.set(userData);

        return res.status(200).send({
          message: "User added successfully",
          data: userData,
        });
      } catch (error) {
        console.error(error);
        return res.status(500).send({
          message: "Failed to add user",
        });
      }
    });
  }
);

export const getUsers = region(Region).https.onRequest(
  async (req: Request, res: Response) => {
    corsHandler(req, res, async () => {
      try {
        const usersSnapshot = await firestore().collection("users").get();
        const usersData = usersSnapshot.docs.map((doc) => doc.data());

        res.status(200).send({
          message: "fetched all users",
          data: usersData,
        });
      } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send({
          message: "Failed to fetch users",
        });
      }
    });
  }
);

export const getUserById = region(Region).https.onRequest(
  async (req: Request, res: Response) => {
    corsHandler(req, res, async () => {
      try {
        const userId = req.query.userId as string;
        const userDoc = await firestore().collection("users").doc(userId).get();

        if (!userDoc.exists) {
          res.status(404).send({
            message: "User not found",
          });
          return;
        }

        const userData = userDoc.data();

        res.status(200).send({
          message: "Fetched user by ID",
          data: userData,
        });
      } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).send({
          message: "Failed to fetch user",
        });
      }
    });
  }
);

export const updateUser = region(Region).https.onRequest(
  async (req: Request, res: Response) => {
    corsHandler(req, res, async () => {
      try {
        const { name, email, mobile, password, id } = req.body;

        if (!id || !name || !email || !mobile || !password) {
          return res
            .status(400)
            .send({ message: "ID, name, email, mobile and password are required." });
        }

        await firestore()
          .collection("users")
          .doc(id)
          .update({ name, email, mobile, password });

        return res.status(200).send({
          message: "User updated successfully",
        });
      } catch (error) {
        console.error("Error updating user:", error);
        return res.status(500).send({
          message: "Failed to update user",
        });
      }
    });
  }
);

export const deleteUser = region(Region).https.onRequest(
  async (req: Request, res: Response) => {
    corsHandler(req, res, async () => {
      try {
        const userId = req.query.userId as string;

        if (!userId) {
          return res.status(400).send({ message: "User ID is required." });
        }

        await firestore().collection("users").doc(userId).delete();

        return res.status(200).send({
          message: "User deleted successfully",
        });
      } catch (error) {
        console.error("Error deleting user:", error);
        return res.status(500).send({
          message: "Failed to delete user",
        });
      }
    });
  }
);
