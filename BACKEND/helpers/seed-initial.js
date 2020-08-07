const fs = require('fs');
const isProd = process.argv.includes('--prod');
const dbDir = './BACKEND/DB';

const seedInitial = () => {
    try {
        fs.readFileSync(dbDir + '/customers.json');
    } catch {
        fs.writeFileSync(dbDir + '/customers.json', '[]');
    }
    
    try {
        fs.readFileSync(dbDir + '/orders.json');
    } catch {
        fs.writeFileSync(dbDir + '/orders.json', '[]');
    }
    
    if (isProd) {
        // running seed 
    }
};

module.exports = seedInitial;