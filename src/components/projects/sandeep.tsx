// import "./style.scss";
// import { ReactComponent as LikeIcon } from "../../../assets/icons/like-icon.svg";
// import { ReactComponent as DisLikeIcon } from "../../../assets/icons/dislike-icon.svg";
// import { ReactComponent as CopyIcon } from "../../../assets/icons/copy-icon.svg";
// import { ReactComponent as RefreshIcon } from "../../../assets/icons/refresh-icon.svg";
// import { ReactComponent as CGAIIcon } from "../../../assets/icons/cg-ai-icon.svg";
// import { ReactComponent as UserIcon } from "../../../assets/icons/user-icon.svg";
// import { useContext, useEffect, useState } from "react";
// import ConfirmationModal from "../../shared/confirmatioModal/ConfirmationModal";
// import { ApplicationCtx } from "../../../contexts/ApplicationCtx";

// const ChatQNA = ({ question, answer }: { question: any; answer: any }) => {
//   const [completedTyping, setCompletedTyping] = useState(false);
//   const [displayResponse, setDisplayResponse] = useState("");
//   const [document, setDocument] = useState<any>();
//   const { showStopResponding, setShowStopResponding, cgUser } =
//     useContext(ApplicationCtx);
//   const [currentIntervalId, setCurrentIntervalId] = useState<any>();
//   const [copyButtonText, setCopyButtonText] = useState("Copy");

//   useEffect(() => {
//     loadAnswer();
//   }, [answer]);

//   useEffect(() => {
//     if (completedTyping) {
//       setShowStopResponding(false);
//     }
//   }, [completedTyping]);

//   useEffect(() => {
//     if (!showStopResponding) {
//       setCompletedTyping(true);
//       clearInterval(currentIntervalId);
//     }
//   }, [showStopResponding]);

//   const loadAnswer = () => {
//     if (answer.length === 0) {
//       return;
//     }
//     setCompletedTyping(false);

//     //check if the URL is containes specified API
//     const isApiChat = window.location.href.includes("chats?id=");

//     if (isApiChat) {
//       setDisplayResponse(answer);
//       setCompletedTyping(true);
//       return;
//     }

//     let i = 0;
//     let ansArray = answer.split(" ");
//     let ans = "";
//     const intervalId = setInterval(() => {
//       ans += i < ansArray.length ? ansArray[i] + " " : "";
//       setDisplayResponse(ans);
//       i++;
//       if (i > ansArray.length) {
//         clearInterval(intervalId);
//         setCompletedTyping(true);
//       }
//     }, 150);

//     setCurrentIntervalId(intervalId);

//     return () => {
//       clearInterval(intervalId);
//     };
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(displayResponse).then(
//       function () {
//         setCopyButtonText("Copied");

//         setTimeout(() => {
//           setCopyButtonText("Copy");
//         }, 2000);
//       },
//       function (err) {
//         console.error("Unable to copy text to clipboard", err);
//       }
//     );
//   };

//   return (
//     <>
//       <div className="qna-section">
//         {question && (
//           <div className="user-details">
//             <div className="cg-user-icon">
//               <img
//                 width="40px"
//                 height="40px"
//                 src={cgUser?.picture}
//                 className="profile-pic"
//               />
//             </div>
//             <div className="question-section">
//               <div className="user-name">{cgUser?.name}</div>
//               <br />
//               <div className="question">
//                 <div className="h3-white-light">{question}</div>
//               </div>
//             </div>
//           </div>
//         )}
//         {answer && (
//           <div className="answer-main-con">
//             <div className="answer-con">
//               <div className="cg-answers">
//                 <div className="cg-logo">
//                   <CGAIIcon />
//                 </div>
//                 <div className="answer-section">
//                   <div className="user-name">CG AI</div>
//                   <br />
//                   <div className="answer">
//                     <span className="h3-white-light">{displayResponse}</span>
//                   </div>
//                   {completedTyping && (
//                     <>
//                       {/* <div className="h3-white mt-32">Sources:</div> <br />
//                       <div className="links">
//                         <a href="#">Learners.net</a> &nbsp;
//                         <a href="#">Tradingview.com</a>
//                       </div> */}
//                     </>
//                   )}
//                 </div>
//               </div>
//             </div>
//             {completedTyping && (
//               <>
//                 <div className="like-dislike-con">
//                   <div className="left-icon-con">
//                     <LikeIcon />
//                   </div>
//                   <div className="right-icon-con">
//                     <DisLikeIcon />
//                   </div>
//                 </div>
//                 <div className="chatQna-button-con">
//                   <div className="icon-button-con">
//                     <div className="icon-text" onClick={copyToClipboard}>
//                       {copyButtonText}
//                     </div>
//                     <CopyIcon />
//                   </div>
//                   {/* <div className="icon-button-con">
//                     <div className="icon-text">Regenerate</div>
//                     <RefreshIcon />
//                   </div> */}
//                 </div>
//               </>
//             )}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };
// export default ChatQNA;
