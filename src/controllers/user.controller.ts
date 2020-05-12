import { JsonController, Param, Body, Get, Post, Put, Delete } from 'routing-controllers'
import { UserRepository } from 'repositories'
import User from 'entities/user.entity'

@JsonController()
export default class UserController {
  private userRepo = new UserRepository()

  @Get('/users')
  async getAll() {
    return await this.userRepo.findAll()
  }

  @Get('/users/:id')
  async getOne(@Param('id') id: number) {
    return await this.userRepo.findById(id)
  }

  @Post('/users')
  async post(@Body() user: User) {
    return await this.userRepo.store(user)
  }

  @Put('/users/:id')
  put(@Param('id') id: number, @Body() user: User) {
    return 'Updating a user...'
  }

  @Delete('/users/:id')
  async remove(@Param('id') id: number) {
    const userToRemove = await this.userRepo.findById(id)
    return await this.userRepo.remove(userToRemove)
  }
}
