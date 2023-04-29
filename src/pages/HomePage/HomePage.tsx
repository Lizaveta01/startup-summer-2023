import {Filters, VacancyItem} from '@components';
import {Flex} from '@mantine/core';
import {responsiveWidth} from '@utils';

const HEADER_HEIGHT = 84;
const DESIGN_EXAMPLE_WINDOW_HEIGHT = 900;

const HomePage = () => {
  return (
    <Flex
      justify="center"
      align="flex-start"
      gap={responsiveWidth(28)}
      pt={40}
      bg="gray.1"
      h={`${100 - (HEADER_HEIGHT / DESIGN_EXAMPLE_WINDOW_HEIGHT) * 100}vh`}>
      <Flex>
        <Filters />
      </Flex>
      <Flex direction="column" gap={16}>
        <VacancyItem />
        <VacancyItem />
        <VacancyItem />
      </Flex>
    </Flex>
  );
};

export default HomePage;
