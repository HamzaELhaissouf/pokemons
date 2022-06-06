import { FETCH_ITEMS_FAILURE } from './../../actionTypes';
// App imports
import { FETCH_ITEMS_REQUEST, FETCH_ITEMS_SUCCESS } from "../../actionTypes";
import { fetchItemsFailure, fetchItemsRequest, fetchItemsSuccess } from "../items/actions";
import GetItemsMock from '../../data/GetItemsMock';

// Tests
describe('fetch Items request', () => {
    it('Fetch Items request', () => {
        const action = fetchItemsRequest();
        expect(action).toEqual({
            type: FETCH_ITEMS_REQUEST,
        });
    });
});

describe('fetch Items success', () => {
    it('Fetch Items success', () => {
        const action = fetchItemsSuccess({ items: GetItemsMock });
        expect(action).toEqual({
            type: FETCH_ITEMS_SUCCESS,
            payload: { items: GetItemsMock }
        });
    });
});

describe('fetch Items failure', () => {
    let error: '';
    it('Fetch Items failure', () => {
        const action = fetchItemsFailure({ error });
        expect(action).toEqual({
            type: FETCH_ITEMS_FAILURE,
            payload: { error }
        });
    });
});



export { }