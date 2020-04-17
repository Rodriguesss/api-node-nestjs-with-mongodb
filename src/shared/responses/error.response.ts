import { IResponse } from '../interfaces/interface.response';

export class ErrorResponse implements IResponse {
    error: object;
    status: number;
    data: object = null;
    hasError = true;

    constructor(error: object, status: number) {
        this.error = error;
        this.status = status;
    }
}
