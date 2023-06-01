import { Request, Response } from 'express'
import { createUserService } from './users.service'

export const createUserController = async (req: Request, res: Response) => {
  try {
    const { user } = req.body

    const result = await createUserService(user)

    res.status(200).json({
      success: true,
      message: 'Successfully user create',
      data: result,
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'failed to create user',
    })
  }
}
