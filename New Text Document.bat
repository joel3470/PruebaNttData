@echo off
:: Set the project name
set /p projectName=ProyectoAsistencia: 

:: Create project folder
mkdir %projectName%
cd %projectName%

:: Initialize npm
npm init -y

:: Install necessary packages
npm install express body-parser jsonwebtoken bcrypt sequelize pg pg-hstore dotenv

:: Create folder structure
mkdir src
mkdir src\application
mkdir src\application\services
mkdir src\domain
mkdir src\domain\models
mkdir src\domain\repositories
mkdir src\infrastructure
mkdir src\infrastructure\database
mkdir src\infrastructure\database\migrations
mkdir src\infrastructure\database\models
mkdir src\infrastructure\security
mkdir src\infrastructure\web
mkdir src\infrastructure\web\controllers
mkdir src\infrastructure\web\routes
mkdir src\config

:: Create empty files
type nul > src\application\services\AuthService.js
type nul > src\application\services\CompanyService.js
type nul > src\application\services\UserService.js
type nul > src\domain\models\Company.js
type nul > src\domain\models\User.js
type nul > src\domain\repositories\CompanyRepository.js
type nul > src\domain\repositories\UserRepository.js
type nul > src\infrastructure\database\models\CompanyModel.js
type nul > src\infrastructure\database\models\UserModel.js
type nul > src\infrastructure\database\db.js
type nul > src\infrastructure\security\jwt.js
type nul > src\infrastructure\security\password.js
type nul > src\infrastructure\web\controllers\AuthController.js
type nul > src\infrastructure\web\controllers\CompanyController.js
type nul > src\infrastructure\web\controllers\UserController.js
type nul > src\infrastructure\web\routes\authRoutes.js
type nul > src\infrastructure\web\routes\companyRoutes.js
type nul > src\infrastructure\web\routes\userRoutes.js
type nul > src\infrastructure\web\server.js
type nul > src\config\config.js
type nul > src\config\env\development.js
type nul > src\config\env\production.js

:: Create .env file
type nul > .env

:: Create .gitignore file
type nul > .gitignore

:: Create README.md file
type nul > README.md

echo Project structure created successfully.