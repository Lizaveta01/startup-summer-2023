import {Button, Flex, Image, Text} from '@mantine/core';
import {responsiveWidth} from '@utils';

import img from '../../assets/images/404.png';

const NotFoundComponent = () => {
  return (
    <Flex align={'center'} direction={'column'} gap={responsiveWidth(32)} w={responsiveWidth(327)}>
      <Image maw={240} mx="auto" src={img} alt="not foud" />
      <Text sx={{fontSize: 24, fontWeight: 600}}>Упс, здесь еще ничего нет!</Text>
      <Button
        href="/bookmarks"
        component="a"
        bg="blue.0"
        c="blue.5"
        radius="md"
        sx={{
          color: 'blue.4',
          padding: `${responsiveWidth(10)} ${responsiveWidth(24)}`,
          fontSize: 14,
          fontFamily: 'Open Sans',
        }}
        size="s">
        Поиск Вакансий
      </Button>
    </Flex>
  );
};

export default NotFoundComponent;
