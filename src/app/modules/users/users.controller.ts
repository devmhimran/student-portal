// import { NextFunction, Request, Response } from 'express'
import { RequestHandler } from 'express'
import { UserService } from './users.service'
import { z } from 'zod'

const createUserController: RequestHandler = async (req, res, next) => {
  try {
    // const createUserZodSchema = z.object({
    //   body: z.object({
    //     role: z.string({
    //       required_error: 'role is require',
    //     }),
    //     password: z.string().optional(),
    //   }),
    // })

    // await createUserZodSchema.parseAsync(req)

    const { user } = req.body
    const result = await UserService.createUserService(user)

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

export const UserController = {
  createUserController,
}
