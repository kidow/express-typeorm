import { EventSubscriber, EntitySubscriberInterface } from 'typeorm'
import User from 'entities/user.entity'

@EventSubscriber()
export default class UserSubscriber implements EntitySubscriberInterface<User> {}
