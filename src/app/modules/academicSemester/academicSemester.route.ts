import express from 'express'
import validateRequest from '../../../errors/validateRequest'
import { academicSemesterValidation } from './academicSemester.validation'
import { AcademicSemesterController } from './academicSemester.controller'

const router = express.Router()

router.post(
  '/create-semester',
  validateRequest(academicSemesterValidation.academicSemesterZodSchema),
  AcademicSemesterController.createSemesterController
)

export const AcademicSemesterRoutes = router
