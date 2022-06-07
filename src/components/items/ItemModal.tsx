
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import { Item } from '../../store/types'
import { returnColorDependsOnType, upperFirstChar } from '../../utils'
import { useSelector } from 'react-redux'
import { getSelectedItemSelector, getShowModalSelector } from '../../store/selectors/items/selectors'
import { setShowModal } from '../../store/actions/items/actions'
import { useDispatch } from 'react-redux'
import Sword from '../../assets/sword.svg'
import Shield from '../../assets/shield.svg'
import Lighting from '../../assets/lightning.svg'
import { dreamWorlUrl } from '../../config'





let product: any = {

}

const ItemModal = () => {

    const dispatch = useDispatch()

    const showModal = useSelector(getShowModalSelector)
    const item = useSelector(getSelectedItemSelector)

    const closeModal = () => { dispatch(setShowModal(false)) }


    return (
        <Transition.Root show={showModal && !!item} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>

                <div className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" />

                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex Items-stretch  md:Items-center justify-center min-h-full text-center md:px-2 lg:px-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                            enterTo="opacity-100 translate-y-0 md:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 md:scale-100"
                            leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                        >
                            <Dialog.Panel className="flex text-base text-left transform transition w-full md:max-w-2xl md:px-4 md:my-8 lg:max-w-4xl h-2/3 modal-dialog">
                                <div className="w-full relative flex Items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                                    <button
                                        type="button"
                                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                                        onClick={() => closeModal()}
                                    >
                                        <span className="sr-only">Close</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>

                                    <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 Items-start sm:grid-cols-12 lg:gap-x-8">
                                        <div className="aspect-w-3 aspect-h-4 h-10/12 m-auto rounded-lg bg-white overflow-hidden sm:col-span-5 lg:col-span-5 flex justify-center items-center">
                                            <img src={`${dreamWorlUrl}/${item?.id!}.svg`}
                                                alt={item?.name!} className="object-center h-3/4 w-100 object-fill" />
                                        </div>
                                        <div className="sm:col-span-8 lg:col-span-7">
                                            <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{upperFirstChar(item?.name!)}</h2>

                                            <section aria-labelledby="information-heading" className="mt-2">
                                                <h3 id="information-heading" className="sr-only">
                                                    Information :
                                                </h3>
                                                <div className="flex items-center">
                                                    <div className="w-8/12 h-2 bg-green-400 rounded-full">

                                                    </div>
                                                    <p className="font-weight-600 text-xs p-1">
                                                        <span className=" ">{item?.stats[0]?.base_stat}</span>/<span className="text-gray-500">{item?.stats[0]?.base_stat} hp</span>
                                                    </p>

                                                </div>

                                                {/* Stats */}
                                            </section>

                                            <section aria-labelledby="options-heading" className="mt-3">
                                                <div className="flex justify-start w-full items-center -ml-3">
                                                    <div className='flex items-center justify-start'>
                                                        <img src={Sword} alt="" className="h-14" />
                                                        <span>{item?.stats[1]?.base_stat}</span>
                                                    </div>
                                                    <div className='flex items-center'>
                                                        <img src={Shield} alt="" className="h-14" />
                                                        <span>{item?.stats[2]?.base_stat}</span>
                                                    </div>
                                                    <div className='flex items-center'>
                                                        <img src={Lighting} alt="" className="h-14" />
                                                        <span>{item?.stats[5]?.base_stat}</span>
                                                    </div>

                                                </div>

                                                <div className='flex mt-5'>
                                                    <p className='mr-4'>Height : <span className='font-bold'>{item?.height}</span></p>
                                                    <p>Weight : <span className='font-bold'>{item?.weight}</span></p>
                                                </div>

                                                <div className="mt-5">
                                                    {/* Abilities */}
                                                    <h4 className="text-gray-900 font-medium text-lg">Type :</h4>
                                                    <div className="flex mt-2">
                                                        {item?.types.map(({ type }: any) => (

                                                            <span className={`inline-flex items-center px-4 py-2 border ${returnColorDependsOnType(type.name)}  rounded-md shadow-sm text-sm font-medium text-white   mr-2`}
                                                            >{upperFirstChar(type?.name)}</span>))}

                                                    </div>
                                                </div>

                                                <div className="mt-5   bg-">
                                                    <h4 className="text-gray-900 font-medium text-lg">Abilities :</h4>
                                                    <div className="flex mt-2">
                                                        {item?.abilities.map(({ ability }: any) => (
                                                            <span className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 mr-2"
                                                            >{upperFirstChar(ability?.name)}</span>))}

                                                    </div>

                                                </div>


                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}


export default ItemModal

