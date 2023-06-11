import { ZodError, ZodIssue } from 'zod'
import { IGenericErrorResponse } from '../interfaces/common'
import { IGenericErrorMessage } from '../interfaces/error'

const handleZodError = (err: ZodError): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    }
  })

  console.log(errors)
  //   console.log(err, 'issue error/////')

  const statusCode = 400
  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: errors,
  }
}

export default handleZodError
