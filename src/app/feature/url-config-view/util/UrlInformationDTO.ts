export interface IUrlInformationDTO {
  longUrl?: string;
  shortUrl?: string;
}

export class UrlInformationDTO implements IUrlInformationDTO {
  constructor(
    public longUrl?: string,
    public shortUrl?: string,
  ) {}
}
