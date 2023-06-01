import { User } from './users.mode'
import { IUser } from './users.interface'
import config from '../../../config/index'
import { generateUserId } from './users.utils'

export const createUserService = async (user: IUser): Promise<IUser | null> => {
  console.log(user, 'user')
  const id = await generateUserId()

  user.id = id
  if (!user.password) {
    user.password = config.default_user_password as string
  }
  const createUser = await User.create(user)
  if (!createUser) {
    throw new Error('Failed to create user !!!')
  }
  // console.log(createUser)
  return createUser
}
