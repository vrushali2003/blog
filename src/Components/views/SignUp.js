// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../css/signup.scss";
// import signupData from "../json/signup.json";
// import ResetEmail from "./ResetEmail";
// const SignUp = () => {
//   const navigate = useNavigate();
//   console.log(signupData);
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     emailId: '',
//     password: '',
//     mobileNumber: ''
//   });
//   const [firstname, setFirstName] = useState("");
//   const [lastname, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [signInEmail, setSignInEmail] = useState("");
//   const [signInPassword, setSignInPassword] = useState("");

//   const [firstnameError, setFirstnameError] = useState("");
//   const [lastnameError, setLastnameError] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [phoneError, setPhoneError] = useState("");
//   const [isFirstNameLabelVisible, setIsFirstNameLabelVisible] = useState(true);
//   const [isLastNameLabelVisible, setIsLastNameLabelVisible] = useState(true);
//   const [isEmailLabelVisible, setIsEmailLabelVisible] = useState(true);
//   const [isPasswordLabelVisible, setIsPasswordLabelVisible] = useState(true);
//   const [isPhoneLabelVisible, setIsPhoneLabelVisible] = useState(true);

//   const [showPasswordRecovery, setShowPasswordRecovery] = useState(false);
//   const [registrationStatus, setRegistrationStatus] = useState("");

//   const handleForgotPassword = () => {
//     setShowPasswordRecovery(true);
//   };

