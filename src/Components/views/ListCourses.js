// import React, { useState } from "react";
// import { Card, Row, Col, Pagination } from "react-bootstrap";
// import "../css/listcourses.scss";
// import search from "../assest/search.svg";
// import pop1 from "../assest/pop1.svg";
// import listiconblack from "../assest/listiconblack.svg";
// import { Link } from "react-router-dom";
// import tag from "../assest/tag.svg";
// import all_coursesData from "../json/all_courses.json";

// const listcoursesinfo = all_coursesData;
// console.log(listcoursesinfo);
// const itemsPerPage = 6;
// const totalPages = 3;

// function CourseCard({ title, imageKey, lesson, duration, level, author, tag }) {
//   return (
//     <Card className="mb-4">
//       <Card.Img
//         variant="top"
//         src={imageKey}
//         alt={`Card ${title}`}
//         className="img-fluid"
//       />
//       <Card.Body>
//         <Card.Title className="course-title">{title}</Card.Title>
//         <Card.Text>
//           <div className="row">
//             <div className="col-4">{lesson}</div>
//             <div className="col-4">{duration}</div>
//             <div className="col-4">{level}</div>
//           </div>
//           <hr />
//         </Card.Text>
//         <div className="row">
//           <div className="moc col">{author}</div>
//           <div className="col text-end fees">
//             <img className="tag" src={tag} alt="Tag Icon" />
//           </div>
//         </div>
//       </Card.Body>
//     </Card>
//   );
// }

// const ListCourses = () => {
//   const [viewMode, setViewMode] = useState("grid");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState("");

//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [selectedPriceLevels, setSelectedPriceLevels] = useState([]); // Add this state

//   const toggleViewMode = (mode) => {
//     setViewMode(mode);
//   };
// const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };
//   const navigateToCourseDetailPage = () => {
//     window.location.href = "/CourseDetailPage";
//   };
//   const handleCategoryChange = (category) => {
//     const isSelected = selectedCategories.includes(category);

//     if (isSelected) {
//       setSelectedCategories(selectedCategories.filter((c) => c !== category));
//     } else {
//       setSelectedCategories([...selectedCategories, category]);
//     }
//   };

//   // const filteredCourses = listcoursesinfo.all_courses.filter((course) => {

//   //   if (selectedCategories.length === 0) {
//   //     return true; // Show all courses if no category is selected
//   //   }
//   //   return selectedCategories.includes(course.category);
//   //   const isCategorySelected = selectedCategories.length === 0 || selectedCategories.includes(course.category);
//   //   const isPriceLevelSelected = selectedPriceLevels.length === 0 || selectedPriceLevels.includes(course.priceLevel);

//   //   return isCategorySelected && isPriceLevelSelected;});
//   // console.log(filteredCourses); // Log the filtered courses to the console

//   const filteredCourses = listcoursesinfo.all_courses.filter((course) => {
//     const isCategorySelected =
//       selectedCategories.length === 0 ||
//       selectedCategories.includes(course.category);
//     const isPriceLevelSelected =
//       selectedPriceLevels.length === 0 ||
//       selectedPriceLevels.includes(course.priceLevel);
//       const isSearchMatch =
//       course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       course.author.toLowerCase().includes(searchTerm.toLowerCase());

//     return isCategorySelected && isPriceLevelSelected && isSearchMatch;
//   });

//   const filteredCategories = Array.from(
//     new Set(listcoursesinfo.all_courses.map((course) => course.category))
//   );

//   const handlePriceLevelChange = (priceLevel) => {
//     const isSelected = selectedPriceLevels.includes(priceLevel);

//     if (isSelected) {
//       setSelectedPriceLevels(
//         selectedPriceLevels.filter((p) => p !== priceLevel)
//       );
//     } else {
//       setSelectedPriceLevels([...selectedPriceLevels, priceLevel]);
//     }
//   };



