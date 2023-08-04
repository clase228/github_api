import { useEffect, useState } from "react";
import { useSearchUsersMutation,useSearchUserReposMutation } from "../../services/api";
import { UserList } from "../listUser";
import { ModalInfo } from "../modalInfo"; 
import * as S from './styles'
import { Button } from "../button";
export function Main(params) {
   const [value,setValue] =useState()
   const [searchUsers,{ data, error, isLoading }] = useSearchUsersMutation();
   const [searchUserRepos, { data: datasearchUserRepos, error: errorsearchUserRepos, isLoading: isLoadingsearchUserRepos }] = useSearchUserReposMutation();

   //useEffect(() => {
   //   if (data && data.length > 0) {
   //     data.forEach((user) => {
   //       searchUserRepos(user.repos_url);
   //     });
   //   }
   // }, [data]);

    
   const handleSearch = () => {
      searchUsers(value)
    };
    const [currentPage, setCurrentPage] = useState(1);
    
    const totalPages = Math.ceil(data?.items.length / 10);

    const indexOfLastItem = currentPage * 10;
    const indexOfFirstItem = indexOfLastItem - 10;
    const currentItems = data?.items.slice(indexOfFirstItem, indexOfLastItem);
  
    const handleNextPage = () => {
      setCurrentPage((prevPage) => prevPage + 1);
    };
  
    const handlePrevPage = () => {
      setCurrentPage((prevPage) => prevPage - 1);
    };

    const [isModalOpen, setModalstatus] = useState(false)
    const [currentUser, setCurrentUser] = useState('false')
    function moreUserInfo(id) {
      setCurrentUser(currentItems.find((item) => item.id === id))
      setModalstatus(true)
   }
   

   return(
      <div>
         <ModalInfo isModalOpen={isModalOpen} setModalstatus={setModalstatus} info={currentUser}/>
         <input value={value} placeholder="Введите текст" onChange={(e) => setValue(e.target.value)} ></input>
         <button onClick={handleSearch}>Поиск</button>
         {isLoading && <div>Loading...</div>}
         {error && <div>Error: {error.message}</div>}
         {data && (
            <S.ListWrapper>
              {currentItems.map((el,i) => (
                <UserList img={el.avatar_url}  moreUserInfo={moreUserInfo} id={el.id} name={el.login} repos_url={el.repos_url}/>
              ))}
            </S.ListWrapper>
      )}
       <div>
        <Button onClick={handlePrevPage} disabled={currentPage === 1}>Предыдущая страница</Button>
        <Button onClick={handleNextPage} disabled={currentPage === totalPages}>Следующая страница</Button>
      </div>

      <p>Текущая страница: {currentPage}</p>
      <p>Всего страниц: {totalPages}</p>
      
      </div>
   )
}