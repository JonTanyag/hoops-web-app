import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { StudentModel } from '../interface/Student';

class GetDataService {

    getPlayers() {

        return ajax('https://api.hatchways.io/assessment/students').pipe(
            map(res => res?.response?.students.map((item :StudentModel) => {
                item.tagList = [];
                item.tag = '';
                return item;
            }) || [])
        );
    }

}

export const $GetDataService = new GetDataService();