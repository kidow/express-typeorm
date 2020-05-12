import { JsonController, Param, Body, Get, Post, Put, Delete } from 'routing-controllers'
import { UserRepository } from 'repositories'
import User from 'entities/user.entity'

@JsonController()
export default class UserController {
  private userRepo = new UserRepository()

  @Get('/users')
  getAll() {
    return this.userRepo.findAll()
  }

  @Get('/users/:id')
  getOne(@Param('id') id: number) {
    return this.userRepo.findById(id)
  }

  @Post('/users')
  post(@Body() user: User) {
    return this.userRepo.store(user)
  }

  @Put('/users/:id')
  put(@Param('id') id: number, @Body() user: User) {
    return 'Updating a user...'
  }

  @Delete('/users/:id')
  remove(@Param('id') id: number) {
    return this.userRepo.removeOne(id)
  }
}
