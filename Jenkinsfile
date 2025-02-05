pipeline {
    agent any

    environment {
        VENV = "venv"  // Virtual environment name
        PYTHON = isUnix() ? "python3" : "python"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/DIVYAKRISHNASATYASRI/Devops.git'
            }
        }

        stage('Setup Python Environment') {
            steps {
                script {
                    if (isUnix()) {
                        sh '${PYTHON} -m venv ${VENV}'
                        sh 'source ${VENV}/bin/activate'
                    } else {
                        bat '${PYTHON} -m venv ${VENV}'
                        bat 'call ${VENV}\\Scripts\\activate'
                    }
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    if (isUnix()) {
                        sh '${VENV}/bin/pip install --upgrade pip'
                        sh '${VENV}/bin/pip install -r requirements.txt'
                    } else {
                        bat '${VENV}\\Scripts\\pip install --upgrade pip'
                        bat '${VENV}\\Scripts\\pip install -r requirements.txt'
                    }
                }
            }
        }

        stage('Run Flask Application') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'nohup ${VENV}/bin/python app.py &'
                    } else {
                        bat 'start /B ${VENV}\\Scripts\\python app.py'
                    }
                }
            }
        }
    }
}
