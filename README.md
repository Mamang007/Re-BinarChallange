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

    Untuk **Challenge Ketiga** ini yaitu menggabungkan pekerjaan landing page dan game menggunakan server ExpressJS. Fitur yang ditambahkan yaitu:
    1. Berpindah antar endpoint menggunakan routing.
    2. Mengubah halaman menjadi ejs.
    3. Menambahkan fitur registrasi, tetapi fitur ini hanya untuk menampilkan data pada database json.
    4. Menambahkan fitur login, tetapi fitur ini hanya untuk mencoba autentikasi ketika tidak memasukkan username dan password sesuai yang ada di databse maka akan muncul status error 401. Hanya saja jika mengakses halaman game menggunakan endpoint '/login' dapat langsung menjalankan gamenya.
4. Challenge Keempat
Tugas keempat yaitu membuat sistem server database dengan menggunakan Postgres dan ORM Sequelize. Fitur yg coba dibuat pada project ini yaitu:
    1. Mencoba Database statis pada folder 'Coba Database'. Disini dibuat server sederhana yang dapat menampilkan, membuat, mengupdate, dan menghapus data yang sudah connect dengan database.
    2. Untuk Challange-nya yaitu membuat sistem login database yang setelah melalui autentifikasi akan diarahkan ke dashboard game. Pada dashbord ini, kita akan login sebagai super user yang dapat melakukan semua fitur berupa membuat user baru, input biodata, dan input histori sehingga akan terdapat 3 buah tabel pada database yaitu Game (data user), Biodata (data tiap user), dan Histori (data score tiap user) untuk relasinya menggunakan GameId sebagai foreign key ke primary ket table Game. Selanjutnya untuk relasinya, setiap user hanya memiliki satu buah Biodata (hasOne) dan setiap user memiliki lebih dari satu data Histori (hasMany). Kemudian untuk seluruh data user ditampilkan pada dashboard dengan endpoint '/admin' dan seluruh hasil Histori ditampilkan pada endpoint '/histories'. Karena sebagai super user, disini admin dapat melihat seluruh user dengan biodatanya dan seluruh histori permainannya. Dan juga karena belum terhubung ke gamenya langsung, disini untuk CRUD dilakukan langsung pada dashbord.
    
    Untuk kendala **Challenge Keempat** ini yaitu:
    1. Menghubungkan relasi antar tabel sempat stuck dan terkendala cukup lama, karena perlu membaca documentasi pada Sequelize dan akhirnya ketemu di bagian 'associate' sehingga sudah mulai bisa berprogres lagi.
    2. Untuk dashboard user masih belum ditampilkan data-data user, untuk saat ini fokus Challenge Keempat adalah membuat sebuah dashboard yang memiliki fitur CRUD.
    3. Sistem autentifikasi login masih statis dan belum menggunakan cookies, sehingga dapat langsung menuju ke dashboard dengan endpoint tertentu. Hal ini akan diupdate setelah melakukan rangkaian Re-Binar Challenge.
    4. Untuk layout dashboard sudah cukup baik, tetapi untuk width masih perlu diatur guna User Experience lebih baik.
    5. Dashboard untuk menampilkan dan sistem CRUD baru dibuat untuk tabel Histori saja.
    6. Belum mencoba menggunakan controller query, sehingga CRUD menggunakan syntax Sequelize. Hal ini akan dipelajari lebih lanjut
5. Challenge Kelima
Untuk Tugas kelima yaitu membuat sistem Autentikasi dan Autorisasi. Kedua sistem ini akan dibuat menggunakan passport strategi yang mana ada metode Local Strategy dan JWT Strategy. Autentikasi diperlukan untuk melakukan verifikasi user dan Autorisasi digunakan untuk verifikasi akses tiap user. Pada Challenge 5 terdapat 4 modul yg dipelajari, yaitu:
    1. Design Pattern, pada bagian ini akan membuat design pattern MVC (Model View Controller) dan MCR (Model Controller Router).
    2. Template Engine, sama halnya dengan view engine digunakan untuk rendering file HTML pada server. Pada materi ini dilakukan lebih mendalam mengenai implementasi EJS (Embedded Javascript), mulai dari partials, css, navbar, implementasi for loop, dan if-else statement.
    3. Asynchronus Process, terdapat beberapa materi pada modul ini yaitu Set Timeout dan Interval, Implementasi Callback, Implementasi Promise, dan Synchronus dan Asynchronus process.
    4. Authentication dan Authorization, membuat Local Strategy Passport dan JWT Strategy Passport.
    
    Untuk kendala **Challenge Kelima** ini yaitu:
    1. Pada penggunaan strategy masih ada beberapa skema yang belum dipahami seperti session untuk menyimpan token JWT, tetapi untuk implementasi Local Strategy sudah cukup paham.
    2. Penggunaan ORM Sequelize untuk melakukan generate token dan menyimpan payload pada token terdapat kendala, sudah tanya ke berbagai forum dan belum ada yang menanggapi. Sehingga perlunya memahami cara penggunaan model pada ORM agar mengerti tentang OOP Class model. Pembuatan function dan static function juga masih perlu dipahami lebih lanjut pada materi ini. Sudah mengikuti keseluruhan tutorial tetapi program masih tidak berjalan.
    3. Dari 2 permasalahan tersebut untuk bagian Back End saat ini akan saya pelajari lebih lanjut setelah menyelesaikan Re-Binar Challenge ini.
    4. Untuk Challenge yang akan diimplementasikan sedikit berbeda dengan yg di modul. Saya akan menggunakan tabel untuk membuat room yang nantinya di akses oleh 2 player, tiap player dapat membuat room sendiri dan mengundang player lain untuk join pada room yang telah dibuat, kemudian kedua player dapat melakukan 'fight' pada room tersebut dan menampilkan hasil dan score. Dari gambaran ini artinya token perlu disimpan untuk tiap player pada suatu tabel room.
