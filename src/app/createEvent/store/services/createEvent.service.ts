import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

import {EventInputInterface} from 'src/app/shared/types/eventInput.interface'
import {EventInterface} from 'src/app/shared/types/event.interface'
import {environment} from 'src/environments/environment'
import {SaveEventResponseInterface} from 'src/app/shared/types/saveEventResponse.interface'

@Injectable()
export class CreateEventService {
  constructor(private http: HttpClient) {}

  createEvent(
    eventInput: EventInputInterface
  ): Observable<EventInterface> {
    const fullUrl = environment.apiUrl + '/events'
    return this.http
      .post<SaveEventResponseInterface>(fullUrl, eventInput)
      .pipe(
        map((response: SaveEventResponseInterface) => {
          return response.event
        })
      )
  }
}
