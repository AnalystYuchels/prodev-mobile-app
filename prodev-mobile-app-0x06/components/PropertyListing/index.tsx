import { View } from "react-native";
import PropertyListingCard from "../common/PropertyListingCard";

// ✅ Props type is uniquely named
type PropertyListingProps = {
  listings: any[];
};

const PropertyListingComponent = ({ listings }: PropertyListingProps) => {
  return (
    <View style={{ flex: 1, rowGap: 10 }}>
      {listings?.map((listing, key) => (
        <PropertyListingCard key={key} listing={listing} />
      ))}
    </View>
  );
};

// ✅ Export under the usual name (no clash with props type)
export default PropertyListingComponent;
