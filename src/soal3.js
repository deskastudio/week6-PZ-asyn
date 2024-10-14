function ambilData() {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 3000) + 1000; // waktu acak antara 1-3 detik
        setTimeout(() => {
            console.log("Data berhasil diambil");
            resolve("Data");
        }, delay);
    });
}

function prosesData(data) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 3000) + 1000;
        setTimeout(() => {
            console.log("Data berhasil diproses");
            resolve(`Hasil proses dari ${data}`);
        }, delay);
    });
}

function simpanData(hasilProses) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 3000) + 1000;
        setTimeout(() => {
            console.log("Data berhasil disimpan");
            resolve("Simpan sukses");
        }, delay);
    });
}

async function jalankanOperasiDatabase() {
    try {
        const data = await ambilData();
        const hasilProses = await prosesData(data);
        const hasilSimpan = await simpanData(hasilProses);
        console.log(hasilSimpan);
    } catch (error) {
        console.error("Terjadi error:", error);
    }
}

jalankanOperasiDatabase();