//   const filteredPriceLevels = Array.from(
//     new Set(listcoursesinfo.all_courses.map((course) => course.priceLevel))
//   );

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentCourses = listcoursesinfo.all_courses.slice(
//     indexOfFirstItem,
//     indexOfLastItem
//   );

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className="container dv-list-courses">
    
//       <div className="row">
//         <div className="col-12 col-sm-12">
     
//         </div>
//         <div className="col-12 col-sm-12 col-md-3 col-lg-3 ">
//           <div className="card search">
//             <div className="card-body category">
//               <div className="search-container d-flex">
//               <input
//               type="text"
//               placeholder="Search Product.."
//               name="search"
//               className="form-control"
//               value={searchTerm}
//               onChange={handleSearchChange}
//             />
//             <img className="search-icon" src={search} alt={search} />
//               </div>
//             </div>
//           </div>
//           <div className="card box-card mt-5  d-md-none d-lg-none">
//               <div className="box">
//                 <div className="text">
                 
//                   Showing
//                   <span className="text-primary">
//                     {currentCourses.length} Courses
//                   </span>
//                   of {listcoursesinfo.all_courses.length} Result
//                 </div>
//                 <div className="d-flex ">
//                   <button
//                     className="first active  d-none d-sm-block"
//                     onClick={() => toggleViewMode("grid")}
//                   >
//                     <img
//                       className="grid-listimg"
//                       src={pop1}
//                       alt="Button Image"
//                     />
//                     Grid
//                   </button>
//                   <button
//                     className="first black-list-button  d-none d-sm-block"
//                     onClick={() => toggleViewMode("list")}
//                   >
//                     <img
//                       className="grid-listimg2"
//                       src={listiconblack}
//                       alt=" listiconblack"
//                     />
//                     List
//                   </button>
//                 </div>
//               </div>
//             </div>


          

//           <div className="card card2">
//             <div className="card-body category">
//               <h1 className="h3">Categories</h1>
//               <div className="progress">
//                 <div className="progress-bar"></div>
//               </div>


//               <div>
//                 {filteredCategories.map((category, index) => (
//                   <div className="form-check" key={index}>
//                     <input
//                       type="checkbox"
//                       className="form-check-input"
//                       id={`check${index}`}
//                       name={`option${index}`}
//                       value={category}
//                       checked={selectedCategories.includes(category)}
//                       onChange={() => handleCategoryChange(category)}
//                     />
//                     <label
//                       className="form-check-label"
//                       htmlFor={`check${index}`}
//                     >
//                       {category}
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="card card2">
//             <div className="card-body category">
//               <h3 className="h3">Price Level</h3>

//               <div className="progress">
//                 <div className="progress-bar"></div>
//               </div>

//               <div>
//                 {filteredPriceLevels.map((priceLevel, index) => (
//                   <div className="form-check" key={index}>
//                     <input
//                       type="checkbox"
//                       className="form-check-input"
//                       id={`priceCheck${index}`}
//                       name={`priceOption${index}`}
//                       value={priceLevel}
//                       checked={selectedPriceLevels.includes(priceLevel)}
//                       onChange={() => handlePriceLevelChange(priceLevel)}
//                     />
//                     <label
//                       className="form-check-label"
//                       htmlFor={`priceCheck${index}`}
//                     >
//                       {priceLevel}
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="col-12 col-sm-12 col-md-9 col-lg-9 ">

//         <div className="card box-card mb-4 d-none d-sm-block">
//               <div className="box">
//                 <div className="text">
                 
//                   Showing
//                   <span className="text-primary">
//                     {currentCourses.length} Courses
//                   </span>
//                   of {listcoursesinfo.all_courses.length} Result
//                 </div>
//                 <div className="d-flex ">
//                   <button
//                     className="first active "
//                     onClick={() => toggleViewMode("grid")}
//                   >
//                     <img
//                       className="grid-listimg"
//                       src={pop1}
//                       alt="Button Image"
//                     />
//                     Grid
//                   </button>
//                   <button
//                     className="first black-list-button"
//                     onClick={() => toggleViewMode("list")}
//                   >
//                     <img
//                       className="grid-listimg2"
//                       src={listiconblack}
//                       alt=" listiconblack"
//                     />
//                     List
//                   </button>
//                 </div>
//               </div>
//             </div>

//            <div className="page">
//             <Col lg={12} md={12} sm={12}>
//               {viewMode === "grid" ? (
//                 <Row>
//                   {filteredCourses.map((course, index) => (
//                     <Col sm={6} md={4} lg={4} key={index}>
//                       <Link
//                         to={`/CourseDetailPage/${course.id}`}
//                         style={{ textDecoration: "none" }}
//                       >
//                         <Card className="mb-4">
//                           <img
//                             src={
//                               course && course.imageKey
//                                 ? require("../assest/" + course.imageKey)
//                                 : ""
//                             }
//                             className="img-fluid"
//                             alt={`Card ${course.title}`}
//                           />
//                           <Card.Body>
//                             <Card.Title className="course-title">
//                               {course.title}
//                             </Card.Title>
//                             <Card.Text>
//                               <div className="row">
//                                 <div className="col-4 style-col ">{course.lesson}</div>
//                                 <div className="col-4 style-col">{course.duration}</div>
//                                 <div className="col-4 style-col">{course.level}</div>
//                               </div>
//                               <hr />
//                             </Card.Text>
//                             <div className="row">
//                               <div className="col moc">{course.author}</div>
//                               <div className="col text-end fees">
//                                 {
//                                   <img
//                                     className="tag"
//                                     src={tag}
//                                     alt="Tag Icon"
//                                   />
//                                 }
//                               </div>
//                             </div>
//                           </Card.Body>
//                         </Card>
//                       </Link>
//                     </Col>
//                   ))}
//                 </Row>
//               ) : (
//                 <ul className="list-group ">
//                   {filteredCourses.map((course, index) => (
//                     <li
//                       className="list-group-item justify-content-between align-items-center"
//                       key={index}
//                     >
//                       <div className="row">
//                         <div className="link col-sm-12 ">
//                           <Link
//                             to={`/CourseDetailPage/${course.id}`}
//                             style={{ textDecoration: "none" }}
//                           >
//                             <div className="popins d-flex">
//                               <div className="d-none d-md-block">
//                                 <img
//                                   src={
//                                     course && course.imageKey
//                                       ? require("../assest/" + course.imageKey)
//                                       : ""
//                                   }
//                                   className="img-fluid2"
//                                   alt={`Card ${course.title}`}
//                                 />
//                               </div>

//                               <div className="sum">
//                                 <div className="listview d-flex">
//                                   <h4 className="course-title2 text-start">
//                                     {course.title}
//                                   </h4>
//                                   <div className="fees2">
//                                     <img
//                                       className="tag2"
//                                       src={tag}
//                                       alt="Tag Icon"
//                                     />
//                                   </div>
//                                 </div>
//                                 <div className="description2font">
//                                   {course.description2}
//                                 </div>
//                                 <div className="some row">
//                                   <div className="description2detail col-4">
//                                     {course.lesson}
//                                   </div>
//                                   <div className="description2detail col-4">
//                                     {course.duration}
//                                   </div>
//                                   <div className="description2detail col-4">
//                                     {course.level}
//                                   </div>
//                                 </div>
//                                 <hr />
//                                 <div className="line mt-auto">
//                                   <div>{course.author}</div>
//                                   <button
//                                     className="but2"
//                                     onClick={() =>
//                                       navigateToCourseDetailPage(course.id)
//                                     }
//                                   >
//                                     <span className="text-primary">
//                                       VIEW DETAILS
//                                     </span>
//                                   </button>
//                                 </div>
//                               </div>
//                             </div>
//                           </Link>
//                         </div>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               )}

//               <div className="pagination mt-4 d-flex justify-content-center">
//                 <Pagination.Prev
//                   onClick={() => paginate(currentPage - 1)}
//                   disabled={currentPage === 1}
//                 />
//                 {Array.from({ length: totalPages }, (_, i) => (
//                   <Pagination.Item
//                     key={i}
//                     active={i + 1 === currentPage}
//                     onClick={() => paginate(i + 1)}
//                   >
//                     {i + 1}
//                   </Pagination.Item>
//                 ))}
//                 <Pagination.Next
//                   onClick={() => paginate(currentPage + 1)}
//                   disabled={currentPage === totalPages}
//                 />
//               </div>
//             </Col>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListCourses;


import React, { useState, useEffect } from "react";
import { Card, Row, Col, Pagination } from "react-bootstrap";
import "../css/listcourses.scss";
import search from "../assest/search.svg";
import pop1 from "../assest/pop1.svg";
import listiconblack from "../assest/listiconblack.svg";
import { Link } from "react-router-dom";
import tag from "../assest/tag.svg";

const ListCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceLevels, setSelectedPriceLevels] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("grid");
  const itemsPerPage = 6;

  const filteredCategories = Array.from(
    new Set(courses.map((course) => course.category))
  );

  const filteredPriceLevels = Array.from(
    new Set(courses.map((course) => course.priceLevel))
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://192.168.1.12:8081/dataVentics/allCources');
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data = await response.json();
        setCourses(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (category) => {
    const isSelected = selectedCategories.includes(category);

    if (isSelected) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handlePriceLevelChange = (priceLevel) => {
    const isSelected = selectedPriceLevels.includes(priceLevel);

    if (isSelected) {
      setSelectedPriceLevels(
        selectedPriceLevels.filter((p) => p !== priceLevel)
      );
    } else {
      setSelectedPriceLevels([...selectedPriceLevels, priceLevel]);
    }
  };

  const toggleViewMode = (mode) => {
    setViewMode(mode);
  };

  const filteredCourses = courses.filter((course) => {
    const isCategorySelected =
      selectedCategories.length === 0 ||
      selectedCategories.includes(course.category);
    const isPriceLevelSelected =
      selectedPriceLevels.length === 0 ||
      selectedPriceLevels.includes(course.priceLevel);
    const isSearchMatch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.author.toLowerCase().includes(searchTerm.toLowerCase());

    return isCategorySelected && isPriceLevelSelected && isSearchMatch;
  });

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const navigateToCourseDetailPage = (courseId) => {
    // Implement navigation to course detail page
  };

  return (
    <div className="container dv-list-courses">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
          <div className="card search">
            <div className="card-body category">
              <div className="search-container d-flex">
                <input
                  type="text"
                  placeholder="Search Product.."
                  name="search"
                  className="form-control"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <img className="search-icon" src={search} alt={search} />
              </div>
            </div>
          </div>

          {/* Category filter */}
          <div className="card card2">
            <div className="card-body category">
              <h1 className="h3">Categories</h1>
              <div>
                {filteredCategories.map((category, index) => (
                  <div className="form-check" key={index}>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id={`check${index}`}
                      name={`option${index}`}
                      value={category}
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`check${index}`}
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Price level filter */}
          <div className="card card2">
            <div className="card-body category">
              <h3 className="h3">Price Level</h3>
              <div>
                {filteredPriceLevels.map((priceLevel, index) => (
                  <div className="form-check" key={index}>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id={`priceCheck${index}`}
                      name={`priceOption${index}`}
                      value={priceLevel}
                      checked={selectedPriceLevels.includes(priceLevel)}
                      onChange={() => handlePriceLevelChange(priceLevel)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`priceCheck${index}`}
                    >
                      {priceLevel}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-9 col-lg-9">
          {/* Toggle buttons */}
          <div className="card box-card mb-4 d-none d-sm-block">
            <div className="box">
              <div className="text">
                Showing <span className="text-primary">{currentCourses.length} Courses</span> of {courses.length} Results
              </div>
              <div className="d-flex">
                <button
                  className={`first ${viewMode === "grid" ? "active" : ""}`}
                  onClick={() => toggleViewMode("grid")}
                >
                  <img className="grid-listimg" src={pop1} alt="Button Image" />
                  Grid
                </button>
                <button
                  className={`first black-list-button ${viewMode === "list" ? "active" : ""}`}
                  onClick={() => toggleViewMode("list")}
                >
                  <img className="grid-listimg2" src={listiconblack} alt=" listiconblack" />
                  List
                </button>
              </div>
            </div>
          </div>

          {/* Page */}
          <div className="page">
            <Col lg={12} md={12} sm={12}>
              {/* Conditional rendering based on viewMode */}
              {viewMode === "grid" ? (
                <Row>
                  {/* Grid view */}
                  {currentCourses.map((course, index) => (
                    <Col sm={6} md={4} lg={4} key={index}>
                   
                      <Link to={`/CourseDetailPage/${course.id}`} style={{ textDecoration: "none" }}>
                     
                        <Card className="mb-4">
                          {/* Course image */}
                          {/* <img
                            src={
                              course && course.imageKey
                                ? require("../assest/" + course.imageKey)
                                : ""
                            }
                            className="img-fluid"
                            alt={`Card ${course.title}`}
                          /> */}

<img src={course.image_url} className="img-fluid" 
alt={`Card ${course.title}`} />

                          <Card.Body>
                            {/* Course title */}
                            <Card.Title className="course-title">{course.title}</Card.Title>
                            <Card.Text>
                              {/* Course details */}
                              <div className="row">
                                <div className="col-4 style-col ">{course.lesson}</div>
                                <div className="col-4 style-col">{course.duration}</div>
                                <div className="col-4 style-col">{course.level}</div>
                              </div>
                              <hr />
                            </Card.Text>
                            <div className="row">
                              <div className="col moc">{course.author}</div>
                              <div className="col text-end fees">
                                {/* Tag icon */}
                                <img className="tag" src={tag} alt="Tag Icon" />
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </Link>
                    </Col>
                  ))}
                </Row>
              ) : (
                <ul className="list-group ">
                  {/* List view */}
                  {currentCourses.map((course, index) => (
                    <li
                      className="list-group-item justify-content-between align-items-center"
                      key={index}
                    >
                      <div className="row">
                        <div className="link col-sm-12 ">
                          {/* Link to course detail page */}
                          <Link to={`/CourseDetailPage/${course.id}`} style={{ textDecoration: "none" }}>
                            <div className="popins d-flex">
                              <div className="d-none d-md-block">
                                {/* Course image */}
                                {/* <img
                                  src={
                                    course && course.imageKey
                                      ? require("../assest/" + course.imageKey)
                                      : ""
                                  }
                                  className="img-fluid2"
                                  alt={`Card ${course.title}`}
                                /> */}
                                <img src={course.imageUrl} className="img-fluid" alt={`Card ${course.title}`} />

                              </div>
                              <div className="sum">
                                <div className="listview d-flex">
                                  {/* Course title */}
                                  <h4 className="course-title2 text-start">{course.title}</h4>
                                  <div className="fees2">
                                    {/* Tag icon */}
                                    <img className="tag2" src={tag} alt="Tag Icon" />
                                  </div>
                                </div>
                                {/* Course description */}
                                <div className="description2font">{course.description2}</div>
                                {/* Course details */}
                                <div className="some row">
                                  <div className="description2detail col-4">{course.lesson}</div>
                                  <div className="description2detail col-4">{course.duration}</div>
                                  <div className="description2detail col-4">{course.level}</div>
                                </div>
                                <hr />
                                <div className="line mt-auto">
                                  {/* Course author */}
                                  <div>{course.author}</div>
                                  {/* Button to view details */}
                                  <button
                                    className="but2"
                                    onClick={() => navigateToCourseDetailPage(course.id)}
                                  >
                                    <span className="text-primary">VIEW DETAILS</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </Col>
          </div>
          {/* Pagination */}
          <div className="pagination mt-4 d-flex justify-content-center">
            <Pagination.Prev
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            />
            {Array.from({ length: totalPages }, (_, i) => (
              <Pagination.Item
                key={i}
                active={i + 1 === currentPage}
                onClick={() => paginate(i + 1)}
              >
                {i + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCourses;
