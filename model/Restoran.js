import mongoose from "mongoose";
import { makananSchema } from "./Makanan.js";

export const restoranSchema = mongoose.Schema({
  nama: String,
  jarak: Number,
});

export const restoranModel = mongoose.model("Restoran", restoranSchema);
