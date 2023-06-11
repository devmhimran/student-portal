import { Model } from 'mongoose'

export type IAcademicSemesterMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December'

export type IAcademicSemester = {
  title: 'Autumn' | 'Summer' | 'Fall'
  year: string
  code: string
  startMonth: string
  endMonth: string
}

export type AcademicModel = Model<IAcademicSemester>
