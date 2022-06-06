import { Transition } from "@headlessui/react"
import { useState } from "react"
import { Item } from "../../store/types"
import {InformationCircleIcon} from '@heroicons/react/solid'

type ItemProps = {
    item: Item
}

const ItemCard = ({ item }: ItemProps) => {
    return (
        <Transition
            show={true}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className=" hover:cursor-pointer hover:opacity-40"
        >
            <div className="group bg-white rounded shadow-md p-4  content-center Items-center justify-center h-72 relative border border-gray-10" >
                <div className='absolute right-2 top-2 h-5 w-5' onClick={() => console.log('hello')}>
                    <InformationCircleIcon className="text-orange-200" />
                </div>
                <div className="m-auto w-2/3 aspect-h-1  rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 center">
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`}
                        alt={item.name}
                        className="w-100 h-2/3 "
                    />
                </div>

                <div className=" absolute right-0 bottom-4 p-2 rounded-l bg-gray-500 w-32">
                    <h3 className="mt-0 text-center text-weight-500 text-white">{item.name}</h3>
                </div>
            </div>
        </Transition>
    )
}


export default ItemCard