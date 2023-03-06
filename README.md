# Re-BinarChallange
1. Challenge Pertama<br>
Tugas pertama pada Binar ini adalah membuat Landingpage untuk sebuah Web-Based Game.<br>
2. Challenge Kedua<br>
Tugas kedua yaitu membuat sebuah permainan Suit Jepang dengan fitur yang ditampilkan:<br>
    1. Menampilkan menang-kalah-seri.<br>
    2. Menampilkan score board.<br>
    3. Fitur tambahan berupa hover pada pilihan, acakCom untuk mengacak pilihan computer sebelum hasil dijalankan.<br>
3. Challenge Ketiga<br>
Tugas ketiga yaitu menjalankan server, server yang dicoba pada materi ini yaitu:
    1. Server Statis, pada materi ini telah dicoba membuat server statis untuk menampilkan halaman HTML dan JSON.
    2. Server menggunakan ExpressJS, pada materi ini telah dicoba materi mengenai Router, Middleware, dan Error Handling.
    3. Mencoba View Engine pada Express, pada materi ini server express dipasang fitur View Engine untuk memudahkan membuat tiap halamannya dengan membuat file '*.ejs'.
    4. Menggunakan RESTful API, pada materi ini telah dicoba beberapa method CRUD.
Untuk challenge ketiga ini yaitu menggabungkan pekerjaan landing page dan game menggunakan server ExpressJS. Fitur yang ditambahkan yaitu:
    1. Berpindah antar endpoint menggunakan routing.
    2. Mengubah halaman menjadi ejs.
    3. Menambahkan fitur registrasi, tetapi fitur ini hanya untuk menampilkan data pada database json.
    4. Menambahkan fitur login, tetapi fitur ini hanya untuk mencoba autentikasi ketika tidak memasukkan username dan password sesuai yang ada di databse maka akan muncul status error 401. Hanya saja jika mengakses halaman game menggunakan endpoint '/login' dapat langsung menjalankan gamenya.
