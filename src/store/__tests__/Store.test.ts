import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';

// App imports
import createSagaMiddleware from 'redux-saga';
import GetItemsMock from '../data/GetItemsMock';
import ItemsSaga from '../sagas/items/sagas';
import { fetchItemsRequest, fetchItemsSuccess } from '../actions';


// Configure the mockStore function
const sagaMiddleware = createSagaMiddleware();
const mockStore = configureMockStore([sagaMiddleware]);

// Tests
describe('FETCH_ITEMS_REQUEST', () => {
    beforeEach(() => { moxios.install(); });
    afterEach(() => { moxios.uninstall(); });

    it('test FETCH_ITEMS_REQUEST, FETCH_ITEMS_SUCCESSS after successfuly fetching items', done => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: { results: GetItemsMock },
            });
        });

        const expectedActions = [
            fetchItemsRequest(),
            fetchItemsSuccess({ items: GetItemsMock })
        ];

        const initialState = {
            isLoading: false,
            items: [],
            error: null,
        };

        const store = mockStore(initialState);
        sagaMiddleware.run(ItemsSaga);

        store.subscribe(() => {
            const actions = store.getActions();
            if (actions.length >= expectedActions.length) {
                expect(actions).toEqual(expectedActions);
                done();
            }
        })

        store.dispatch(fetchItemsRequest());
    });
})