6. Challenge Keenam
Untuk Tugas keenam yaitu membuat aplikasi untuk menampilkan daftar pemain yang terdaftar serta melakukan static CRUD pada data pemain. Pada challenge ini sudah mengguna framework ReactJS. Pada Challenge 6 terdapat 3 modul, tetapi hanya digunakan 2 modul untuk latihan Challenge 6, yaitu:
    1. Swagger, pada materi ini dibuat server menggunakan express menggunakan metode MVC. Pada latihan ini dibuat juga dokumentasinya menggunakan swagger dan membuat route documentation.
    2. React, pada materi ini dibuat client-side menggunakan ReactJS.

    Untuk Challengenya sendiri yaitu membuat server side dan client side untuk mengelola dashboard, tetapi untuk dashboard client-side belum melakukan fetching data ke server. Untuk kendala **Challenge Keenam** ini yaitu:
    1. Pemahaman mengenai Use Effect masih belum dipahami dengan lancar, tetapi untuk Use State sudah cukup bisa dipahami.
    2. Dalam melakukan filtering berdasarkan parameter username, email, exp, dan lvl sudah bisa dilakukan pada console.log, hanya saja untuk merender data yang sudah terfilter akan menghapus data yang sudah ada. Kedepannya aingin dilakukan filtering secara dinamis agar tapa klik 'Search' sudah langsung ditampilkan berdasarkan parameter tsb.
    3. Untuk selebihnya tidak ada kendala berat, tetapi masih perlu melakukan refactoring code.
7. Challenge Ketujuh
Untuk Tugas ketujuh yaitu membuat aplikasi untuk menampilkan daftar pemain yang terdaftar serta melakukan static CRUD pada data pemain. Pada challenge ini sudah mengguna framework ReactJS. Pada Challenge 6 terdapat 3 modul, tetapi hanya digunakan 2 modul untuk latihan Challenge 7, yaitu:
    1. React SPA, pada materi ini yaitu mengaplikasikan 1 buah HTML untuk melakukan rendering component menjadi sebuah halaman web. Terdapat 5 buah halaman (Home, About, Contact, Login, dan NotFound) dan 1 buah komponen (NavBar) yang dilakukan routing, jadi setiap klik path akan melakukan rendering untuk tiap component. Selain itu, materi ini juga mencoba untuk melakukan fetching data menggunakan .fetch dan .axios menggunakan API umum atau dari server yang sudah pernah kita buat. Data yang dikirimkan ke web berupa JSON.
    2. Firebase Integration, untuk materi ini adalah menggunakan Firebase sebagai BaaS (Backend as a Server). Jadi yang dilakukan adalah menggunakan akun Firebase Google untuk membuat konfigurasi backend seperti Login, Register, Authentication, Authorization, serta belajar konfigurasi untuk Realtime Database dan Storage sehingga dapat melakukan upload file ke backend serta menampilkan database di web.
       
    Kendala yang terjadi pada materi ini yaitu, untuk React SPA ketika menggunakan package 'react-router' dan 'react-router-dom' terjadi error yang disebabkan sudah berbedanya version sehingga menjadi pelajaran baru agar dapat tetep menggunakan 'react-router' yang terbaru. Kemudian untuk Firebase Integration perlu belajar lebih lanjut mengenai penggunaan Firebase ini, karena terdapat pula aturan yang berubah pada Firebase yang tidak sesuai modul. Selanjutnya untuk fitur auth masih harus memahami lebih banyak lagi konfigurasinya di Firebase.
