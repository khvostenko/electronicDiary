import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class RequestService {
    constructor(private http: Http) {

    }

    private _baseUrl = 'api/';

    get(url: String) {
        let headers = new Headers({ 'authorization': 'bearer' + localStorage.getItem('token') });
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this._baseUrl + url, options).catch(this.handleError);
    }

    post(url: String, obj: any) {
        let headers = new Headers({ 'authorization': 'bearer' + localStorage.getItem('token') });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this._baseUrl + url, obj, options).catch(this.handleError);
    }

    put(url: String, obj: any) {
        let headers = new Headers({ 'authorization': 'bearer' + localStorage.getItem('token') });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(this._baseUrl + url, obj, options).catch(this.handleError);
    }

    delete(url: String) {
        let headers = new Headers({
            'Content-type': 'application/json',
            'Authorization': 'bearer' + localStorage.getItem('token')
        });
        let options = new RequestOptions({ headers: headers });

        return this.http.delete(this._baseUrl + url, options).catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}