export class Employee {
  constructor(_id = "", name = "", incident = "", office = "", traking = 0) {
    this._id = _id;
    this.name = name;
    this.incident = incident;
    this.office = office;
    this.traking = traking;
  }

  _id: string;
  name: string;
  incident: string;
  office: string;
  traking: number;
}
