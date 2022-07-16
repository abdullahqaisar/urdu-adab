// import React from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Login.css";

// class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       emailError: false,
//       emailError2: false,
//       password: "",
//       passwordError: false,
//       formValid: false,
//       authError: false,
//       formSubmitted: false,
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleEmailBlur = this.handleEmailBlur.bind(this);
//     this.handlePasswordBlur = this.handlePasswordBlur.bind(this);
//   }

//   isValidEmail(email) {
//     return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
//   }

//   handleEmailBlur(e) {
//     const name = e.target.name;
//     const value = e.target.value;

//     this.setState({ [name]: value });
//     this.setState({ emailError2: false });

//     if (value.length <= 0) {
//       this.setState({ emailError: true });
//     } else {
//       this.setState({ emailError: false });
//       if (!this.isValidEmail(value)) {
//         this.setState({ emailError2: true });
//       }
//     }

//     this.setState({ formSubmitted: false });
//   }

//   handlePasswordBlur(e) {
//     const name = e.target.name;
//     const value = e.target.value;

//     this.setState({ [name]: value });
//     this.setState({ emailError2: false });

//     if (value.length <= 0) {
//       this.setState({ passwordError: true });
//     } else {
//       this.setState({ passwordError: false });
//     }

//     this.setState({ formSubmitted: false });
//   }

//   handleChange(e) {
//     this.setState({ formSubmitted: false });
//     this.setState({ formValid: false });
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   handleSubmit(e) {
//     const {
//       email,
//       password,
//       emailError,
//       emailError2,
//       passwordError,
//       formSubmitted,
//     } = this.state;

//     this.setState({ authError: true });
//     this.setState({ emailError: email ? false : true });
//     if (email && !emailError) {
//       this.setState({ emailError2: this.isValidEmail(email) ? false : true });
//     }
//     this.setState({ passwordError: password ? false : true });

//     if (email && password && !passwordError && !emailError && !emailError2) {
//       this.setState({ formValid: true });
//       this.setState({ formSubmitted: true });

//       if (email === "abdullah@gmail.com" && password === "abdullah") {
//         this.setState({ authError: false });
//       }
//     } else {
//       this.setState({ formValid: false });
//     }

//     e.preventDefault();
//   }

//   render() {
//     const {
//       email,
//       password,
//       passwordError,
//       emailError,
//       emailError2,
//       formSubmitted,
//       authError,
//     } = this.state;

//     return (
//       <div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light">
//         <div className="card-header bg-transparent border-0 text-center text-uppercase">
//           <h3>User Login</h3>
//         </div>
//         <div className="card-body">
//           {!authError && formSubmitted ? (
//             <div className="alert alert-success mt-2">
//               You are logged in successfully.
//             </div>
//           ) : (
//             ""
//           )}
//           {authError && formSubmitted ? (
//             <div className="alert alert-danger mt-2">
//               Please use valid credentails to login.
//             </div>
//           ) : (
//             ""
//           )}
//           <form
//             action="/"
//             onSubmit={(e) => this.handleSubmit(e)}
//             encType="multipart/form-data"
//             autoComplete="off"
//           >
//             <div className="form-group">
//               <label className="mb-0">
//                 Email<span className="text-danger">*</span>
//               </label>
//               <input
//                 name="email"
//                 type="email"
//                 className="form-control"
//                 placeholder="Email"
//                 value={email}
//                 onChange={this.handleChange}
//                 onBlur={this.handleEmailBlur}
//               />
//               {emailError ? (
//                 <div className="alert alert-danger mt-2">
//                   Email is a required field.
//                 </div>
//               ) : (
//                 ""
//               )}
//               {emailError2 ? (
//                 <div className="alert alert-danger mt-2">Email invalid.</div>
//               ) : (
//                 ""
//               )}
//             </div>
//             <div className="form-group">
//               <label className="mb-0">
//                 Password<span className="text-danger">*</span>
//               </label>
//               <input
//                 name="password"
//                 type="password"
//                 className="form-control"
//                 placeholder="Password"
//                 value={password}
//                 onChange={this.handleChange}
//                 onBlur={this.handlePasswordBlur}
//               />
//               {passwordError ? (
//                 <div className="alert alert-danger mt-2">
//                   Password is a required field.
//                 </div>
//               ) : (
//                 ""
//               )}
//             </div>
//             <p className="text-center mb-0">
//               <input
//                 type="submit"
//                 className="btn btn-primary btn-lg w-100 text-uppercase"
//                 value="Login"
//               />
//             </p>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default Login;
