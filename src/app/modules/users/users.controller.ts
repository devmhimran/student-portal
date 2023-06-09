// import { NextFunction, Request, Response } from 'express'
import { RequestHandler } from 'express'
import { createUserService } from './users.service'

export const createUserController: RequestHandler = async (req, res, next) => {
  try {
    const { user } = req.body
    const result = await createUserService(user)

    res.status(200).json({
      success: true,
      message: 'Successfully user create',
      data: result,
    })
  } catch (err) {
    next(err)
    // res.status(400).json({
    //   success: false,
    //   message: 'failed to create user',
    // })
  }
}
