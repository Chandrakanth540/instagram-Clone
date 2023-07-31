import { View, Text } from 'react-native';
import ForYouSuggest from './foryousuggest';
const SectionBroker = ({ swift, useSwift }) => {
  // useSwift(route);

  if (swift == 'foryou') {
    return <ForYouSuggest />;
  } else if (swift == 'mutual') {
    return (
      <View>
        <Text style={{ color: 'white' }}>king in the north mutual</Text>
      </View>
    );
  } else if ((swift = 'following')) {
    return <ForYouSuggest />;
  }
};
export default SectionBroker;
