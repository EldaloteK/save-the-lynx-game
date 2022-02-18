// import * as React from "react";

// function GameSetup(props: any) {
//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//   };

//   return (
//     <div className="PlayerFormContainer">
//       <form className="PlayerForm" onSubmit={handleSubmit}>
//         <label>First Player:</label>
//         <div className="PlayerFormInputButton">
//           <input
//             type="text"
//             value={playerOne}
//             onChange={(e) => setPlayerOne(e.target.value)}
//           />
//           <button type="submit">
//             <svg
//               width="30px"
//               height="30px"
//               viewBox="0 0 190 168"
//               version="1.1"
//               xmlns="http://www.w3.org/2000/svg"
//               xmlnsXlink="http://www.w3.org/1999/xlink">
//               <g
//                 id="lynx"
//                 stroke="none"
//                 strokeWidth="1"
//                 fill="none"
//                 fillRule="evenodd">
//                 <g
//                   id="paw-1"
//                   transform="translate(0.351184, 0.122896)"
//                   fill="#9B7E5C"
//                   stroke="#C6B6AE"
//                   strokeWidth="5">
//                   <ellipse
//                     id="toe-2-paw-1"
//                     transform="translate(67.648816, 36.377104) rotate(-7.000000) translate(-67.648816, -36.377104) "
//                     cx="67.6488158"
//                     cy="36.3771045"
//                     rx="20.5"
//                     ry="31"></ellipse>
//                   <ellipse
//                     id="toe-3-paw-1"
//                     transform="translate(123.648816, 35.377104) rotate(5.000000) translate(-123.648816, -35.377104) "
//                     cx="123.648816"
//                     cy="35.3771045"
//                     rx="20.5"
//                     ry="31"></ellipse>
//                   <ellipse
//                     id="toe-1-paw-1"
//                     transform="translate(24.558304, 78.272603) rotate(-10.000000) translate(-24.558304, -78.272603) "
//                     cx="24.558304"
//                     cy="78.2726026"
//                     rx="17.5"
//                     ry="25.5"></ellipse>
//                   <ellipse
//                     id="toe-4-paw-1"
//                     transform="translate(164.546140, 76.475515) rotate(9.000000) translate(-164.546140, -76.475515) "
//                     cx="164.54614"
//                     cy="76.4755152"
//                     rx="17.5"
//                     ry="25.5"></ellipse>
//                   <path
//                     d="M29.66481,146.206729 C24.9374437,133.55399 39.2341559,124.062608 57.633011,105.621931 C66.4718312,96.76302 69.7262686,80.3771045 89.0796751,80.3771045 C108.433081,80.3771045 108.433081,98.0944988 118.256528,105.621931 C146.445263,127.222172 156.516606,139.756534 144.286546,152.798595 C129.561182,168.501633 109.697091,168.501633 84.6942703,152.798595 C55.5169136,168.501633 37.1737602,166.304344 29.66481,146.206729 Z"
//                     id="pad-paw-1"></path>
//                 </g>
//               </g>
//             </svg>
//           </button>
//         </div>
//       </form>
//       <form className="PlayerForm" onSubmit={handleSubmit}>
//         <label>Second Player:</label>
//         <div className="PlayerFormInputButton">
//           <input
//             type="text"
//             value={playerTwo}
//             onChange={(e) => setPlayerTwo(e.target.value)}
//           />
//           <button type="submit">
//             <svg
//               width="30px"
//               height="30px"
//               viewBox="0 0 190 168"
//               version="1.1"
//               xmlns="http://www.w3.org/2000/svg"
//               xmlnsXlink="http://www.w3.org/1999/xlink">
//               <g
//                 id="lynx"
//                 stroke="none"
//                 strokeWidth="1"
//                 fill="none"
//                 fillRule="evenodd">
//                 <g
//                   id="paw-2"
//                   transform="translate(0.351184, 0.122896)"
//                   fill="#A39988"
//                   stroke="#C6B6AE"
//                   strokeWidth="5">
//                   <ellipse
//                     id="toe-2-paw-2"
//                     transform="translate(67.648816, 36.377104) rotate(-7.000000) translate(-67.648816, -36.377104) "
//                     cx="67.6488158"
//                     cy="36.3771045"
//                     rx="20.5"
//                     ry="31"></ellipse>
//                   <ellipse
//                     id="toe-3-paw-2"
//                     transform="translate(123.648816, 35.377104) rotate(5.000000) translate(-123.648816, -35.377104) "
//                     cx="123.648816"
//                     cy="35.3771045"
//                     rx="20.5"
//                     ry="31"></ellipse>
//                   <ellipse
//                     id="toe-1-paw-2"
//                     transform="translate(24.558304, 78.272603) rotate(-10.000000) translate(-24.558304, -78.272603) "
//                     cx="24.558304"
//                     cy="78.2726026"
//                     rx="17.5"
//                     ry="25.5"></ellipse>
//                   <ellipse
//                     id="toe-4-paw-2"
//                     transform="translate(164.546140, 76.475515) rotate(9.000000) translate(-164.546140, -76.475515) "
//                     cx="164.54614"
//                     cy="76.4755152"
//                     rx="17.5"
//                     ry="25.5"></ellipse>
//                   <path
//                     d="M29.66481,146.206729 C24.9374437,133.55399 39.2341559,124.062608 57.633011,105.621931 C66.4718312,96.76302 69.7262686,80.3771045 89.0796751,80.3771045 C108.433081,80.3771045 108.433081,98.0944988 118.256528,105.621931 C146.445263,127.222172 156.516606,139.756534 144.286546,152.798595 C129.561182,168.501633 109.697091,168.501633 84.6942703,152.798595 C55.5169136,168.501633 37.1737602,166.304344 29.66481,146.206729 Z"
//                     id="pad-paw-2"></path>
//                 </g>
//               </g>
//             </svg>
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default GameSetup;
