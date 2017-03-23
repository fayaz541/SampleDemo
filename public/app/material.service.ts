import {Injectable} from "@angular/core";
import {Response , Http, Headers, RequestOptions} from "@angular/http";
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import {Material} from "./material";

@Injectable()
export class MaterialService {
    private jsonUrl: string = "./app/data.json";
    constructor(private http: Http) {

    }

    getMaterials(): Observable<Material[]> {
        return this.http.get(this.jsonUrl)
                .map((response: Response) => <Material[]>response.json())
                .do(data => JSON.stringify(data))
                .catch(this.handleError);
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); 
        return Observable.throw(errMsg);
    }
}