import { jwtVerify, errors as joseErrors } from "jose";
import { connect } from "../../connection/connection.js";
import { ObjectId } from "mongodb";
const db = await connect();

export async function verifyToken(token) {
  try {
    const encoder = new TextEncoder();
    const jwtData = await jwtVerify(token,encoder.encode(process.env.JWT_PRIVATE_KEY));
    const userId = jwtData.payload.id;
    const user = await db.collection('Users').findOne({ _id: new ObjectId(userId)}, { projection: { rol: 1, _id: 0 }});
    return { valid: user !== null, user };
  } catch (error) {return { valid: false };}
}