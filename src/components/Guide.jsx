import React, { useRef, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import Modal from "./Modals/Modal";
import Select from "react-select";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DialogDelete from "./Modals/DialogDelete";

const people = [
  {
    name: "Abdulla Kaary",
    surname: "Abdullaev",
    phone: "+996708112288",
    education: "Islam University",
    image: "https://bit.ly/33HnjK0",
  },
  {
    name: "Aibek Ustaz",
    surname: "Aibekov",
    phone: "+996708112288",
    education: "Egypt, Al-Askar",
    image: "https://bit.ly/3I9nL2D",
  },
  {
    name: "Nurbek Kaary",
    surname: "Nurbekov",
    phone: "+996708112288",
    education: "Manas University",
    image: "https://bit.ly/3vaOTe1",
  },
];
const language = [
  { value: "kyrgyz", label: "Кыргыз" },
  { value: "russia", label: "Орус" },
  { value: "kazakh", label: "Казак" },
];

const Guide = () => {
  // Modal
  const [showModal, setShowModal] = useState(false);
  const [peopleData, setPeopleData] = useState(people);

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

  // handleValues
  const handleValues = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const surname = e.target.surname.value;
    const phone = e.target.number.value;
    const education = e.target.education.value;
    
    const languages = Array.isArray(e.target.language)
      ? e.target.language.map((option) => option.value)
      : [];

    const newGuide = {
      name,
      surname,
      phone,
      education,
      languages,
    };

    setPeopleData([...peopleData, newGuide]);
    setShowModal(false);
    // Show toast notification
    toast.success("Ийгиликтүү сакталды!!!", {
      position: "top-right",
      autoClose: 3000, // 3 seconds
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // Delete
  const nameGuideRef = useRef();
  const [dialogDelete, setDialogDelete] = useState({
    message: "",
    isLoading: false,
  });
  const handleDialog = (message, isLoading) => {
    setDialogDelete({
      message,
      isLoading,
    });
  };
  const handleDelete = (name) => {
    handleDialog("Чындап өчүрүүнү каалайсызбы?", true);
    nameGuideRef.current = name;
  };

  const areYouSureDelete = (choose) => {
    if (choose) {
      setPeopleData(
        peopleData.filter((person) => person.name !== nameGuideRef.current)
      );
      handleDialog("", false);
      // Show toast notification
      toast.error("Ийгиликтүү өчүрүлдү!!!", {
        position: "top-right",
        autoClose: 3000, // 3 seconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: "#fff", // Set your desired background color
        },
      });
    } else {
      handleDialog("", false);
    }
  };

  // Edit
  const [edit, setEdit] = useState(false);
  const [editData, setEditData] = useState({
    name: "",
    surname: "",
    phone: "",
    education: "",
    languages: [],
  });
  const handleEdit = (name) => {
    setEdit(true);
    const editPerson = peopleData.find((person) => person.name === name);
    setEditData(editPerson);
  };
  const handleEditValues = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const surname = e.target.surname.value;
    const phone = e.target.number.value;
    const education = e.target.education.value;
    const languages = [];

    if (typeof e.target.language?.value === "string") {
      languages.push(e.target.language.value);
    } else {
      e.target.language.forEach((option) => {
        languages.push(option.value);
      });
    }

    const editedGuide = {
      name: name,
      surname: surname,
      phone: phone,
      education: education,
      languages: languages,
    };

    // Update the data in edit mode
    setPeopleData((prevData) =>
      prevData.map((person) =>
        person.name === editData.name ? editedGuide : person
      )
    );
    setEdit(false);
    setEditData({
      name: "",
      surname: "",
      phone: "",
      education: "",
      languages: [],
    });

    // Reset form fields
    e.target.name.value = "";
    e.target.surname.value = "";
    e.target.number.value = "";
    e.target.education.value = "";
    e.target.language.value = "";
    setShowModal(false);

    // Show toast notification
    toast.info("Ийгиликтүү өзгөртүлдү!!!", {
      position: "top-right",
      autoClose: 3000, // 3 seconds
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        backgroundColor: "#fff", // Set your desired background color
      },
    });
  };

  return (
    <div className="bg-white p-4 overflow-x-scroll">
      <ToastContainer />
      <div className="flex justify-end border-b pb-4 border-gray-200">
        <button
          className="flex items-center text-lg rounded-lg border p-1 bg-green-400"
          onClick={() => {
            setEdit(false);
            setShowModal(true);
          }}
        >
          <IoMdAdd />
          Жаңы кошуу
        </button>
        <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
          <div className="py-6 px-6 lg:px-8 text-left">
            <h3 className="mb-4 text-xl font-medium text-gray-900">
              Умра башчы
            </h3>
            <form
              className="space-y-3"
              action="#"
              onSubmit={edit ? handleEditValues : handleValues}
            >
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
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Аты
                </label>
                <input
                  defaultValue={edit ? editData.name : ""}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Аты"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div>
                <label
                  htmlFor="surname"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Фамилия
                </label>
                <input
                  type="text"
                  defaultValue={edit ? editData.surname : ""}
                  name="surname"
                  id="surname"
                  placeholder="Фамилиясы"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div>
                <label
                  htmlFor="surname"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Телефон
                </label>
                <input
                  type="tel"
                  defaultValue={edit ? editData.phone : ""}
                  name="number"
                  id="number"
                  placeholder="Телефон номери"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div>
                <label
                  htmlFor="education"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Билими
                </label>
                <input
                  type="text"
                  defaultValue={edit ? editData.education : ""}
                  name="education"
                  id="education"
                  placeholder="Билими"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div>
                <label
                  htmlFor="education"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Билген тилдери
                </label>
                <Select
                  // defaultValue={[language[0], language[3]]}
                  isMulti
                  name="language"
                  options={language}
                  defaultValue={
                    edit && editData.languages
                      ? editData.languages.map((lang) =>
                          language.find((option) => option.value === lang)
                        )
                      : null
                  }
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="w-100 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  {edit ? "Өзгөртүү" : "Сактоо"}
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
                      Сүрөт
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
                      Телефон
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Билими
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Билген тилдери
                    </th>

                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {peopleData.map((person, index) => (
                    <tr key={index} className="hover:bg-gray-200 duration-300">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              width="48"
                              height="48"
                              className="rounded-full"
                              src="https://img.icons8.com/emoji/48/000000/man-wearing-turban.png"
                              alt="man-wearing-turban"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {person.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {person.surname}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {person.phone}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {person.education}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {/* {Array.isArray(person.languages)
                          ? person.languages.map((lang, index) => (
                              <span
                                key={index}
                                className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                              >
                                {console.log(lang)}
                              </span>
                            ))
                          : null} */}
                        <span
                          className="px-2 inline-flex text-xs leading-5
                      font-semibold rounded-full bg-green-100 text-green-800"
                        >
                          {person.languages}
                        </span>
                      </td>

                      <td className=" flex px-6 py-6 whitespace-nowrap gap-2 border-none text-right text-2xl items-center font-medium">
                        <button
                          onClick={() => {
                            handleEdit(person.name);
                            setShowModal(true);
                          }}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          <CiEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(person.name)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <RiDeleteBin5Line />
                        </button>
                        {dialogDelete.isLoading && (
                          <DialogDelete
                            onDialog={areYouSureDelete}
                            message={dialogDelete.message}
                          />
                        )}
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

export default Guide;
