export function getFirstAndLastLetter(fullName: string): string {
    if (fullName) {
        const words = fullName.split(' ');
        if (words.length === 1) {
            const firstLetter = words[0].charAt(0).toUpperCase();
            return firstLetter + firstLetter;
        } else {
            const firstLetter = words[0].charAt(0).toUpperCase();
            const lastLetter = words[words.length - 1].charAt(0).toUpperCase();
            return firstLetter + lastLetter;
        }
    } else {
        return '';
    }
}