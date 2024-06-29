pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                script {
                    // Checkout the code from  git
                    checkout scm
                }
            }
        }

        stage('Build Docker Images') {
            parallel {
                stage('Build Backend') {
                    steps {
                        script {
                            dir('backend') {
                                // Build the Docker image for the backend
                                sh 'docker build -t backend:latest .'
                            }
                        }
                    }
                }

                stage('Build Frontend') {
                    steps {
                        script {
                            dir('frontend') {
                                // Build the Docker image for the frontend
                                sh 'docker build -t frontend:latest .'
                            }
                        }
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deploy the Docker containers 
                    sh 'docker-compose up -d'
                }
            }
        }
    }

    post {
        always {
            script {
                // Cleanup unused Docker images
                sh 'docker system prune -f'
            }
        }

        success {
            echo 'Deployment succeeded!'
        }

        failure {
            echo 'Deployment failed!'
        }
    }
}
