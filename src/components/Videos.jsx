import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import Modal from "./Modals/Modal";
import CreatableSelect from "react-select/creatable";

const grade = [
  { value: "one", label: "1" },
  { value: "two", label: "2" },
  { value: "three", label: "3" },
  { value: "four", label: "4" },
  { value: "five", label: "5" },
  { value: "six", label: "6" },
  { value: "seven", label: "7" },
  { value: "eight", label: "8" },
  { value: "nine", label: "9" },
  { value: "ten", label: "10" },
  { value: "eleven", label: "11" },
];

const status = [
  { value: "shakirt", label: "Shakirt" },
  { value: "not", label: "Not shakirt" },
];

const videos = [
  {
    id: 1,
    title: "Video 1",
    videoLink: "https://www.youtube.com/watch?v=7sDY4m8KNLc",
    grade: 4,
    status: "Shakirt",
  },
  {
    id: 2,
    title: "Video 2",
    videoLink: "https://www.youtube.com/watch?v=7sDY4m8KNLc",
    grade: 7,
    status: "Shakirt",
  },
];

const Videos = () => {
  // Modal
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-neutral-200 rounded-lg p-4">
      <div className="flex justify-start border-b pb-4 border-gray-200">
        <button
          className="flex justify-end items-center text-lg rounded-lg border p-1 bg-yellow-400"
          onClick={() => {
            setShowModal(true);
          }}
        >
          <IoMdAdd />
          Жаңы кошуу
        </button>
        <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
          <div className="py-6 px-6 lg:px-8 text-left ">
            <h3 className="mb-4 text-xl font-medium text-gray-900">
                Видео кошуу
            </h3>
            <form className="space-y-3" action="#">
              <div>
                <label
                  htmlFor="groups"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Видеонун аты
                </label>
                <input
                  type="text"
                  name="VideoName"
                  id="VideoName"
                  placeholder="Видеонун аты"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div>
                <label
                  htmlFor="videoLink"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Видео ссылка
                </label>
                <input
                  type="text"
                  name="videoLink"
                  id="videoLink"
                  placeholder="Видео ссылка"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div className="flex justify-between">
                <div className="w-[48%]">
                  <label
                    htmlFor="grade"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Класс
                  </label>
                  <CreatableSelect isClearable options={grade} />
                </div>
                <div className="w-[50%]">
                  <label
                    htmlFor="status"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Статус
                  </label>
                  <CreatableSelect isClearable options={status} />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="w-100 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Сактоо
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
      <div className="flex flex-col pt-4">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Видеонун аты
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Видео ссылка
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Класс
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Статус
                    </th>

                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {videos.map((video, index) => (
                    <tr key={index} className="hover:bg-gray-200 duration-300">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {video.id}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {video.title}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              <a href={video.videoLink} target="_blank">
                                {video.videoLink}
                              </a>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {video.grade}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {video.status}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className=" flex px-6 py-6 whitespace-nowrap gap-2 border-none text-right text-2xl items-center font-medium">
                        <button
                          onClick={() => {
                            setShowModal(true);
                          }}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          <CiEdit />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <RiDeleteBin5Line />
                        </button>
                        {/* {dialogDelete.isLoading && (
                          <DialogDelete
                            message={dialogDelete.message}
                            onDialog={areYouSureDelete}
                          />
                        )} */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
