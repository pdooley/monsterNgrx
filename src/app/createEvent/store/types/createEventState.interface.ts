import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'

export interface CreateEventStateInterface {
  isSubmitting: boolean
  validationErrors: BackendErrorsInterface | null
}
