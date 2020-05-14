pipeline {
  agent {
    node {
      label 'slack-notification'
    }

  }
  stages {
    stage('send_message') {
      steps {
        slackSend(channel: '${env.SLACK_CHANNEL}', attachments: '.', color: 'good', message: '${SLACK_PREFIX} success', blocks: '.', token: '${SLACK_CHANNEL}')
      }
    }

  }
  environment {
    SLACK_CHANNEL = '#dev-project'
    SLACK_TOKEN = 'credentials(\'slack_token\')'
    SLACK_PREFIX = 'first-jenkins'
  }
}