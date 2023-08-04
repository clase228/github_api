import * as S from './styles'
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useSearchUserReposMutation } from "../../services/api";
export function ModalInfo({info,isModalOpen,setModalstatus}) {

 return(
   <S.ModalWrapper style={isModalOpen?{display:'flex'} : {display:'none'}}>
   <S.ModalContainer>
      <S.ModalHeader>
         Подробная информация по пользователю "<span style={{color:'#50cd89'}}>{info.login}</span>"
      </S.ModalHeader>
      <S.ModalClose onClick={()=>{setModalstatus(false)}}>X</S.ModalClose>
      <S.ModalContent >
         <S.ModalImgColumn >
            <S.ModalImg src={info.avatar_url}/>
         </S.ModalImgColumn>
         <S.ModalInfoColumn>
            <S.ModalInfoText>ID :<S.ModalInfoValue>{info.id}</S.ModalInfoValue></S.ModalInfoText>
            <S.ModalInfoText>URL API :<S.ModalInfoValueLink target='_blank' href={info.url}>{info.login}</S.ModalInfoValueLink></S.ModalInfoText>
            <S.ModalInfoText>URL HTML :<S.ModalInfoValueLink target='_blank' href={info.html_url}>{info.login}</S.ModalInfoValueLink></S.ModalInfoText>
            <S.ModalInfoText>Тип :<S.ModalInfoValue>{info.type}</S.ModalInfoValue></S.ModalInfoText>
            <S.ModalInfoText>Количество репозиториев :<S.ModalInfoValue></S.ModalInfoValue></S.ModalInfoText>
         </S.ModalInfoColumn>
      </S.ModalContent>
   </S.ModalContainer>
</S.ModalWrapper>
 )
}