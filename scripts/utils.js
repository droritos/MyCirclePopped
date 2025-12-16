
export function getRandomVector2(roomWidth, roomHeight, objectSize) {
    const maxX = roomWidth - objectSize;
    const maxY = roomHeight - objectSize;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    return { x: randomX, y: randomY };
}
