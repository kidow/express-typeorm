import { EventSubscriber, EntitySubscriberInterface } from 'typeorm'
import User from '../entities/user.entity'

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {}
