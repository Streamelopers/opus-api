import { Response } from "express"
import { HttpCodes } from "./HttpCodes";


export default (response: Response, payload: any, message: string, status: HttpCodes = HttpCodes.OK): Response => {
    const body = {
        message,
        success: true,
        data: []
    }; 

    if (!Array.isArray(payload)) {
        body.data = [ payload ];
    } else {
        body.data = [...payload];
    }

    if (status >= 300) {
        body.success = false;
    }
    
    return response.status(status).json(body).send();
}