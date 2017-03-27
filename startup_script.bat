@echo off

>output.txt 2>&1 (
echo Starting Nodemon - School Survey Server...
cd "C:\schoolsurveyserver\"
node app.js
)
pause