import { JsonController, Get, Post } from 'routing-controllers'

@JsonController('/comments')
export default class CommentController {
  @Get()
  getAll() {
    return '/comments'
  }

  @Post()
  post() {
    return 'comment make'
  }
}
