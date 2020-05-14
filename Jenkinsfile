pipeline {
  agent {
    node {
      label 'master'
    }
  environment {
      SLACK_CHANNEL = '#dev-project'
      SLACK_TOKEN = "credentials('slack_token')"
      SLACK_PREFIX = 'first-jenkins'
    }
  }
  stages {
    stage('Send Message') {
      when {
        branch "master"
      }
      steps {
        sh "ls -al"
      }
      post {
        success {
          slackSend(
            channel: '${env.SLACK_CHANNEL}', 
            color: 'good',
            token: "${env.SLACK_TOKEN}",
            message: '${SLACK_PREFIX} success', blocks: '.', token: '${SLACK_CHANNEL}'
          )
        }
        failure {
          slackSend(
            channel: '${env.SLACK_CHANNEL}', 
            color: 'danger', 
            token: "${env.SLACK_TOKEN}",
            message: '${SLACK_PREFIX} failure', blocks: '.', token: '${SLACK_CHANNEL}'
          )
        }
      }
    }
  }
}