export class MLDataModel {
  public _id: string;
  public car_brand: string;
  public car_model: string;
  public price: number;
  public year: number;
  public body: string;
  public color: string;
  public engine_volume: number;
  public engine_power: number;
  public engine_type: string;
  public transmission: string;
  public rudder: string;

  constructor(r: any) {
    if (r.body === undefined) {
      return;
    }

    this._id = r.body._id;
    this.car_brand = r.body.car_brand;
    this.car_model = r.body.car_model;
    this.price = r.body.price;
    this.year = r.body.year;
    this.body = r.body.body;
    this.color = r.body.color;
    this.engine_volume = r.body.engine_volume;
    this.engine_power = r.body.engine_power;
    this.engine_type = r.body.engine_type;
    this.transmission = r.body.transmission;
    this.rudder = r.body.rudder;
  }
}
