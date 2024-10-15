export function validateSizeFile(files: File[]): boolean {
    const maxSize = 5 * 1024 * 1024;
    return files.every((file) => file.size < maxSize);
}
