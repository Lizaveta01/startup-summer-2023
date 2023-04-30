import {SearchIcon} from '@assets';
import {Button, Input} from '@mantine/core';

const SearchInput = () => {
  return (
    <Input
      icon={<SearchIcon />}
      radius={8}
      size="lg"
      placeholder="Введите название вакансии"
      rightSectionWidth={108}
      iconWidth={36}
      rightSection={
        <Button
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
