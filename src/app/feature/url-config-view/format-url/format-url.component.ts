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
  shortenedUrl: string = '';
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

  shortenUrl(): void {
    if (this.urlForm.valid) {
      const longUrl = this.urlForm.get('longUrl')?.value;
      const urlInformationDTO : IUrlInformationDTO = new UrlInformationDTO();
      urlInformationDTO.longUrl = longUrl

      this.urlShortenerService.shortenUrl(urlInformationDTO).subscribe(
        (response: any) => {
          this.shortenedUrl = response;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  expandUrl(): void {
    if (this.expandUrlForm.valid) {
      const shortUrl = this.expandUrlForm.get('shortUrl')?.value;
      const urlInformationDTO : IUrlInformationDTO = new UrlInformationDTO();
      urlInformationDTO.shortUrl = shortUrl

      this.urlShortenerService.expandUrl(urlInformationDTO).subscribe(
        (response: any) => {
          this.expandedUrl = response;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
