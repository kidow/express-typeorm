import { JsonController, Param, Body, Get, Post, Put, Delete } from 'routing-controllers'
import { UserRepository } from 'repositories'
import User from 'entities/user.entity'
// entity가 모듈화가 안돼

@JsonController('/users')
export default class UserController {
  private userRepo = new UserRepository()

  // /v1 식의 버전 라우팅이 필요할까?
  @Get()
  getAll() {
    return this.userRepo.findAll()
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return this.userRepo.findById(id)
  }

  @Post()
  post(@Body() user: User) {
    return this.userRepo.store(user)
  }

  @Put('/:id')
  put(@Param('id') id: number, @Body() user: User) {
    return 'Updating a user...'
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.userRepo.removeOne(id)
  }
}
