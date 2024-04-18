from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from werkzeug.security import generate_password_hash

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///poopbet.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'poopbet'


#init db
db = SQLAlchemy(app)
migrate = Migrate(app, db)

CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})



# establish user model 
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(32), unique=True, nullable=False)
    password = db.Column(db.String(64), nullable=False)

    def __repr__(self):
        return f'<User {self.username}>'
    
    def set_pw(self, password):
        self.password = generate_password_hash(password)


# signup function to save password and username
@app.route('/signup', methods=['POST'])
def signup_init():
    data = request.json
    username = data.__getattribute__('username')
    password = data.__getattribute__('password')

    if not username or not password:
        return jsonify({'message': 'missing username or password'}), 400
    
    user = User(username=username)
    user.set_pw(password)
    db.session.add(user)
    db.session.commit()

    return jsonify({'message': 'User created'}), 201


# login function using the saved user and password
@app.route('/login', methods=['POST'])
def login_init():
    data = request.json
    username = data.__getattribute__('username')
    pw = data.__getattribute__('password')

    if not user or not pw:
        return jsonify({'message': 'Please enter both username and password'}), 400
    
    user = User.query.filter_by(username=username).first()

    return jsonify({'message': 'Ready to Bet'})


@app.route('/')
def test():
    return "testing of main app route function "

# execute app
if __name__ == '__main__':
    print('Hello There')
    app.run(debug=True)

