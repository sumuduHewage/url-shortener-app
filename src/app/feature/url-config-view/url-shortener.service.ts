import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUrlInformationDTO} from "./util/UrlInformationDTO";

@Injectable({
  providedIn: 'root'
})
export class UrlShortenerService {
  private apiUrl: string = environment.api_url;
  constructor(private http: HttpClient) { }

  shortenUrl(urlInformationDTO: IUrlInformationDTO): Observable<IUrlInformationDTO> {
    return this.http.post<IUrlInformationDTO>(`${this.apiUrl}/api/shorten-url`, urlInformationDTO);
  }

  expandUrl(urlInformationDTO: IUrlInformationDTO): Observable<IUrlInformationDTO> {
    return this.http.post<IUrlInformationDTO>(`${this.apiUrl}/api/expand-url`, urlInformationDTO);
  }
}
