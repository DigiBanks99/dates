@echo off

cd Dates
call dotnet build
echo -------------------------------------------------------
call dotnet run
cd ..

@echo on
