export function estimateDelta(zoom) {
    return 0.02 * Math.pow(2, 15 - zoom);
}

export function latLngToWorldPixel(
    lat,
    lng,
    zoom
) {
    const scale =
        256 * Math.pow(2, zoom);

    const sinLat =
        Math.sin(
            (lat * Math.PI) / 180
        );

    const x =
        (0.5 + lng / 360) *
        scale;

    const y =
        (0.5 -
            Math.log(
                (1 + sinLat) /
                (1 - sinLat)
            ) /
            (4 * Math.PI)) *
        scale;

    return {
        x,
        y,
    };
}