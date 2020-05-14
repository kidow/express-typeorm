import { JsonController, Get, Post, Delete } from 'routing-controllers'

@JsonController('/auth')
export default class AuthController {
  @Get('/me')
  Me() {
    return 'me'
  }

  @Post('/login')
  Login() {
    return 'login'
  }

  @Post('/signup')
  Signup() {
    return 'signup'
  }

  @Delete('/logout')
  Logout() {
    return 'token delete'
  }
}
