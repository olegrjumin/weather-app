import { cn } from "../lib/utils";
import { uvIndexToDescription } from "./description-helpers";

const uvLevelToColor = (uvIndex: number) => {
  if (uvIndex < 3) {
    return "bg-green-500 text-green-50";
  } else if (uvIndex < 6) {
    return "bg-yellow-500 text-yellow-50";
  } else if (uvIndex < 8) {
    return "bg-orange-500 text-orange-50";
  } else if (uvIndex < 11) {
    return "bg-red-500 text-red-50";
  } else {
    return "bg-purple-500 text-purple-50";
  }
};

export const UvLevelBadge = ({ uvIndex }: { uvIndex: number }) => {
  const label = uvIndexToDescription(uvIndex);
  return (
    <span
      className={cn(
        "text-xs font-medium me-2 px-2.5 py-0.5 rounded",
        uvLevelToColor(uvIndex)
      )}
    >
      {label}
    </span>
  );
};
