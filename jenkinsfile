pipeline {
    agent any

    environment {
        VENV = "venv"  // Name of the virtual environment
        PYTHON = "python3"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/DIVYAKRISHNASATYASRI/Devops.git'  // Replace with your actual repo URL
            }
        }
        stage('Setup Python Environment') {
            steps {
                sh '${PYTHON} -m venv ${VENV}'  // Create virtual environment
                sh 'source ${VENV}/bin/activate'  // Activate virtual environment (Linux/macOS)
            }
        }
        stage('Install Dependencies') {
            steps {
                sh '${VENV}/bin/pip install --upgrade pip'
                sh '${VENV}/bin/pip install -r requirements.txt'  // Install Flask and dependencies
            }
        }
        stage('Run Flask Application') {
            steps {
                sh 'nohup ${VENV}/bin/python app.py &'  // Run Flask app in background
            }
        }
    }
}
