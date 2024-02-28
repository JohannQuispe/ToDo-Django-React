#SetUp Backend
##1 clone repository
git@github.com:JohannQuispe/ToDo-Django-React.git
##2 create env file and activate
- python3 -m venv env 
- source env/bin/activate
##3 install dependencies of django 
pip install -r requirements.txt
##4 
python manage.py makemigrations
##5 
python manage.py migrate

#SetUp Frontend
##1 in Frontend directory 
- npm install
- npm run dev