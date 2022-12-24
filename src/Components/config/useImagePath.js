// import { useState, useEffect } from 'react';

export function useImagePath(path) {
//   const [isOnline, setIsOnline] = useState(null);
    const baseImgUrl = `https://image.tmdb.org/t/p/w500`;
    return `${baseImgUrl}${path}`
}