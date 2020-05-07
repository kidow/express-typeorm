import { EventSubscriber, EntitySubscriberInterface } from 'typeorm'
import User from 'entities/User'

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {}
