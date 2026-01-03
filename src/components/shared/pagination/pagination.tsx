'use client';

import * as S from './style';

import { Flex } from 'amaterasu-freyja-ui-design-system';

type PaginationProps = {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }: PaginationProps) => {
    return <Flex alignItems='center'>
        { currentPage > 1 && <S.PaginationItem onClick={() => onPageChange(currentPage - 2)}>{ currentPage - 1 }</S.PaginationItem> }
        { currentPage > 0 && <S.PaginationItem onClick={() => onPageChange(currentPage - 1)}>{ currentPage }</S.PaginationItem> }
        <S.PaginationItem active>{ currentPage + 1 }</S.PaginationItem>
        { (currentPage + 1) * itemsPerPage < totalItems && <S.PaginationItem onClick={() => onPageChange(currentPage + 1)}>{ currentPage + 2 }</S.PaginationItem> }
        { (currentPage + 2) * itemsPerPage < totalItems && <S.PaginationItem onClick={() => onPageChange(currentPage + 2)}>{ currentPage + 3 }</S.PaginationItem> }
    </Flex>
}