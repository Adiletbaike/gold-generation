import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import Modal from "./Modals/Modal";
import CreatableSelect from "react-select/creatable";

const gender = [
  { value: "male", label: "Эркек" },
  { value: "female", label: "Аял" },
];

const status = [
  { value: "shakirt", label: "Shakirt" },
  { value: "not", label: "Not shakirt" },
];

const students = [
  {
    id: 1,
    name: "Aibek",
    surname: "Aibekov",
    age: 12,
    phone: "+996 555 555 555",
    status: "shakirt",
    gender: 'Эркек',
    login: "aibek",
    password: "1234",
  },
  {
    id: 2,
    name: "Aibek",
    surname: "Aibekov",
    age: 12,
    phone: "+996 555 555 555",
    status: "shakirt",
    gender: 'Эркек',
    login: "aibek",
    password: "1234",
  },
];

const Students = () => {
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
        <Modal isVisible={showModal} onClose={() => setShowModal(false)} >
          <div className="py-6 px-6 lg:px-8 text-left ">
            <h3 className="mb-4 text-xl font-medium text-gray-900">Окуучулар</h3>
            <form
              className="space-y-3"
              action="#"
            //   onSubmit={edit ? handleEditValues : handleValues}
            >
              <div>
                <label
                  htmlFor="groups"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Аты
                </label>
                <input
                  type="text"
                  name="name"
                //   ref={nameRef}
                  id="name"
                  placeholder="Аты"
                //   defaultValue={edit ? editData.name : ""}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div>
                <label
                  htmlFor="surname"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Фамилиясы
                </label>
                <input
                  type="text"
                  name="surname"
                //   ref={nameRef}
                  id="surname"
                  placeholder="Фамилиясы"
                //   defaultValue={edit ? editData.name : ""}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div>
                <label
                  htmlFor="age"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Жашы
                </label>
                <input
                  type="number"
                  name="age"
                //   defaultValue={edit ? editData.quantity : ""}
                //   ref={numberRef}
                  id="age"
                  placeholder="Жашы"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Телефон номери
                </label>
                <input
                  type="number"
                  name="phone"
                //   defaultValue={edit ? editData.quantity : ""}
                //   ref={numberRef}
                  id="phone"
                  placeholder="Телефон номери"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div className="flex justify-between">
                <div className="w-[48%]">
                  <label
                    htmlFor="status"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Статус
                  </label>
                  <CreatableSelect
                    isClearable
                    options={status}
                    // defaultValue={
                    //   edit && editData.language
                    //     ? { value: "language", label: editData.language }
                    //     : null
                    // }
                    // onChange={(value) => setSelectedLanguage(value)}
                  />
                </div>
                <div className="w-[50%]">
                  <label
                    htmlFor="gender"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Жынысы
                  </label>
                  <CreatableSelect
                    isClearable
                    options={gender}
                    // defaultValue={
                    //   edit && editData.guide
                    //     ? { value: "guide", label: editData.guide }
                    //     : null
                    // }
                    // onChange={(value) => setSelectedGuide(value)}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="login"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Логин
                </label>
                <input
                  type="text"
                  name="login"
                //   defaultValue={edit ? editData.login : ""}
                //   ref={loginRef}
                  id="login"
                  placeholder="Логин"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Пароль
                </label>
                <input
                  type="text"
                  name="password"
                //   ref={passwordRef}
                //   defaultValue={edit ? editData.password : ""}
                  id="password"
                  placeholder="Пароль"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
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
                      Аты
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Фамилиясы
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Жашы
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Телефон номери
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Статус
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Жынысы
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Логин
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Пароль
                    </th>

                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {students.map((student, index) => (
                    <tr key={index} className="hover:bg-gray-200 duration-300">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {student.id}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {student.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {student.surname}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {student.age}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {student.phone}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {student.status}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {student.gender}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {student.login}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {student.password}
                      </td>
                      
                      <td className=" flex px-6 py-6 whitespace-nowrap gap-2 border-none text-right text-2xl items-center font-medium">
                        <button
                          onClick={() => {
                            // handleEdit(group.name);
                            setShowModal(true);
                          }}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          <CiEdit />
                        </button>
                        <button
                        //   onClick={() => handleDelete(group.name)}
                          className="text-red-600 hover:text-red-900"
                        >
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

export default Students;
