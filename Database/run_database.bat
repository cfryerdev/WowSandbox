@echo off
echo Starting MySQL ...
mysql\bin\mysqld --defaults-file=mysql\bin\my.ini --standalone --console

if errorlevel 1 goto error
goto finish

:error
echo.
echo MySQL could not be started.
pause

:finish
