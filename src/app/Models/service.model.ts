export class Service {
  name: string;
  image: string;
  descripton: string;

  constructor(name: string,
    image: string,
    descripton: string) {
    this.name = name;
    this.image = image;
    this.descripton = descripton;
  }
}
