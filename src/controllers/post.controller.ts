import { JsonController, Get, Param, Post, Body } from 'routing-controllers'

@JsonController('/posts')
export default class PostController {
  @Get()
  getAll() {
    return '/posts'
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return id
  }

  @Post()
  create(@Body() post) {
    return 'create'
  }
}
