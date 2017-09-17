pipeline {
    agent {
        docker 'hub.c.163.com/library/node:7.7.2'
    }
    triggers {
        pollSCM('*/1 * * * *')
    }
    stages {
        stage('Build') {
            steps {
                sh "npm install -g cnpm --registry=https://registry.npm.taobao.org"
                sh "cnpm install"
                sh "cnpm run build"
                sh "rm -rf docker_build&&mkdir docker_build&&mv dist docker_build&&mv nginx.conf docker_build&&mv Dockerfile docker_build"
                sh "docker login -u $DOCKER_USER -p $DOCKER_PASS registry-vpc.cn-shanghai.aliyuncs.com"
                sh "docker build -t registry-vpc.cn-shanghai.aliyuncs.com/frontend/online-user ./docker_build"
                sh "docker push registry-vpc.cn-shanghai.aliyuncs.com/frontend/online-user:latest"
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploy.."
                sh 'curl "https://cs.console.aliyun.com/hook/trigger?triggerUrl=YzEwYjg0MzZmNGM3YzQyOWY5NGYzNmZmNDE5M2UwNjI4fG9ubGluZS1jbGFzcy11c2VyfHJlZGVwbG95fDE5ZmVjM2lkOHI3dWJ8&secret=3369353972504c516a36415a3763666828768706805800efe7ea68823eab0077"'
            }
        }
    }
}

