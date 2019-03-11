export class Image {

  public format: string;
  public width: string;
  public height: string;
  public filename: string;
  public id: number;
  public author: string;
  public author_url: string;
  public post_url: string;

  constructor(data: any = null) {
    if (data) {
      this.format = data.format;
      this.width = data.width;
      this.height = data.height;
      this.filename = data.filename;
      this.id = data.id;
      this.author = data.author;
      this.author_url = data.author_url;
      this.post_url = data.post_url;
    }
  }

  get src(): string {
    return 'https://picsum.photos/200/100?image=' + this.id;
  }

}
