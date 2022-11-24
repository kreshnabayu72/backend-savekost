import mongoose from "mongoose";
import { restoranSchema } from "./Restoran.js";

export const makananSchema = mongoose.Schema({
  nama: String,
  harga: Number,
  deskripsi: String,
  foto: { type: Buffer, default: null },
  restoran: restoranSchema,
});

makananSchema.methods.toJSON = function () {
  const result = this.toObject();
  delete result.foto;
  return result;
};

export const makananModel = mongoose.model("Makanan", makananSchema);
