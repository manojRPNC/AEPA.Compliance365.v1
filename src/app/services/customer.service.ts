import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}


export interface Customer {
    id?: number;
    name?: string;
    country?: Country;
    company?: string;
    date?: string;
    status?: string;
    activity?: number;
    representative?: Representative;
}


@Injectable({
    providedIn: 'root',
})



export class CustomerService {

    constructor(private http: HttpClient) { }

   

    getCustomersLarge() {
        return this.http.get<any>('assets/C365.AEPA/data/customers-large.json')
            .toPromise()
            .then(res => res.data as Customer[])
            .then(data => data);
    }

}
