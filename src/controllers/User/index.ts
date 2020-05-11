import { getRepository } from 'typeorm'
import User from 'entities/User'
import { JsonController, Param, Body, Get, Post, Put, Delete } from 'routing-controllers'

@JsonController()
export default class UserController {
  private repository = getRepository(User)

  @Get('/users')
  async getAll() {
    return await this.repository.find()
  }

  @Get('/users/:id')
  async getOne(@Param('id') id: number) {
    return await this.repository.findOne(id)
  }

  @Post('/users')
  async post(@Body() user: User) {
    return await this.repository.save(user)
  }

  @Put('/users/:id')
  put(@Param('id') id: number, @Body() user: User) {
    return 'Updating a user...'
  }

  @Delete('/users/:id')
  async remove(@Param('id') id: number) {
    const userToRemove = await this.repository.findOne(id)
    return await this.repository.remove(userToRemove)
  }
}
