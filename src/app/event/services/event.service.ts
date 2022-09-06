import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'

@Injectable()
export class EventService {

  deleteEvent(id: string): Observable<{}> {
    localStorage.removeItem(id);

    return new Observable;
  }
}
