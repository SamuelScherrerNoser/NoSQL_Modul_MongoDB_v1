const { exec } = require('child_process');

const dbName = 'db';
const backupDir = 'C:/Github/NoSQL_Modul_MongoDb_v1/backups';

function restore(backupFileName) {
    const backupFilePath = `${backupDir}/${backupFileName}`;
    const command = `mongorestore --db ${dbName} ${backupFilePath}`;

    exec(command, (error) => {
        if (error) {
            console.error(`Restore fehlgeschlagen: ${error}`);
            return;
        }
        
        console.log(`Restore erfolgreich durchgeführt: ${backupFilePath}`);
    });
}

restore("Backup1");