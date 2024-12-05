var mongoose=require('mongoose');
var dbURI="mongodb+srv://gulsenaksoyy32:gulsen123@cluster0.8xdyf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(dbURI);

mongoose.connection.on("connected", function(){
    console.log(dbURI + "adresindeki veritabanına bağlamdı");
});

mongoose.connection.on("disconnected", function(){
    console.log("adresindeki veritabanı bağlantısı koptu");
});

process.on("SIGINT", function(){
    mongoose.connection.close();
    console.log("Bağlantı kesildi");
    process.exit(0);
});

require('./venue');