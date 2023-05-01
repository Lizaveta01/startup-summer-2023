import {ChangeEvent} from 'react';

import {SearchIcon} from '@assets';
import {Button, Input} from '@mantine/core';

type Props = {
  value: string;
  onChange: (value: string) => void;
  handleSearch: () => void;
};

const SearchInput: React.FC<Props> = ({value, onChange, handleSearch}) => {
  return (
    <Input
      icon={<SearchIcon />}
      radius={8}
      size="lg"
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      placeholder="Введите название вакансии"
      rightSectionWidth={108}
      iconWidth={36}
      rightSection={
        <Button
          onClick={handleSearch}
          variant="filled"
          bg="blue.4"
          style={{fontWeight: 500, fontSize: 14}}
          radius={8}
          size="md"
          compact
          w={83}>
          Поиск
        </Button>
      }
    />
  );
};

export default SearchInput;
