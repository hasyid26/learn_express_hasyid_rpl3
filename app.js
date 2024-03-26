const express =require('express') //mengambil suatu fungsi dari node module
const app =express() //memanggil fungsi express
const port = 3000 //menentukan port

app.get('/',function(req,res) { //untuk mengirim request dan respon kedalam web
    res.send('hallo') //mengirim teks "hallo" kedalam web
})

app.listen(port, function () { //untuk menjalankan kode diatas dengan port yang sudah ditentukan
    console.log('konek jing')
})  