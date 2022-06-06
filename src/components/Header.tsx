import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Logo from '../assets/logo.svg'

export default function Header() {
    return (
        <Popover className="relative ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 w-2/12">
                <div className="flex justify-center py-6 md:justify-start">
                    <div className="flex justify-center lg:w-0 lg:flex-1">
                        <a href="#">
                            <span className="sr-only">Workflow</span>
                            <img
                                className="h-100 w-auto sm:h-100"
                                src={Logo}
                                alt=""
                            />
                        </a>
                    </div>

                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >

            </Transition>
        </Popover>
    )
}
