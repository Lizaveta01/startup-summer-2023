import {VacancyItem} from '@components';
import {Flex} from '@mantine/core';

const HEADER_HEIGHT = 84;
const DESIGN_EXAMPLE_WINDOW_HEIGHT = 900;

const HomePage = () => {
  return (
    <Flex
      justify="center"
      align="center"
      bg="gray.1"
      h={`${100 - (HEADER_HEIGHT / DESIGN_EXAMPLE_WINDOW_HEIGHT) * 100}vh`}>
      <Flex></Flex>
      <Flex>
        <VacancyItem />
      </Flex>
    </Flex>
  );
};

export default HomePage;
