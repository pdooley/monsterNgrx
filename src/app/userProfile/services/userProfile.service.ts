import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {UserProfileInterface} from '../types/userProfile.interface'
import {HttpClient} from '@angular/common/http'
import {environment} from 'src/environments/environment'
import {map} from 'rxjs/operators'
import {GetUserProfileResponseInterface} from '../types/getUserProfileResponse.interface'

@Injectable()
export class UserProfileService {
  constructor(private http: HttpClient) {}

  getUserProfile(slug: string): Observable<UserProfileInterface> {
    const url = `${environment.apiUrl}/profiles/${slug}`

    return this.http
      .get(url)
      .pipe(
        map((response: GetUserProfileResponseInterface) => response.profile)
      )
  }
}
