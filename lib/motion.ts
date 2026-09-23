/** Motion values measured from the reference homepage's public implementation. */
export const referenceMotion = {
  brandFirstThreshold: 0.14,
  brandThresholdStep: 0.07,
  brandSteps: 4,
  brandDurationMs: 450,
  brandTravelPx: 14,
  countDurationMs: 1200,
  countVisibility: 0.2,
  carouselDurationMs: 600,
  carouselIntervalMs: 3000,
} as const;

/** Progress covers the time a stage travels through the viewport, in either direction. */
export function getBrandStepCount(
  top: number,
  height: number,
  viewportHeight: number,
) {
  if (viewportHeight <= 0 || height < 0) return referenceMotion.brandSteps;
  const progress = (viewportHeight - top) / (viewportHeight + height);
  let visible = 0;
  for (let index = 0; index < referenceMotion.brandSteps; index++) {
    if (
      progress >=
      referenceMotion.brandFirstThreshold +
        referenceMotion.brandThresholdStep * index
    )
      visible++;
  }
  return visible;
}

export function countAtProgress(value: number, progress: number) {
  const clamped = Math.min(1, Math.max(0, progress));
  return value * (1 - Math.pow(1 - clamped, 3));
}
