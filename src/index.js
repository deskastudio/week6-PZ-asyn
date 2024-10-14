// Soal 1

function cetakPesanTertunda() {
    setTimeout(() => {
      console.log("Halo dari Productzilla");
    }, 10000);
  }
  
  cetakPesanTertunda();
  
  // soal 2
  
  function ambilDataUser() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = { nama: "Budi", usia: 25 };
        resolve(user);
      }, 2000);
    });
  }
  
  ambilDataUser()
    .then((user) => {
      console.log("Data user:", user);
    })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });
  
  // Soal 3
  
  function tunggu(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  async function ambilData() {
    await tunggu(Math.random() * 2000 + 1000);
    console.log("Data berhasil diambil");
    return "data mentah";
  }
  
  async function prosesData(data) {
    await tunggu(Math.random() * 2000 + 1000);
    console.log("Data berhasil diproses");
    return data + " yang telah diproses";
  }
  
  async function simpanData(data) {
    await tunggu(Math.random() * 2000 + 1000);
    console.log("Data berhasil disimpan");
    return { sukses: true, pesan: "Data " + data + " telah disimpan" };
  }
  
  async function jalankanOperasiDatabase() {
    try {
      const dataMentah = await ambilData();
      const dataProses = await prosesData(dataMentah);
      const hasilSimpan = await simpanData(dataProses);
      console.log("Hasil akhir:", hasilSimpan);
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  }
  
  jalankanOperasiDatabase();