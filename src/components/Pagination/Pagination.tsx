import * as ReactPaginateModule from 'react-paginate';
import type { ComponentType } from 'react';
import css from './Pagination.module.css';

// react-paginate — старый UMD-пакет. В некоторых сборках (Vite/esbuild
// production build) его default-экспорт заворачивается дважды,
// поэтому резолвим компонент вручную, на все случаи сразу.
const ReactPaginate = ((ReactPaginateModule as any).default?.default ??
  (ReactPaginateModule as any).default ??
  ReactPaginateModule) as ComponentType<any>;

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (selectedPage: number) => void;
}

export default function Pagination({
  pageCount,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const handlePageClick = (selectedItem: { selected: number }) => {
    onPageChange(selectedItem.selected + 1);
  };

  return (
    <ReactPaginate
      pageCount={pageCount}
      forcePage={currentPage - 1}
      onPageChange={handlePageClick}
      containerClassName={css.pagination}
      activeClassName={css.active}
      nextLabel="→"
      previousLabel="←"
      renderOnZeroPageCount={null}
    />
  );
}
