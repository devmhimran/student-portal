import express from 'express'
import { UserController } from './users.controller'
import validateRequest from '../../../errors/validateRequest'
import { UserValidation } from './user.validate'

const router = express.Router()

router.post(
  '/create-user',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createUserController
)

export const UsersRoutes = router
