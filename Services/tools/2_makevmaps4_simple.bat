@echo off
echo Extracting vmaps
vmap4extractor.exe
md vmaps
vmap4assembler.exe Buildings vmaps
pause