//   const handleCancelPasswordRecovery = () => {
//     setShowPasswordRecovery(false);
//   };
//   const toggleForm = () => {
//     setIsSignUp(!isSignUp);
//   };
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleFirstNameChange = (e) => {
//     const inputFirstname = e.target.value;

//     // Check if the first letter is capital
//     const firstLetter = inputFirstname.charAt(0);
//     if (!firstLetter.match(/[A-Z]/)) {
//       setFirstnameError("First letter must be capital.");
//     } else {
//       setFirstnameError("");
//     }

//     // Update the state with the entered first name
//     setFirstName(inputFirstname);
//   };
//   const handleLastNameChange = (e) => {
//     const inputLastname = e.target.value;

//     // Check if the first letter is capital
//     const firstLetter = inputLastname.charAt(0);
//     if (!firstLetter.match(/[A-Z]/)) {
//       setLastnameError("First letter must be capital.");
//     } else {
//       setLastnameError("");
//     }

//     // Update the state with the entered last name
//     setLastName(inputLastname);
//   };

//   const handleEmailChange = (e) => {
//     const inputEmail = e.target.value;

//     // Perform validation checks using a regular expression
//     const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
//     if (!emailRegex.test(inputEmail)) {
//       setEmailError("Please enter a valid email address.");
//     } else {
//       setEmailError("");
//     }

//     // Update the state with the entered email
//     setEmail(inputEmail);
//   };

//   // Event handler for password input changes
//   const handlePasswordChange = (e) => {
//     const inputPassword = e.target.value;

//     // Perform validation checks using a regular expression
//     const passwordRegex =
//       /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
//     if (!passwordRegex.test(inputPassword)) {
//       setPasswordError(
//         "Password must be at least 8 characters long and contain at least one letter, one number, and one special character."
//       );
//     } else {
//       setPasswordError("");
//     }

//     // Update the state with the entered password
//     setPassword(inputPassword);
//   };

//   // Event handler for phone number input changes
//   const handlePhoneChange = (e) => {
//     const inputPhone = e.target.value;

//     // Check if the phone number is a valid 10-digit number
//     if (!inputPhone.match(/^[0-9]+$/) || inputPhone.length !== 10) {
//       setPhoneError("Please enter a valid 10-digit phone number.");
//     } else {
//       setPhoneError("");
//     }

//     // Update the state with the entered phone number
//     setPhone(inputPhone);
//   };

//   const handleSignInEmailChange = (e) => {
//     const inputEmail = e.target.value;

//     // Perform validation checks using a regular expression
//     const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
//     if (!emailRegex.test(inputEmail)) {
//       setEmailError("Please enter a valid email address.");
//     } else {
//       setEmailError("");
//     }

//     // Update the state with the entered email
//     setSignInEmail(inputEmail);
//   };

//   const handleSignInPasswordChange = (e) => {
//     const inputPassword = e.target.value;

//     // Perform validation checks using a regular expression
//     // Ensure the password has at least 8 characters, one letter, one number, and one special character
//     const passwordRegex =
//       /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
//     if (!passwordRegex.test(inputPassword)) {
//       setPasswordError(
//         "Password must be at least 8 characters long and contain at least one letter, one number, and one special character."
//       );
//     } else {
//       setPasswordError("");
//     }

//     // Update the state with the entered password
//     setSignInPassword(inputPassword);
//   };

//   const handleSignIn = async (e) => {
//     e.preventDefault();

//     try {
//       // const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

//       // // Check credentials in local storage
//       // const foundUserLocal = existingUsers.find(
//       //   (user) =>
//       //     user.email.toLowerCase() === signInEmail.toLowerCase() &&
//       //     user.password === signInPassword
//       // );

//       // if (foundUserLocal) {
//       //   localStorage.setItem("loggedInUser", JSON.stringify(foundUserLocal));
//       //   setSignInEmail("");
//       //   setSignInPassword("");
//       //   window.alert("Login successful!");
//       //   // navigate("/", { state: { user: foundUserLocal } });
//       //   navigate("/Home");
//       //   return;
//       // }

//       // If not found locally, check database
//       const ApiUrl = " http://localhost:8081/dataVentics/registrationOfNewUser";
//       const response = await fetch(ApiUrl);
//       const data = await response.json();

//       const sheetUsers = data.values.slice(1).map((row) => {
//         return {
//           firstname: row[0],
//           email: row[2],
//           password: row[3],
//           // Add other fields as needed
//         };
//       });

//       const foundUserSheet = sheetUsers.find(
//         (user) =>
//           user.email.toLowerCase() === signInEmail.toLowerCase() &&
//           user.password === signInPassword
//       );

//       if (foundUserSheet) {
//         localStorage.setItem("loggedInUser", JSON.stringify(foundUserSheet));
//         setSignInEmail("");
//         setSignInPassword("");
//         window.alert("Login successful!");
//         navigate("/Home", { state: { user: foundUserSheet } });
//       } else {
//         console.error("Invalid email or password");
//         window.alert("Invalid email or password. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error during sign in:", error);
//     }
//   };

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     console.log("submitted");
//     try {
//       // const newUser = {
//       //   firstName: '',
//       //   lastName: '',
//       //   emailId: '',
//       //   password: '',
//       //   mobileNumber:''
//       // };
//       if (!firstname || !lastname || !email || !password || !phone) {
//         console.error("Please fill in all the required fields");
//         window.alert("Please fill in all the required fields");
//         return;
//       }
//       // Your async fetch registration logic here

//       // Example:
//       const registrationApiUrl =
//         "http://localhost:8081/dataVentics/registrationOfNewUser";
//         const response = await fetch(registrationApiUrl, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             // Accept: "application/json"
//           },
//           body: JSON.stringify(newUser)
//         });
//       console.log("Response Status:", response.status);
//       console.log("Response Status Text:", response.statusText);

//       if (response.ok) {
//         const responseData = await response.json();
//         console.log(responseData);

//         // Handle the response as needed

//         if (responseData.emailExists) {
//           console.error("Email address already registered.");
//           window.alert(
//             "Email address is already registered. Please use a different email."
//           );
//           return;
//         }

//         // Handle successful registration
//         console.log("User registered successfully:", newUser);
//         window.alert("Registration successful");

//         // Reset input fields on successful registration
//         setFirstName("");
//         setLastName("");
//         setEmail("");
//         setPassword("");
//         setPhone("");

//         // Switch to the login view
//         setIsSignUp(false);
//       } else {
//         console.error("Error during registration:", response.statusText);
//         window.alert("Registration failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error during registration:", error);
//       window.alert("Registration failed. Please try again.");
//       // Display an alert or update state to indicate the error
//     }
//   };

//   return (
//     <div
//       className={`container my-container mt-5  ${
//         isSignUp ? "right-panel-active" : ""
//       }`}
//     >
//       <div className="row">
//         <div className="col-12 col-sm-12 col-md-6 col-lg-6 form-container sign-up-container">
//           <form className="action-form-panel" onSubmit={handleSignUp}>
//             <h2 className="heading-panel">Create Account</h2>

//             <input
//               className={`input-style-form ${
//                 firstnameError ? "error-input" : ""
//               }`}
//               type="text"
//               placeholder="First Name"
//               value={firstname}
//               required
//               onChange={handleFirstNameChange}
//               onFocus={() => setIsFirstNameLabelVisible(false)}
//               onBlur={() => setIsFirstNameLabelVisible(!!firstname)}
//             />
//             {isFirstNameLabelVisible && <label></label>}
//             {firstnameError && (
//               <div className="error-message red-color">{firstnameError}</div>
//             )}

//             <input
//               className={`input-style-form ${
//                 lastnameError ? "error-input" : ""
//               }`}
//               type="text"
//               placeholder="Last Name"
//               value={lastname}
//               required
//               onChange={handleLastNameChange}
//               onFocus={() => setIsLastNameLabelVisible(false)}
//               onBlur={() => setIsLastNameLabelVisible(!!lastname)}
//             />
//             {isLastNameLabelVisible && <label></label>}
//             {lastnameError && (
//               <div className="error-message red-color">{lastnameError}</div>
//             )}

//             <input
//               className={`input-style-form ${emailError ? "error-input" : ""}`}
//               type="email"
//               placeholder="E-mail"
//               value={email}
//               required
//               onChange={handleEmailChange}
//               onFocus={() => setIsEmailLabelVisible(false)}
//               onBlur={() => setIsEmailLabelVisible(!!email)}
//             />
//             {isEmailLabelVisible && <label></label>}
//             {emailError && (
//               <div className="error-message red-color">{emailError}</div>
//             )}

//             <input
//               className={`input-style-form ${
//                 passwordError ? "error-input" : ""
//               }`}
//               type="password"
//               placeholder="Password"
//               value={password}
//               required
//               onChange={handlePasswordChange}
//               onFocus={() => setIsPasswordLabelVisible(false)}
//               onBlur={() => setIsPasswordLabelVisible(!!password)}
//             />
//             {isPasswordLabelVisible && <label></label>}
//             {passwordError && (
//               <div className="error-message red-color">{passwordError}</div>
//             )}

//             <input
//               className={`input-style-form ${phoneError ? "error-input" : ""}`}
//               type="tel"
//               placeholder="Phone Number"
//               value={phone}
//               required
//               onChange={handlePhoneChange}
//               onFocus={() => setIsPhoneLabelVisible(false)}
//               onBlur={() => setIsPhoneLabelVisible(!!phone)}
//             />
//             {isPhoneLabelVisible && <label></label>}
//             {phoneError && (
//               <div className="error-message red-color">{phoneError}</div>
//             )}

//             <button className="style-button-panel" type="submit">
//               Sign Up
//             </button>
//           </form>
//           {/* Display registration status message */}
//           {registrationStatus && <div>{registrationStatus}</div>}
//         </div>

//         <div className="col-12 col-sm-12 col-md-6 col-lg-6 form-container-1 sign-in-container-1">
//           <form className="action-form-panel" onSubmit={handleSignIn}>
//             <h2 className="heading-panel">LOGIN</h2>

//             <input
//               className={`input-style-form ${emailError ? "error-input" : ""}`}
//               type="email"
//               placeholder="E-mail"
//               value={signInEmail}
//               required
//               onChange={handleSignInEmailChange}
//             />
//             {emailError && (
//               <div className="error-message red-color">{emailError}</div>
//             )}

//             <input
//               className={`input-style-form ${
//                 passwordError ? "error-input" : ""
//               }`}
//               type="password"
//               placeholder="Password"
//               required
//               value={signInPassword}
//               onChange={handleSignInPasswordChange}
//             />
//             {passwordError && (
//               <div className="error-message red-color">{passwordError}</div>
//             )}
//             <button className="style-button-panel" type="submit">
//               Log In
//             </button>

//             <button id="forgotPassword" onClick={handleForgotPassword}>
//               Forgot Password
//               {showPasswordRecovery && <ResetEmail />}
//             </button>
//           </form>
//         </div>
//       </div>

//       <div className="overlay-container">
//         <div className={`overlay ${isSignUp ? "right-panel-active" : ""}`}>
//           <div className="overlay-panel overlay-left">
//             <h2 className="heading-panel-1">Welcome Back!</h2>
//             <p className="para-panel-1">
//               To keep connected with us, please log in with your personal info
//             </p>
//             <button
//               className="ghost  style-button-panel"
//               id="signIn"
//               onClick={toggleForm}
//             >
//               Sign In
//             </button>
//           </div>

//           <div className="overlay-panel overlay-right">
//             <h2 className="heading-panel-1">Hello, Friend!</h2>
//             <p className="para-panel-1">
//               Enter your personal details and start your journey with us
//             </p>
//             <button
//               className="ghost  style-button-panel"
//               id="signUp"
//               onClick={toggleForm}
//             >
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;


import React, { useState } from 'react';
import "../css/signup.scss";
function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    password: '',
    mobileNumber: ''
  });
  const [isSignUp, setIsSignUp] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8081/dataVentics/registrationOfNewUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('User registered successfully!');
        // Optionally, you can reset the form after successful registration
        setFormData({
          firstName: '',
          lastName: '',
          emailId: '',
          password: '',
          mobileNumber: ''
        });
      } else {
        console.error('Failed to register user');
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div
    className={`container my-container mt-5  ${
      isSignUp ? "right-panel-active" : ""
    }`}
  >
    <div className="row">
      <div className="col-12 col-sm-12 col-md-6 col-lg-6 form-container sign-up-container">
    <form className="action-form-panel" onSubmit={handleSubmit}>
    <h2 className="heading-panel">Create Account</h2>
    
      
    <input
  className="input-style-form"  
  placeholder="First Name"
  required
  type="text"
  name="firstName"
  value={formData.firstName}
  onChange={handleChange}
/>
<input
  className="input-style-form"  
  placeholder="Last Name"
  required
  type="text"
  name="lastName"
  value={formData.lastName}
  onChange={handleChange}
/>
<input
  className="input-style-form"
  placeholder="Email-Id"
  required
  type="email"
  name="emailId"  // Remove the space before "emailId"
  value={formData.emailId}
  onChange={handleChange}
/>

<input
  className="input-style-form"  
  placeholder="Password"
  required
  type="text"
  name="password"
  value={formData.password}
  onChange={handleChange}
/>

<input
  className="input-style-form"  
  placeholder="Mobile Number"
  required
  type="tel"
  name="mobileNumber"
  value={formData. mobileNumber}
  onChange={handleChange}
/>
      
   
<button className="style-button-panel" type="submit">
              Sign Up
            </button>
    </form>
    </div>
      

    <div className="col-12 col-sm-12 col-md-6 col-lg-6 form-container-1 sign-in-container-1">
    <form className="action-form-panel">
            <h2 className="heading-panel">LOGIN</h2>



            <input
              className="input-style-form"  
              type="email"
              placeholder="E-mail"
             
              required
              
            />
             <input
              className="input-style-form"  
               
              type="password"
              placeholder="Password"
              required
            
            />

<button className="style-button-panel" type="submit">
              Log In
            </button>
            </form>
      
      
      </div>



      <div className="overlay-container">
        <div className={`overlay ${isSignUp ? "right-panel-active" : ""}`}>
          <div className="overlay-panel overlay-left">
            <h2 className="heading-panel-1">Welcome Back!</h2>
            <p className="para-panel-1">
              To keep connected with us, please log in with your personal info
            </p>
            <button
              className="ghost  style-button-panel"
              id="signIn"
              onClick={toggleForm}
            >
              Sign In
            </button>
          </div>

          <div className="overlay-panel overlay-right">
            <h2 className="heading-panel-1">Hello, Friend!</h2>
            <p className="para-panel-1">
              Enter your personal details and start your journey with us
            </p>
            <button
              className="ghost  style-button-panel"
              id="signUp"
              onClick={toggleForm}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      
    </div>
    </div>
  );
}

export default SignUp;