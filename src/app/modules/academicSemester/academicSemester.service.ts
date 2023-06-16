import httpStatus from 'http-status'
import ApiError from '../../../errors/ApiErrors'
import { academicSemesterTitleCodeMapper } from './academicSemester.constant'
import { IAcademicSemester } from './academicSemester.interface'
import { AcademicSemester } from './academicSemester.model'
import { IPaginations } from '../../../interfaces/paginations'

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Semester Code')
  }
  const result = await AcademicSemester.create(payload)
  return result
}

const getAllSemesters = (paginationOptions: IPaginations) => {
  return paginationOptions
}

export const AcademicSemesterService = {
  createSemester,
  getAllSemesters,
}
