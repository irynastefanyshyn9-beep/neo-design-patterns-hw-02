import { IRecipientData } from "../core/interfaces";

export class User implements IRecipientData {
  constructor(
    public email: string,
    public phone: string,
    public deviceToken: string
  ) {}
}
