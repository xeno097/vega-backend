import { IErrorPayload } from './error-payload.interface';

export interface IResponsePayload {
  ok: boolean;
  data: any;
  errors: IErrorPayload[];
}
