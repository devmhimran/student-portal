import { User } from './users.mode'

// let lastUserId = 0

export const lastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean()
  console.log(lastUser)
  return lastUser?.id
}

export const generateUserId = async () => {
  const currentId = (await lastUserId()) || (0).toString().padStart(5, '0')
  console.log(currentId, 'Current Id')
  const incrementId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  //   console.log(incrementId)
  return incrementId
  //   lastUserId++
}
