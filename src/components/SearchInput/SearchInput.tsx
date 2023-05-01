import {useState} from 'react';

import {SearchIcon} from '@assets';
import {Button, Input} from '@mantine/core';

type Props = {
  handleSearch: (value: string) => void;
};

const SearchInput: React.FC<Props> = ({handleSearch}) => {
  const [value, setValue] = useState('');

  return (
    <Input
      icon={<SearchIcon />}
      radius={8}
      size="lg"
      value={value}
      onChange={() => setValue}
      placeholder="Введите название вакансии"
      rightSectionWidth={108}
      iconWidth={36}
      rightSection={
        <Button
          onClick={() => handleSearch(value)}
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
