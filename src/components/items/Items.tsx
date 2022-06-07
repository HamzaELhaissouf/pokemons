import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchItemsRequest } from "../../store/actions";
import { loadMoreItemsRequest } from "../../store/actions/items/actions";
import { getItemsSelector } from "../../store/selectors";
import { getHasMoreSelector, getIsLoadingSelector } from "../../store/selectors/items/selectors";
import { Item } from "../../store/types";
import ItemCard from "./ItemCard";
import poke from "../../assets/poke.png";
import ItemModal from "./ItemModal";
import Loader from '../../assets/loader.gif'



const Items = () => {
    const dispatch = useDispatch();
    const items = useSelector(getItemsSelector);
    const hasMore = useSelector(getHasMoreSelector);
    const isLoading = useSelector(getIsLoadingSelector);

    useEffect(() => {
        dispatch(fetchItemsRequest());
    }, []);

    const fetchMore = () => { if (isLoading === false) dispatch(loadMoreItemsRequest(1000 + items.length)); }

    return (

        <div
            id="scrollableDiv"
        >
            <InfiniteScroll
                dataLength={items.length}
                next={fetchMore}
                hasMore={hasMore}
                loader={(<div className="w-1/12 mx-auto my-10">
                    <img className="h-12 w-12 animate-bounce" src={poke} />
                </div>)
                }
                endMessage={
                    <p className="text-center my-10">
                        <b> You have seen all the pokemons</b>
                    </p>
                }
            >

                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only" >Products</h2>
                    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {items.map((item: Item, index: number) => (<ItemCard item={{ ...item, id: index + 1 }} key={item.id} />))}
                    </div>
                </div>

            </InfiniteScroll>
            <ItemModal />
        </div>
    )
}

export default Items

