import express from 'express'
import validateRequest from '../../../errors/validateRequest'
import { academicSemesterValidation } from './academicSemester.validation'

const router = express.Router()

router.post(
  '/create-user',
  validateRequest(academicSemesterValidation.academicSemesterZodSchema)
)

export const academicSemester = router
