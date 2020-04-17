import { IResponse } from '../interfaces/interface.response';

export class SuccessResponse implements IResponse {
    error: object = null;
    status: number;
    data: object;
    hasError = false;

    constructor(data: object, status: number) {
        this.data = data;
        this.status = status;
    }
}
