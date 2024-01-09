import React, { useState, useRef, useMemo } from "react";
import { IoMdAdd } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import Modal from "./Modals/Modal";
import JoditEditor from "jodit-react";

const announcements = [
    {
        id: 1,
        image:
          "https://f3h3w7a5.rocketcdn.me/wp-content/uploads/2020/03/feat_important-.jpg",
        title: "Announcement 1",
        shortDescription: "Announcement 1 short description",
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      },
      {
        id: 2,
        image:
          "https://f3h3w7a5.rocketcdn.me/wp-content/uploads/2020/03/feat_important-.jpg",
        title: "Announcement 2",
        shortDescription: "Announcement 2 short description",
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      },
];

const Announcement = () => {
  // Modal
  const [showModal, setShowModal] = useState(false);
  // Image
  const inputRef = useRef(null);
  const [image, setImage] = useState(null);
  const handleImageClick = () => {
    inputRef.current.click();
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    console.log(file);
  };

  // Text editor
  const editor = useRef(null);
  const [content, setContent] = useState("");

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
              Ищ-чара кошуу
            </h3>
            <form className="space-y-3" action="#">
              <div
                className="flex flex-col justify-center"
                onClick={handleImageClick}
              >
                {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    alt=""
                    className="w-20 mb-2 rounded-full"
                  />
                ) : (
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt=""
                    className="w-20 mb-2"
                  />
                )}
                <input
                  type="file"
                  // className="w-full"
                  ref={inputRef}
                  onChange={handleImageChange}
                  value={image ? URL.createObjectURL(image) : ""}
                  // style={{display: none}}
                  // defaultValue={edit ? editData.image : null}
                />
              </div>
              <div>
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Иш-чаранын аты
                </label>
                <input
                  type="text"
                  name="articleName"
                  id="articleName"
                  placeholder="Иш-чаранын аты"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div>
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Кыскача маалымат
                </label>
                <input
                  type="text"
                  name="articleName"
                  id="articleName"
                  placeholder="Иш-чаранын аты"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>

              <div>
                <label
                  htmlFor="textEditor"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                    Текст
                </label>
                <JoditEditor
                  ref={editor}
                  value={content}
                  //   tabIndex={1} // tabIndex of textarea
                  //   onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                  onChange={(newContent) => setContent(newContent)}
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
                      Сурот
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Макаланын аты
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Кыскача маалымат
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Текст
                    </th>

                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {announcements.map((announcement, index) => (
                    <tr key={index} className="hover:bg-gray-200 duration-300">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-20">
                            <img
                              width="96"
                              height="48"
                              src={announcement.image}
                              alt="man-wearing-turban"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {announcement.id}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {announcement.title}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {announcement.shortDescription}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-wrap">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {announcement.description}
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

export default Announcement;
