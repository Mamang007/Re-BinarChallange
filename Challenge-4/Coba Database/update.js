const { Article } = require('./models')

//Membuat query terhadap artikel dengan id=1
const query = {
    where: { id=1 }
}

Article.update({
    approved: false
}, query)
.then(() => {
    console.log("Artikel berhasil diupdate.")
    process.exit()
})
.catch(err => {
    console.error("Gagal mengupdate artikel!")
})