import styled from "styled-components";
export const ModalWrapper = styled.div`
   display:none;
   align-items:center;
   justify-content:center;
   position:fixed;
   width:100vw;
   height:100vh;
   background: rgba(0,0,0,0.2);
   left:0;
   top:0;
`
export const ModalContainer = styled.div`
   padding:15px;
   width:60%;
   height:auto;
   background:#292a2d;
   position:relative;
 
`
export const ModalClose = styled.div`
   position:absolute;
   cursor:pointer;
   right:15px;
   top:5px;
`
export const ModalHeader = styled.div`
   color:#fff;
   font-size:25px;
   margin-bottom:15px;
`
export const ModalContent = styled.div`

   display:flex;
   margin:0 -15px;

   font-size:20px;
   
   `
export const ModalImgColumn = styled.div`
margin:0 15px;
   width:25%
`
export const ModalImg = styled.img`
width:100%
`
export const ModalInfoColumn = styled.div`
margin:0 15px;
   color:#fff;
`
export const ModalInfoText = styled.div`
   color:#fff;
   display:flex;
`
export const ModalInfoValue = styled.div`
margin-left:15px;
   color:#50cd89;
`
export const ModalInfoValueLink = styled.a`
   margin-left:15px;
   color:#50cd89;
   text-decoration:underline;
`