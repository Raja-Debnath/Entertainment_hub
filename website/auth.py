from flask import Blueprint, render_template , request,flash

auth = Blueprint('auth',__name__)


@auth.route('/login', methods = ['POST', 'GET'])
def login():
    return render_template("LOGIN.html")

@auth.route('/logout')
def logout():
    return "<p>logout</p>"

@auth.route('/sign_up', methods = ['POST', 'GET'])
def sign_up():
    return render_template("SIGN UP.html")

