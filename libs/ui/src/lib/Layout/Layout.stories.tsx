import { bearCss } from '@bearon/utils';
import SimpleGrid from './SimpleGrid';
import Box from './Box';
import RowComponent from './Row';
import ColumnComponent from './Column';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof SimpleGrid> = {
  title: 'Foundation/Layout',
  component: SimpleGrid,
  tags: ['autodocs'],
};
export default meta;

const boxClass = bearCss`
  padding: 1rem;
  height: 200px;
  background-color: grey;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

export const SimpleGridExample = {
  render: () => {
    return (
      <SimpleGrid
        spacing="1rem"
        justifyContent="center"
        alignItems="center"
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
      >
        <Box className={boxClass}>1</Box>
        <Box className={boxClass}>2</Box>
        <Box className={boxClass}>3</Box>
        <Box className={boxClass}>4</Box>
        <Box className={boxClass}>5</Box>
        <Box className={boxClass}>6</Box>
        <Box className={boxClass}>7</Box>
        <Box className={boxClass}>8</Box>
        <Box className={boxClass}>9</Box>
      </SimpleGrid>
    );
  },
};

export const BoxResponsive = {
  render: () => {
    return (
      <Box
        className={boxClass}
        sx={{
          background: 'red',
        }}
        sxM={{
          background: 'blue',
        }}
        sxS={{
          background: 'grey',
        }}
      >
        try to resize the window
      </Box>
    );
  },
};

const rowClass = bearCss`
  padding: 1rem;
  height: 200px;
  background-color: grey;
  color: white;
  flex: 1 1 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;
export const Row = {
  render: () => {
    return (
      <RowComponent gap="1rem">
        <Box className={rowClass}>1</Box>
        <Box className={rowClass}>2</Box>
        <Box className={rowClass}>3</Box>
      </RowComponent>
    );
  },
};

const columnClass = bearCss`
  padding: 1rem;
  height: 200px;
  background-color: grey;
  color: white;
  flex: 1 1 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;
export const Column = {
  render: () => {
    return (
      <ColumnComponent gap="1rem">
        <Box className={columnClass}>column 1</Box>
        <Box className={columnClass}>column 2</Box>
        <Box className={columnClass}>column 3</Box>
      </ColumnComponent>
    );
  },
};
