import React from 'react';
import Media from 'react-media';
import s from './Table.module.css';
// import sprite from '../../../sprites/delete-icon.svg';
import st from './TableItem.module.css';

function Table({ library 
  // onDelete 
}) {
  let filteredLibrary = library.filter(book => book !== undefined);

  return (
    <>
      {filteredLibrary.length > 0 && (
        <Media
          query="(min-width: 768px)"
          render={() => (
            <div className={s.bookColumns}>
              <p className={s.title}>Назва</p>
              <p className={s.author}>Автор</p>
              <p className={s.year}>Рік</p>
              <p className={s.page}>Стор.</p>
            </div>
          )}
        />
      )}

      <ul className={filteredLibrary.length > 3 ? s.list_more : s.list}>
        {filteredLibrary.length > 0 &&
          filteredLibrary.map(
            ({ _id: id, title, author, year, totalPages }) => (
              <li className={st.card} key={id} id={id}>
                <div className={st.iconTitle}>
                  <input className={st.navIcon} type='checkbox'></input>
                  {/* <div className={st.navIcon}>{<FirstBook />}</div> */}
                  <p className={st.bookTitle}>{title}</p>
                </div>
                <div className={st.bookInfoWrapper}>
                  <div className={st.bookMoreInfo}>
                    <p
                      className={
                        author.length > 30
                          ? st.bookMoreInfoAuthor
                          : st.authorText
                      }
                    >
                      {author}
                    </p>
                    <p className={st.bookMoreInfoYear}>{year}</p>
                    <p className={st.bookMoreInfoPage}>{totalPages}</p>
                    {/* <button
                      type="button"
                      className={st['btn-book-delete']}
                      onClick={() => onDelete(id)}
                    >
                      <svg
                        className={st['book-delete-icon']}
                        width="22"
                        height="17"
                      >
                        <use href={sprite + '#delete'} />
                      </svg>
                    </button> */}
                  </div>
                </div>
              </li>
            )
          )}
      </ul>
    </>
  );
}

export default Table;
