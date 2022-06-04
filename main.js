module.exports = async test => {
const Table = require('ghost-dev.ascii');
/* Ascii table Console Example */
var tablo = new Table('Service is Ready!');
tablo.addRow('By:', 'GhostDevelopment')
tablo.addRow('Your Text:', 'Hello World!');
console.log(tablo.toString());
/*COLORS Console Message Example */
const cs = require('ghost-dev-console');
// Yesil: Green, Sari: Yellow, Kirmizi: Red, Cyan: Cyan, magenta:Magenta, Beyaz: White, Gri: Gray, Siyah: Black
cs.yesil("Hello World!") 
await(2000)
cs.cyan("Your Service is Ready!")
}
