// import { NextFunction, Request, Response } from 'express'
import { RequestHandler } from 'express'
import { UserService } from './users.service'

const createUserController: RequestHandler = async (req, res, next) => {
  try {
    const { user } = req.body
    const result = await UserService.createUserService(user)

    res.status(200).json({
      success: true,
      message: 'Successfully user create',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

export const UserController = {
  createUserController,
}
