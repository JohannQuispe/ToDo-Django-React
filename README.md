## **SetUp Backend**
### clone repository
```
git@github.com:JohannQuispe/ToDo-Django-React.git
```
### create env file and activate
```
python3 -m venv env 
source env/bin/activate
```
### install dependencies of django 
```
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
```
##SetUp Frontend
### On Frontend directory 
```
npm install
npm run dev
```
