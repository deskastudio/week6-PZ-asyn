const ambilDataUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = { nama: "Budi", usia: 25 };
        resolve(data);
    }, 2000);
});

ambilDataUser
    .then((data) => {
        console.log("Data user:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
