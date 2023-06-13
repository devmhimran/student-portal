import { RequestHandler } from 'express'
import { AcademicSemesterService } from './academicSemester.service'

const createSemesterController: RequestHandler = async (req, res, next) => {
  try {
    const { ...academicSemesterData } = req.body
    console.log(academicSemesterData)
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    )

    res.status(200).json({
      success: true,
      message: 'Successfully Academic Semester create',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

export const AcademicSemesterController = {
  createSemesterController,
}
