import { noContent, ok, HttpResponse } from "../utils/http-helper";

export const getPlayerService = async (): Promise<HttpResponse> => {
    const data = { player: "ViniJr" };
    let response: HttpResponse;

    if (data) {
        response = await ok(data);
    } else {
        response = await noContent(); 
    }

    return response;
};
