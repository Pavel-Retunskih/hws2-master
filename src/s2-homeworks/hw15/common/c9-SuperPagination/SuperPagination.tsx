import React, { ChangeEvent } from "react";
import SuperSelect from "../../../hw07/common/c5-SuperSelect/SuperSelect";
import { Pagination } from "@mui/material";
import s from "./SuperPagination.module.css";
import { log } from "console";

export type SuperPaginationPropsType = {
  id?: string;
  page: number;
  itemsCountForPage: number;
  totalCount: number;
  onChange: (page: number, count: number) => void;
};

const SuperPagination: React.FC<SuperPaginationPropsType> = ({
  page,
  itemsCountForPage,
  totalCount,
  onChange,
  id = "hw15",
}) => {
  const lastPage = totalCount; // пишет студент // вычислить количество страниц

  const onChangeCallback = (event: ChangeEvent<any>, page: number) => {
    onChange(page, itemsCountForPage);
  };

  const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(page, +event.currentTarget.value);
  };

  return (
    <div className={s.pagination}>
      <Pagination
        id={id + "-pagination"}
        sx={
          {
            // стили для Pagination // пишет студент
          }
        }
        page={page}
        count={lastPage}
        onChange={(_, page) => onChangeCallback(_, page)}
        hideNextButton
        hidePrevButton
      />

      <span className={s.text1}>показать</span>

      <SuperSelect
        id={id + "-pagination-select"}
        value={itemsCountForPage}
        options={[
          { id: 4, value: 4 },
          { id: 7, value: 7 },
          { id: 10, value: 10 },
        ]}
        onChange={(e) => onChangeSelect(e)}
      />

      <span className={s.text2}>строк в таблице</span>
    </div>
  );
};

export default SuperPagination;
