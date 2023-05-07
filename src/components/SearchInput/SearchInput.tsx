import {ChangeEvent, useState} from 'react';

import {SearchIcon} from '@assets';
import {Button, Input} from '@mantine/core';
import {useMediaQuery} from '@mantine/hooks';
import {responsiveWidth} from '@utils';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const SearchInput: React.FC<Props> = ({value, onChange}) => {
  const [search, setSearch] = useState<string>(value);
  const isMobile = useMediaQuery('(max-width: 758px)');

  return (
    <Input
      data-elem="search-input"
      icon={<SearchIcon />}
      radius={8}
      size={isMobile ? 'sm' : 'lg'}
      value={search}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
      placeholder="Введите название вакансии"
      rightSectionWidth={108}
      w={responsiveWidth(773)}
      sx={{
        [`@media (max-width: 758px)`]: {
          width: '100%',
        },
      }}
      iconWidth={36}
      rightSection={
        <Button
          data-elem="search-button"
          variant="filled"
          bg="blue.4"
          style={{fontWeight: 500, fontSize: 14}}
          radius={8}
          size={isMobile ? 'xs' : 'md'}
          compact
          w={83}
          onClick={() => onChange(search)}>
          Поиск
        </Button>
      }
    />
  );
};

export default SearchInput;
