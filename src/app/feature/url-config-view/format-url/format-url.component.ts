import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UrlShortenerService} from "../url-shortener.service";
import {IUrlInformationDTO, UrlInformationDTO} from "../util/UrlInformationDTO";

@Component({
  selector: 'app-format-url',
  templateUrl: './format-url.component.html',
  styleUrls: ['./format-url.component.scss']
})
export class FormatUrlComponent implements OnInit {
  urlForm: FormGroup = new FormGroup({});
  expandUrlForm: FormGroup = new FormGroup({});
  shortenedUrl: string | undefined = '';
  shortenedUrlLink: string | undefined = '';
  expandedUrl: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private urlShortenerService: UrlShortenerService
  ) {}

  ngOnInit(): void {
    this.urlForm = this.formBuilder.group({
      longUrl: ['', [Validators.required, Validators.pattern('^https?://.+$')]]
    });

    this.expandUrlForm = this.formBuilder.group({
      shortUrl: ['', [Validators.required, Validators.pattern('^http?://.+$')]]
    });
  }

  public shortenUrl(): void {
    if (this.urlForm.valid) {
      const longUrl = this.urlForm.get('longUrl')?.value;
      const urlInformationDTO : IUrlInformationDTO = new UrlInformationDTO();
      urlInformationDTO.longUrl = longUrl

      this.urlShortenerService.shortenUrl(urlInformationDTO).subscribe(
        (response: IUrlInformationDTO) => {
          if(response != undefined){
            this.shortenedUrl = response.shortUrl;
            this.shortenedUrlLink = response.longUrl;
          }

        },
        (error: any): any => {
          console.error(error);
        }
      );
    }
  }

  public expandUrl(): void {
    if (this.expandUrlForm.valid) {
      const shortUrl = this.expandUrlForm.get('shortUrl')?.value;
      const urlInformationDTO : IUrlInformationDTO = new UrlInformationDTO();
      urlInformationDTO.shortUrl = shortUrl

      this.urlShortenerService.expandUrl(urlInformationDTO).subscribe(
        (response: any) => {
          if(response != undefined){
            this.expandedUrl = response.longUrl;
          }

        },
        (error: any) => {
          console.error(error);
        }
      );
    }
  }
}
