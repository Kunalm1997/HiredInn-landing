import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';


interface DialogBoxProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DemoDialogBox: React.FC<DialogBoxProps> = ({ open, setOpen }) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl flex flex-col items-center bg-white px-15 py-5">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex items-center">
                    <div className="mt-3 text-center sm:mt-0">
                      <h1 className="font-semibold text-5xl text-gray-900 bg-gradient-to-br from-purple-400 to-purple-800 inline-block text-transparent bg-clip-text">
                        Thank You
                      </h1>
                      <div className="mt-5">
                        <p className="text-sm font-semibold text-gray-800">
                          Your demo has been submitted.<br /> We will get back to you as soon as possible!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Image src="https://ik.imagekit.io/7guc79cmq/Premium%20Vector%20_%20Thank%20you%20message%20text%20vector%20illustration%20or%20thumb%20up%20hand%20icon%20with%20handwritten%20text.jpeg?updatedAt=1713248503738" alt="thank you" width={400} height={400} />
                </div>
                <div className="bg-white py-3 flex flex-col sm:flex-row justify-center items-center">
                  <button
                    type="button"
                    className="inline-flex w-full rounded-md bg-white px-3 py-2 text-sm font-semibold text-dark-purple shadow-sm sm:w-auto border-2 border-dark-purple"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Great!
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default DemoDialogBox;
