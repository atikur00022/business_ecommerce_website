import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {getUserDetails} from "../../utility/SessionHelper.js";
import FullScreenLoader from "../../layouts/loader/FullScreenLoader.jsx";
import moment from "moment";
import {Link, Navigate} from "react-router-dom";
import {CiEdit} from "react-icons/ci";
import ReactPaginate from "react-paginate";
import {CategoryRequest} from "../../ApiRequest/Categories/CategoryApiRequest.js";
import {FaArrowLeft} from "react-icons/fa";
import {RiDeleteBin2Line} from "react-icons/ri";
import {DeleteAlert} from "../../utility/DeleteAlert.js";
import validationHelper from "../../utility/ValidationHelper.js";
import {DeleteCategoryRequest} from "../../ApiRequest/Categories/CategoryDeleteApiRequest.js";

const CategoryList = () => {

    const [loading, setLoading] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState("0");
    const [perPage, setPerPage] = useState(10);

    useEffect(()=> {
        ( async ()=>{
            setLoading(true);
            await CategoryRequest(1, perPage, searchKeyword);
            setLoading(false);
        })()
    }, []);

    const AllCategory = useSelector((state) => state.category.list);
    const Total = useSelector((state) => state.category.listTotal);

    const handlePageClick = async (event) => {
        const pageNo = event.selected;
        await CategoryRequest(pageNo + 1, perPage, searchKeyword);
    };

    const perPageOnChange = async (event) => {
        setPerPage(parseInt(event.target.value));
        await CategoryRequest(1, event.target.value, searchKeyword);
    };

    const SearchKeywordOnChange = async (event) => {
        setSearchKeyword(event.target.value);
        if (event.target.value.length === 0) {
            setSearchKeyword("0");
            await CategoryRequest(1, perPage, "0");
        }
    };

    const SearchData = async () => {
        await CategoryRequest(1, perPage, searchKeyword);
    };

    const TextSearch = (e) => {
        const searchValue = e.target.value.toLowerCase(); // Convert input to lowercase for case-insensitive search
        const rows = document.querySelectorAll('tbody tr');

        rows.forEach((row) => {
            const categoryNameCell = row.querySelector("td:nth-child(3) p"); // Target the name column (3rd column)
            if (categoryNameCell) {
                const categoryName = categoryNameCell.textContent.toLowerCase(); // Convert to lowercase
                row.style.display = categoryName.includes(searchValue) ? "" : "none";
            }
        });
    };


    const role = getUserDetails().role;

    // Define routes based on user roles
    const getEditRoute = (role) => {
        switch (role) {
            case "superadmin":
                return "superadmincategorycreateupdate";
            case "admin":
                return "admincategorycreateupdate";
            case "employee":
                return "employeecategorycreateupdate";
            default:
                return null;
        }
    };

    const editRoute = getEditRoute(role);

    const deleteItem = async (id) => {
        const result = await DeleteAlert();
        if(result.isConfirmed){
            let res = await DeleteCategoryRequest(id);
            if(res.status === 'success'){
                await CategoryRequest(1, perPage, searchKeyword);
                validationHelper.SuccessToast(res.message)
            }else if(res.status === 'associate'){
                validationHelper.WarningToast(res.message)
            }else{
                validationHelper.WarningToast(res.message)
            }
        }
    }

    return (
        <>
            {
                loading ? (
                    <FullScreenLoader/>
                ): (
                    <div className="container-fluid my-5">
                        <div className="row">
                            <div className="col-12">
                                <div className="card shadow rounded pt-3">
                                    <div className="card-body">
                                        <div className="container-fluid">
                                            <div className="row mb-4">
                                                <div
                                                    className="col-12 d-flex justify-content-between align-items-center">
                                                    <button
                                                        onClick={async () => {
                                                            setSearchKeyword("0");
                                                            setLoading(true);
                                                            await CategoryRequest(1, perPage, "0");
                                                            setLoading(false);
                                                        }}
                                                        className="btn btn-outline-success d-flex align-items-center gap-2"
                                                    >
                                                        <FaArrowLeft size={16}/> Back
                                                    </button>
                                                    <h4 className="fw-bold text-success">Categories List</h4>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-4">
                                                    <input onKeyUp={TextSearch} placeholder="Filter categories.."
                                                           className="form-control form-control-sm" type="text"/>
                                                </div>
                                                <div className="col-4">
                                                    <select
                                                        onChange={perPageOnChange}
                                                        className="form-select form-select-sm form-control mx-2"
                                                        aria-label="Default select example"
                                                    >
                                                        <option value="10">10 Per Page</option>
                                                        <option value="20">20 Per Page</option>
                                                        <option value="50">50 Per Page</option>
                                                        <option value="100">100 Per Page</option>
                                                        <option value="200">200 Per Page</option>
                                                    </select>
                                                </div>
                                                <div className="col-4">
                                                    <div className="input-group mb-3">
                                                        <input
                                                            onChange={SearchKeywordOnChange}
                                                            type="text"
                                                            className="form-control form-control-sm"
                                                            placeholder="Search categories..."
                                                        />
                                                        <button
                                                            onClick={SearchData}
                                                            className="btn btn-sm btn-success"
                                                            type="button"
                                                        >
                                                            Search
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Product Table */}
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="table-responsive"
                                                         style={{maxHeight: "600px", overflowY: "auto"}}>
                                                        <table className="table table-bordered table-striped">
                                                            <thead
                                                                className="table-primary sticky-top bg-white text-center">
                                                            <tr>
                                                                <th>No</th>
                                                                <th>Image</th>
                                                                <th>Name</th>
                                                                <th>Created</th>
                                                                <th>Action</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            {AllCategory.map((item, index) => (
                                                                <tr key={index} className="align-middle text-center">
                                                                    <td>
                                                                        <p>{index + 1}</p>
                                                                    </td>
                                                                    <td>
                                                                        <img
                                                                            src={item["image"]}
                                                                            alt="category_image"
                                                                            className="rounded"
                                                                            style={{
                                                                                width: "80px",
                                                                                height: "50px",
                                                                                objectFit: "cover",
                                                                            }}
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        <p>{item['name']}</p>
                                                                    </td>
                                                                    <td>
                                                                        <p>{moment(item['createdAt']).format("DD-MMMM-YYYY HH:mm A")}</p>
                                                                    </td>
                                                                    <td>
                                                                        {editRoute ? (
                                                                            <Link
                                                                                to={`/${editRoute}?id=${item['_id']}`}
                                                                                className="btn btn-outline-info btn-sm"
                                                                            >
                                                                                <CiEdit size={18}/>
                                                                            </Link>
                                                                        ) : (
                                                                            <Navigate to="/notfound"/>
                                                                        )}
                                                                        <button
                                                                            onClick={() => deleteItem(item['_id'])}
                                                                            className="btn btn-outline-danger btn-sm ms-2"
                                                                        >
                                                                            <RiDeleteBin2Line size={18}/>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Pagination */}
                                            <div className="d-flex justify-content-center mt-4">
                                                <ReactPaginate
                                                    nextLabel=">"
                                                    previousLabel="<"
                                                    pageClassName="page-item"
                                                    pageLinkClassName="page-link"
                                                    previousClassName="page-item"
                                                    previousLinkClassName="page-link"
                                                    nextClassName="page-item"
                                                    nextLinkClassName="page-link"
                                                    breakLabel="..."
                                                    breakClassName="page-item"
                                                    breakLinkClassName="page-link"
                                                    pageCount={Math.ceil(Total / perPage)}
                                                    marginPagesDisplayed={2}
                                                    pageRangeDisplayed={5}
                                                    onPageChange={handlePageClick}
                                                    containerClassName="pagination"
                                                    activeClassName="active"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default CategoryList;