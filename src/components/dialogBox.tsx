import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'


interface DialogBoxProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DialogBox: React.FC<DialogBoxProps> = ({ open, setOpen }) => {
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
                        Join the Waitlist
                      </h1>
                      <div className="mt-5">
                        <p className="text-sm text-gray-800 font-medium">
                          Welcome to HiredInn, the premier AI-based hiring platform for the hospitality industry. Whether you&rsquo;re scheduling interviews, evaluating candidates, or launching hiring campaigns, we have got you covered.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='text-sm'>
                  <input type="text" placeholder='enter your email' style={{outline: 'none', borderRadius: '5px', border: '1px solid purple', padding: '10px 25px', width: '30vw'}} />
                </div>
                <div className="bg-white py-3 flex flex-col sm:flex-row justify-center items-center">
                  <button
                    type="button"
                    className="inline-flex w-full rounded-md bg-white px-3 py-2 text-sm font-semibold text-dark-purple shadow-sm sm:w-auto border-2 border-dark-purple"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="inline-flex w-full rounded-md bg-dark-purple px-3 py-2.5 text-sm font-semibold text-white shadow-sm sm:ml-3 mt-2 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Submit
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

export default DialogBox;
