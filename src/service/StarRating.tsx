
export const getStarRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    let missingStars = 5 - fullStars;
    return "★".repeat(fullStars) + "☆".repeat(missingStars);
}