import React, { useRef, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import Modal from "./Modals/Modal";
import CreatableSelect from "react-select/creatable";
import DialogDelete from "./Modals/DialogDelete";

const gender = [
  { value: "male", label: "Эркек" },
  { value: "female", label: "Аял" },
];

const members = [
  {
    id: 1,
    name: "Адилет",
    surname: "Джураев",
    phone: "+996703863539",
    birthday: "06.06.2000",
    inn: "12345678912345",
    gender: "Эркек",
    login: "adilet",
    password: "baike",
  },
  {
    id: 2,
    name: "Нурбек",
    surname: "Нурбеков",
    phone: "+996774742422",
    birthday: "10.03.1997",
    inn: "12345678912345",
    gender: "Эркек",
    login: "nurbek",
    password: "admin",
  },
  {
    id: 3,
    name: "Айгул",
    surname: "Нурбеков",
    phone: "+996778142535",
    birthday: "14.08.1980",
    inn: "12345678912345",
    gender: "Аял",
    login: "aigul",
    password: "1234",
  },
];
const MembersGroup = () => {
  // Modal
  const [showModal, setShowModal] = useState(false);

  // Table
  const [dataMember, setDataMember] = useState(members);
  const [selectedGender, setSelectedGender] = useState(null);

  // Handle values
  const nameRef = useRef();
  const surnameRef = useRef();
  const phoneRef = useRef();
  const birthdayRef = useRef();
  const innRef = useRef();
  const genderRef = useRef();
  const loginRef = useRef();
  const passwordRef = useRef();
  const handleValues = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const surname = surnameRef.current.value;
    const phone = phoneRef.current.value;
    const birthday = birthdayRef.current.value;
    const inn = innRef.current.value;
    const gender = selectedGender ? selectedGender.label : "";
    const login = loginRef.current.value;
    const password = passwordRef.current.value;
    const newId = Math.max(...members.map((member) => member.id)) + 1;
    var newMember = {
      id: newId,
      name,
      surname,
      phone,
      birthday,
      inn,
      gender,
      login,
      password,
    };
    members.push(newMember);
    setDataMember((prevData) => prevData.concat(newMember));
    nameRef.current.value = "";
    surnameRef.current.value = "";
    phoneRef.current.value = "";
    birthdayRef.current.value = "";
    innRef.current.value = "";
    setSelectedGender(null);
    loginRef.current.value = "";
    passwordRef.current.value = "";
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
  const nameMemberRef = useRef();
  const [dialogDelete, setDialogDelete] = useState({
    message: "",
    isLoading: false,
  });
  const handleDialog = (message, isLoading) => {
    setDialogDelete({ message, isLoading });
  };
  const handleDelete = (name) => {
    handleDialog("Чындап өчүрүүнү каалайсызбы?", true);
    nameMemberRef.current = name;
  };
  const areYouSureDelete = (choose) => {
    if (choose) {
      setDataMember(dataMember.filter((members) => members.name !== nameMemberRef.current));
      handleDialog("", false);
      toast.error("Ийгиликтүү өчүрүлдү!!!", {
        position: "top-right",
        autoClose: 3000, // 3 seconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      handleDialog("", false);
    }
  };

  // Edit
  const [edit, setEdit] = useState(false);
  const [editData, setEditData] = useState({
    id: "",
    name: "",
    surname: "",
    phone: "",
    birthday: "",
    inn: "",
    gender: "",
    login: "",
    password: "",
  });
  const handleEdit = (name) => {
    setEdit(true);
    const editMember = dataMember.find((member) => member.name === name);
    setEditData({
      id: editMember.id,
      name: editMember.name,
      surname: editMember.surname,
      phone: editMember.phone,
      birthday: editMember.birthday,
      inn: editMember.inn,
      gender: editMember.gender,
      login: editMember.login,
      password: editMember.password,
    });
  };
  const handleEditValues = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const surname = surnameRef.current.value;
    const phone = phoneRef.current.value;
    const birthday = birthdayRef.current.value;
    const inn = innRef.current.value;
    const gender = genderRef.current.getValue()[0].label;
    const login = loginRef.current.value;
    const password = passwordRef.current.value;
    const editedMember = {
      id: editData.id,
      name,
      surname,
      phone,
      birthday,
      inn,
      gender,
      login,
      password,
    };
    setDataMember((prevData) =>
      prevData.map((member) =>
        member.name === editData.name ? editedMember : member
      )
    );
    setEdit(false);
    setEditData({
      id: "",
      name: "",
      surname: "",
      phone: "",
      birthday: "",
      inn: "",
      gender: "",
      login: "",
      password: "",
    });
    nameRef.current.value = "";
    surnameRef.current.value = "";
    phoneRef.current.value = "";
    birthdayRef.current.value = "";
    innRef.current.value = "";
    setSelectedGender(null);
    loginRef.current.value = "";
    passwordRef.current.value = "";
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
          <div className="py-6 px-6 lg:px-8 text-left mt-24">
            <h3 className="mb-1 text-xl font-medium text-gray-900">Мүчөлөр</h3>
            <form
              className="space-y-2"
              action="#"
              onSubmit={edit ? handleEditValues : handleValues}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Аты
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  ref={nameRef}
                  defaultValue={edit ? editData.name : ""}
                  placeholder="Аты"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Фамилия
                </label>
                <input
                  type="text"
                  name="name"
                  ref={surnameRef}
                  defaultValue={edit ? editData.surname : ""}
                  id="name"
                  placeholder="Фамилия"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div>
                <label
                  htmlFor="number"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Телефон
                </label>
                <input
                  type="text"
                  name="number"
                  id="number"
                  defaultValue={edit ? editData.phone : ""}
                  ref={phoneRef}
                  placeholder="Телефон"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div>
                <label
                  htmlFor="number"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Туулган күнү
                </label>
                <input
                  type="date"
                  name="number"
                  defaultValue={edit ? editData.birthday : ""}
                  id="number"
                  ref={birthdayRef}
                  placeholder="Телефон"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div>
                <label
                  htmlFor="number"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  ИНН
                </label>
                <input
                  type="number"
                  ref={innRef}
                  name="number"
                  defaultValue={edit ? editData.inn : ""}
                  id="number"
                  placeholder="00000000000000"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div className="flex justify-between">
                <div className="w-[48%]">
                  <label
                    htmlFor="language"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Жыныс
                  </label>
                  <CreatableSelect
                    ref={genderRef}
                    isClearable
                    onChange={(selectedOption) =>
                      setSelectedGender(selectedOption)
                    }
                    defaultValue={
                      edit && editData.gender
                        ? { value: "gender", label: editData.gender }
                        : null
                    }
                    options={gender}
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
                  defaultValue={edit ? editData.login : ""}
                  ref={loginRef}
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
                  ref={passwordRef}
                  defaultValue={edit ? editData.password : ""}
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
                      className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Аты
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Фамилия
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Телефон
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Туулган күнү
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      ИНН
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Жыныс
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Логин
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Пароль
                    </th>
                    <th scope="col" className="relative px-5 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {dataMember.map((member,index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-200 duration-300"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {member.id}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {member.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {member.surname}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {member.phone}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {member.birthday}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {member.inn}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {member.gender}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {member.login}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {member.password}
                      </td>
                      <td className=" flex px-6 py-6 whitespace-nowrap gap-2 border-none text-right text-2xl items-center font-medium">
                        <button
                          onClick={() => {
                            handleEdit(member.name);
                            setShowModal(true);
                          }}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          <CiEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(member.name)}
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

export default MembersGroup;
