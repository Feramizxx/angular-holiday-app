import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CountryDetail } from "../models/country-detail";
import { Holiday } from "../models/holiday.model";
import { Country } from "../models/country.model";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class CountryService {
  private apiUrl = environment.apiUrl;
  private countryInfoUrl = environment.countryInfoUrl;
  private nextHolidayUrl = environment.nextHolidayUrl;
  private publicHolidaysUrl = environment.publicHolidaysUrl;

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl);
  }
  getCountryDetails(countryCode: string): Observable<CountryDetail> {
    return this.http.get<CountryDetail>(`${this.countryInfoUrl}${countryCode}`);
  }

  getNextPublicHolidays(countryCode: string): Observable<Holiday[]> {
    return this.http.get<Holiday[]>(`${this.nextHolidayUrl}${countryCode}`);
  }

  getPublicHolidays(year: number, countryCode: string): Observable<Holiday[]> {
    return this.http.get<Holiday[]>(
      `${this.publicHolidaysUrl}/${year}/${countryCode}`,
    );
  }
}
