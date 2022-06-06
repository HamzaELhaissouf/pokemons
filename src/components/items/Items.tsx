import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchItemsRequest } from "../../store/actions";
import { getItemsSelector } from "../../store/selectors";
import ItemCard from "./ItemCard";



const Items = () => {
    const dispatch = useDispatch();
    const items = useSelector(getItemsSelector);

    useEffect(() => {
        dispatch(fetchItemsRequest());
    }, []);

    return (
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {items.map((item, index: number) => (<ItemCard item={{ ...item, id: index + 1 }} key={item.id} />))}
            </div>
        </div>
    )
}

export default Items

