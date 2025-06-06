pipeline {
    agent any  
    
    parameters {
        choice(
            name: 'ENV',
            choices: ['dev', 'prod'],
            description: 'Выберите окружение для деплоя'
        )
    }
    stages {
        stage('Prepare') {
            steps {
                echo " Deploying to ${params.ENV}"
                cleanWs()  
            }
        }
        stage('Deploy') {
            steps {
                script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'my-ssh-server', 
                                transfers: [
                                    sshTransfer(
                                        sourceFiles: '**/*',  
                                        removePrefix: 'workspace/',  
                                        remoteDirectory: "app-${params.ENV}", 
                                        execCommand: "echo 'Файлы скопированы в /var/www/app-${params.ENV}'"
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        }
    }
}
