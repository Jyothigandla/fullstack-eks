pipeline {
    agent any

    environment {
        DOCKER_CREDS = credentials('dockerhub-creds')
    }

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/jyothigandla/fullstack-eks.git'
            }
        }

        stage('Build Backend Image') {
            steps {
                dir('backend') {
                    sh 'docker build -t nagajyothi30/backend:v1 .'
                }
            }
        }

        stage('Build Frontend Image') {
            steps {
                dir('frontend') {
                    sh 'docker build -t nagajyothi30/frontend:v1 .'
                }
            }
        }

        stage('Docker Login') {
            steps {
                sh 'echo $DOCKER_CREDS_PSW | docker login -u $DOCKER_CREDS_USR --password-stdin'
            }
        }

        stage('Push Backend Image') {
            steps {
                sh 'docker push nagajyothi30/backend:v1'
            }
        }

        stage('Push Frontend Image') {
            steps {
                sh 'docker push nagajyothi30/frontend:v1'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                dir('k8s') {
                    sh 'kubectl apply -f backend-deployment.yml'
                    sh 'kubectl apply -f frontend-deployment.yml'
                }
            }
        }
    }
}
