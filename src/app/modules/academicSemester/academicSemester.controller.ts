import { NextFunction, Request, Response } from 'express'
import { AcademicSemesterService } from './academicSemester.service'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { IAcademicSemester } from './academicSemester.interface'
import pick from '../../../shared/pick'
import { paginationsFields } from '../../../constans/pagination'

const createSemesterController = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    )

    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Successfully Academic Semester create',
      // mete: {},
      data: result,
    })
    next()
  }
)

const getAllSemesters = catchAsync(
  // eslint-disable-next-line no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const paginations = pick(req.query, paginationsFields)
    const filters = pick(req.query, ['searchTerm'])
    const result = await AcademicSemesterService.getAllSemesters(
      filters,
      paginations
    )

    console.log(result)

    sendResponse<IAcademicSemester[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Data Successfully Retrieve',
      meta: result.meta,
      data: result.data,
    })
  }
)

export const AcademicSemesterController = {
  createSemesterController,
  getAllSemesters,
}
