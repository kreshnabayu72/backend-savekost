import express from "express";
import multer from "multer";
import { makananModel } from "../model/Makanan.js";
import { restoranModel } from "../model/Restoran.js";

const upload = multer();

const dummyData = [
  {
    _id: "637b7f05d25271dbecae49b2",
    nama: "Cah Kangkung",
    harga: 2000,
    deskripsi:
      "Tumisan kangkung gurih dengan tambahan udang rebon yang nikmat. Cocok dijadikan lauk makan  ",
    restoran: "637b7e5dd25271dbecae49af",
    __v: 0,
  },
  {
    _id: "637b8087d25271dbecae49b7",
    nama: "Capcay",
    harga: 2000,
    deskripsi:
      "Olahan berbagai macam jenis sayur yang ditumis menjadi hidangan yang lezat",
    restoran: "637b7e5dd25271dbecae49af",
    __v: 0,
  },
  {
    _id: "637b80fcd25271dbecae49be",
    nama: "Batagor",
    harga: 8000,
    deskripsi:
      "Adonan tepung dan ikan tenggiri yang lembut kemudian digoreng garing dengan tambahan saos kacang pedas dan kecap. Merupakan jajanan khas bandung",
    restoran: "637b80bed25271dbecae49bb",
    __v: 0,
  },
  {
    _id: "637b82bed25271dbecae49c3",
    nama: "Mie Kocok",
    harga: 10000,
    deskripsi:
      "Hidangan mie bercitarasa kaldu sapi disajikan dengan berbagai toping",
    restoran: "637b80bed25271dbecae49bb",
    __v: 0,
  },
  {
    _id: "637b8314d25271dbecae49ca",
    nama: "Bubur Ayam",
    harga: 8000,
    deskripsi: "Bubur ayam khas cirebon dengan kuah khas yang kental ",
    restoran: "637b82d9d25271dbecae49c7",
    __v: 0,
  },
  {
    _id: "637b83aed25271dbecae49d1",
    nama: "Nasi Goreng",
    harga: 14000,
    deskripsi:
      "Nasi goreng dengan bumbu khas yang menggugah selera. Ditambah dengan potongan sosis, bakso ikan, dan telur yang digoreng setengah matang",
    restoran: "637b835dd25271dbecae49ce",
    __v: 0,
  },
  {
    _id: "637b85a5d25271dbecae49d6",
    nama: "Kwetiaw Goreng",
    harga: 14000,
    deskripsi:
      "Mie kwetiew dengan bumbu khas yang digoreng dengan irisan ayam dan sayuran",
    restoran: "637b835dd25271dbecae49ce",
    __v: 0,
  },
  {
    _id: "637b86a6d25271dbecae49dd",
    nama: "Mie Aceh Goreng",
    harga: 16000,
    deskripsi:
      "Mie goreng khas bumbu aceh yang berempah dengan porsi yang mengeyangkan. Mie kuning tebal dengan irisan daging sapi, daging kambing atau makanan laut disajikan dalam sup sejenis kari yang gurih dan pedas.",
    restoran: "637b85bbd25271dbecae49da",
    __v: 0,
  },
  {
    _id: "637b872ad25271dbecae49e2",
    nama: "Mie Aceh Tumis",
    harga: 16000,
    deskripsi:
      "Mie kuning tebal dengan bumbu khas aceh yang ditumis dengan sayuran dan irisan daging sapi",
    restoran: "637b85bbd25271dbecae49da",
    __v: 0,
  },
  {
    _id: "637b88ecd25271dbecae49e9",
    nama: "Ayam Goreng",
    harga: 10000,
    deskripsi:
      "Ayam goreng krispi khas rumah makan padang. Ayam diungkep dengan bumbu pilihan dan digoreng garing diluar dan juicy didalam",
    restoran: "637b85bbd25271dbecae49da",
    __v: 0,
  },
  {
    _id: "637b891ed25271dbecae49ee",
    nama: "Ayam Bakar",
    harga: 10000,
    deskripsi: "Ayam yang dibakar dengan bumbu khas padang yang lezat",
    restoran: "637b85bbd25271dbecae49da",
    __v: 0,
  },
  {
    _id: "637b8b0cd25271dbecae49f7",
    nama: "Soto Mie Bogor",
    harga: 11000,
    deskripsi:
      "Soto mie dengan irisan daging sapi dan tetelan. Kuah khas soto bogor yang segar dan nikmat cocok disantap saat hujan di kota bogor",
    restoran: "637b895fd25271dbecae49f4",
    __v: 0,
  },
  {
    _id: "637b8b52d25271dbecae49fc",
    nama: "Soto Ayam Santan",
    harga: 11000,
    deskripsi:
      "Soto ayam dengan kuah santan yang gurih bisa ditambah dengan tetelan dan daging sapi. Disediakan emping sebagai tambahan",
    restoran: "637b895fd25271dbecae49f4",
    __v: 0,
  },
  {
    _id: "637b8b9cd25271dbecae4a01",
    nama: "Soto Ayam Bening",
    harga: 11000,
    deskripsi:
      "Soto ayam dengan kuah bening yang nikmat, kaldu ayam yang terasa dan segar dari perasan jeruk nipis dan sambal",
    restoran: "637b895fd25271dbecae49f4",
    __v: 0,
  },
  {
    _id: "637b8cddd25271dbecae4a09",
    nama: "Telur Gulung",
    harga: 1000,
    deskripsi:
      "Olahan telur yang diberikan bumbu gurih dan kaldu yang digulung menggunakan tusukan. Rekomendasi jajanan yang disukai semua kalangan ",
    restoran: "637b8bbbd25271dbecae4a06",
    __v: 0,
  },
  {
    _id: "637b8d3dd25271dbecae4a10",
    nama: "Lontong Sayur",
    harga: 10000,
    deskripsi:
      "Lontong yang disajikan dengan kuah kuning dan sayur. Bisa ditambahkan dengan telur rebus dan kerupuk ",
    restoran: "637b8cfbd25271dbecae4a0d",
    __v: 0,
  },
  {
    _id: "637b8e81d25271dbecae4a17",
    nama: "Tongkol Kuning",
    harga: 3000,
    deskripsi:
      "Olahan lauk ikan laut yang dibumbui dengan rempah dan bumbu kuning yang lezat",
    restoran: "637b8d4cd25271dbecae4a14",
    __v: 0,
  },
  {
    _id: "637b8fc0d25271dbecae4a1c",
    nama: "Kentang Mustofa",
    harga: 2000,
    deskripsi:
      "Olahan kentang yang dibumbui sambal balado nikmat cocok menjadi lauk dan cemilan",
    restoran: "637b8d4cd25271dbecae4a14",
    __v: 0,
  },
  {
    _id: "637b90b8d25271dbecae4a21",
    nama: "Orek Tempe",
    harga: 2000,
    deskripsi:
      "Olahan tempe yang dibumbui gula aren dan cabai menjadi perpaduan lauk atau cemilan yang nikmat",
    restoran: "637b8d4cd25271dbecae4a14",
    __v: 0,
  },
  {
    _id: "637b90f2d25271dbecae4a26",
    nama: "Nasi Putih",
    harga: 3000,
    deskripsi: "Nasi putih porsi jumbo",
    restoran: "637b8d4cd25271dbecae4a14",
    __v: 0,
  },
];

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await makananModel.find();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});
router.get("/rekomendasi", async (req, res) => {
  try {
    const budget = parseInt(req.query.budget);
    const hari = parseInt(req.query.hari);

    const rekomendasiPengeluaranPerMakanan = parseInt(budget / (3 * hari));

    const rekomendasiMakanan = (await makananModel.find()).filter(
      (makanan) => makanan.harga <= rekomendasiPengeluaranPerMakanan
    );

    res.send({ rekomendasiPengeluaranPerMakanan, rekomendasiMakanan });
  } catch (error) {
    res.send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const result = await makananModel.findById(req.params.id);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

router.get("/:id/foto", async (req, res) => {
  try {
    const post = await makananModel.findById(req.params.id);
    res.contentType("image/jpeg");
    res.send(post.foto);
  } catch (error) {
    res.send(error);
  }
});

router.post("/", upload.single("foto"), async (req, res) => {
  try {
    const restoranMakanan = await restoranModel.findById(req.body.restoran);

    if (!restoranMakanan) {
      throw new Error("Restoran tidak ada");
    }
    const newMakanan = new makananModel({
      nama: req.body.nama,
      harga: req.body.harga,
      deskripsi: req.body.deskripsi,
      restoran: restoranMakanan,
      foto: req.file.buffer,
    });

    await restoranMakanan.updateOne({
      $addToSet: { makanan: newMakanan },
    });

    const result = await newMakanan.save();
    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
});

router.post("/fill", async (req, res) => {
  try {
    dummyData.map(async (data) => {
      const restoran = await restoranModel.findById(data.restoran);
      if (!restoran) {
        throw new Error("Restoran tidak ada");
      }

      const newMakanan = new makananModel({
        nama: data.nama,
        harga: data.harga,
        deskripsi: data.deskripsi,
        restoran,
      });
      await newMakanan.save();
    });
    const result = "ok";
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

router.put("/editfoto/:id", upload.single("foto"), async (req, res) => {
  try {
    const makanan = await makananModel.findById(req.params.id);

    if (!makanan) {
      throw new Error("Makanan doesnt exist");
    }

    const result = await mahasiswaModel.updateOne(makanan, {
      $set: { foto: req.file.buffer },
    });

    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

export default router;
