import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionsTypes'
import {ArticleInterface} from 'src/app/shared/types/article.interface'

export const getEventAction = createAction(
  ActionTypes.GET_ARTICLE,
  props<{slug: string}>()
)

export const getArticleSuccessAction = createAction(
  ActionTypes.GET_ARTICLE_SUCCESS,
  props<{article: ArticleInterface}>()
)

export const getArticleFailureAction = createAction(
  ActionTypes.GET_ARTICLE_FAILURE
)