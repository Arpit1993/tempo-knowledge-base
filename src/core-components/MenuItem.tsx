import { hasChildren } from "../utils";
import { MultiLevel } from "./MultiLevel";
import { SingleLevel } from "./SingleLevel";

export const MenuItem = ({
  item,
  setSelectedItem,
  selectedItem,
  selectedParent,
}: {
  item: any;
  setSelectedItem: (argument: string) => void;
  selectedItem: string;
  selectedParent: string;
}) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return (
    <Component
      item={item}
      setSelectedItem={setSelectedItem}
      selectedItem={selectedItem}
      selectedParent={selectedParent}
    />
  );
};
