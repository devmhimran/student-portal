import { Schema, model } from 'mongoose'
import { IAcademicSemester } from './academicSemester.interface'

const academicSemesterSchema = new Schema<IAcademicSemester>({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  startMonth: {
    type: String,
    required: true,
  },
  endMonth: {
    type: String,
    required: true,
  },
})

export const AcademicSemester = model<IAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema
)
