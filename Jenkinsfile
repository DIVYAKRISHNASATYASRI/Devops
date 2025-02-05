pipeline {
    agent any

    environment {
        VENV = "venv"  // Virtual environment name
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
                    def PYTHON = isUnix() ? "python3" : "python"
                    
                    if (isUnix()) {
                        sh "${PYTHON} -m venv ${VENV}"
                        sh "source ${VENV}/bin/activate"
                    } else {
                        bat "${PYTHON} -m venv ${VENV}"
                        bat "call ${VENV}\\Scripts\\activate"
                    }
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    def PIP = isUnix() ? "${VENV}/bin/pip" : "${VENV}\\Scripts\\pip"
                    
                    sh "${PIP} install --upgrade pip"
                    sh "${PIP} install -r requirements.txt"
                }
            }
        }

        stage('Run Flask Application') {
            steps {
                script {
                    def PYTHON_EXEC = isUnix() ? "${VENV}/bin/python" : "${VENV}\\Scripts\\python"
                    
                    if (isUnix()) {
                        sh "nohup ${PYTHON_EXEC} app.py &"
                    } else {
                        bat "start /B ${PYTHON_EXEC} app.py"
                    }
                }
            }
        }
    }
}
