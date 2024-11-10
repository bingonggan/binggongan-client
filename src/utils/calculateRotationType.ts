import type { Model } from "../stateTypes";

export default function calculateRotationType(
  rotationType: number,
): Model["rotation"] {
  const rotation = Math.PI / 2;
  switch (rotationType) {
    case 0:
      return [0, 0, 0];
    case 1:
      return [0, 0, rotation];
    case 2:
      return [rotation, 0, -rotation];
    case 3:
      return [0, rotation, 0];
    case 4:
      return [0, rotation, rotation];
    case 5:
      return [rotation, 0, 0];
  }
}
