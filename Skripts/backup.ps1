$dbName = "db"
$backupDir = "C:\Github\NoSQL_Modul_MongoDb_v1\backups"
$connectionString = "mongodb+srv://luisKueng:luisKueng73@db.zaej6tf.mongodb.net/"

$timestamp = Get-Date -Format "yyyy-MM-ddTHH-mm-ss"
$backupFileName = "${dbName}_${timestamp}.dump"
$backupFilePath = "${backupDir}\${backupFileName}"

mongodump --host="$connectionString" --db="$dbName" --out="$backupFilePath"

if ($LASTEXITCODE -ne 0) {
    Write-Host "Backup fehlgeschlagen"
} else {
    Write-Host "Backup erfolgreich erstellt: $backupFilePath"
}

Start-Sleep -Seconds 10
