import { Transition } from "@headlessui/react"
import { useState } from "react"
import { Item } from "../../store/types"
import { InformationCircleIcon } from '@heroicons/react/solid'
import { upperFirstChar } from "../../utils"
import { useDispatch } from "react-redux"
import { fetchItemDetailsRequest } from "../../store/actions/items/actions"
import { dreamWorlUrl } from "../../config"

type ItemProps = {
    item: Item
}

const ItemCard = ({ item }: ItemProps) => {


    const dispatch = useDispatch()

    const showPokemon = (id: number) => {
        dispatch(fetchItemDetailsRequest({ id }))
    }


    return (
        <Transition
            show={true}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            data-testid='wrapper'
            className=" hover:cursor-pointer hover:opacity-40 itemCard"
            onClick={() => showPokemon(item.id)}
        >
            <div className="group  p-2  content-center Items-center justify-center h-72 relative " >
                {/* <div className='absolute right-2 top-2 h-5 w-5' onClick={() => console.log('hello')}>
                    <InformationCircleIcon className="text-orange-200" />
                </div> */}
                <div className="m-auto w-2/3 aspect-h-1  rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 center">
                    <img
                        data-testid='image'
                        src={`${dreamWorlUrl}/${item.id}.svg`}
                        alt={item.name}
                        className="w-100 h-2/3 "
                    />
                </div>

                <div className=" absolute left-0 right-0 bottom-0 mx-auto p-2 rounded-md border-2 border-whiye bg-blue-500 w-34">
                    <h3 data-testid='name-holder' className="mt-0 text-center text-weight-500 text-white">{upperFirstChar(item.name)}</h3>
                </div>
            </div>
        </Transition>
    )
}


export default ItemCard