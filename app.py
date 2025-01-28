from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = 'your_secret_key'

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/register', methods=['POST'])
def register():
    # Get form data
    fullname = request.form['fullname']
    username = request.form['username']
    email = request.form['email']
    phno = request.form['phno']
    pwd = request.form['pwd']
    confirmpwd = request.form['confirmpwd']
    gender = request.form['gender']

    # Server-side password validation
    if pwd != confirmpwd:
        flash("Passwords do not match.")
        return redirect(url_for('index'))  # Go back to the registration page

    # Redirect to success page after successful registration
    flash("Registration successful!")
    return redirect(url_for('success'))

@app.route('/success')
def success():
    return render_template('note.html')

if __name__ == '__main__':
    app.run(debug=True)
