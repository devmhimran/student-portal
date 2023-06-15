import { NextFunction, Request, Response } from 'express'
import { AcademicSemesterService } from './academicSemester.service'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'

const createSemesterController = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    )
    next()
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Successfully Academic Semester create',
      data: result,
    })

    // res.status(200).json({
    //   success: true,
    //   message: 'Successfully Academic Semester create',
    //   data: result,
    // })
  }
)

export const AcademicSemesterController = {
  createSemesterController,
}
