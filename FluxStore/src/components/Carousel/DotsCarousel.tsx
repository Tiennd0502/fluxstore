import {memo} from 'react';
import {SharedValue, withTiming} from 'react-native-reanimated';

// Components
import {Flex} from '@/components';
import Dot from './Dot';

interface DotsCarouselProps {
  color?: string;
  length: number;
  currentIndex: SharedValue<number>;
  onDotPress?: (index: number) => void;
}

const DotsCarousel = ({
  length,
  currentIndex,
  color,
  onDotPress = i => {
    currentIndex.value = withTiming(i);
  },
}: DotsCarouselProps) => {
  return (
    <Flex direction="row" justify="center" align="center" gap={8}>
      {Array.from({length}).map((_, i) => (
        <Dot key={i} index={i} color={color} currentIndex={currentIndex} onPress={onDotPress} />
      ))}
    </Flex>
  );
};

export default memo(DotsCarousel);
