import * as S from './styles'
export function UserList({img,name,id,moreUserInfo}) {

   return(
      <S.List onClick={()=>moreUserInfo(id)}>
         <S.Avatar src={img}/>
         <div>{name}</div>

      </S.List>
   )
}