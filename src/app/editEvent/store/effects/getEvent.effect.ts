import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {HttpErrorResponse} from '@angular/common/http'
import {Router} from '@angular/router'
import {of} from 'rxjs'

import {
  createArticleSuccessAction,
  createArticleFailureAction,
  createArticleAction
} from 'src/app/createArticle/store/actions/createArticle.action'
import {ArticleInterface} from 'src/app/shared/types/article.interface'
import {ArticleService as SharedArticleService} from 'src/app/shared/services/article.service'
import {
  getEventAction,
  getArticleSuccessAction,
  getArticleFailureAction
} from '../actions/getEvent.action'

@Injectable()
export class GetEventEffect {
  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getEventAction),
      switchMap(({slug}) => {
        return this.sharedArticleService.getArticle(slug).pipe(
          map((article: ArticleInterface) => {
            return getArticleSuccessAction({article})
          }),

          catchError(() => {
            return of(getArticleFailureAction())
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private sharedArticleService: SharedArticleService,
    private router: Router
  ) {}
}
