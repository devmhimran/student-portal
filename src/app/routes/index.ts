import express from 'express'
import { UsersRoutes } from '../modules/users/users.router'
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route'
const router = express.Router()

const moduleRoutes = [
  {
    path: '/users',
    route: UsersRoutes,
  },
  {
    path: '/academic-semesters/',
    route: AcademicSemesterRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

// router.use('/users/', UsersRoutes)
// router.use('/academic-semesters/', AcademicSemesterRoutes)

export default router
