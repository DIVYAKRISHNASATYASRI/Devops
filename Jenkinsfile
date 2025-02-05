pipeline {
    agent any

    environment {
        PYTHON = "python3"  // Use python3 for Linux or python for Windows
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/DIVYAKRISHNASATYASRI/Devops.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    def PIP = isUnix() ? "pip3" : "pip"
                    
                    sh "${PIP} install --upgrade pip"
                    sh "${PIP} install -r requirements.txt"
                }
            }
        }

        stage('Run Flask Application') {
            steps {
                script {
                    def PYTHON_EXEC = isUnix() ? "python3" : "python"
                    
                    if (isUnix()) {
                        sh "nohup ${PYTHON_EXEC} app.py &"
                    } else {
                        bat "start /B ${PYTHON_EXEC} app.py"
                    }
                }
            }
        }

        stage('Print Flask URL') {
            steps {
                script {
                    def ip = isUnix() ? sh(script: "hostname -I | awk '{print $1}'", returnStdout: true).trim() : bat(script: "ipconfig | findstr IPv4", returnStdout: true).trim()
                    echo "Flask app running at http://${ip}:5000"
                }
            }
        }
    }
}
