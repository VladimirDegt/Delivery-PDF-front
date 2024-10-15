export function validateExtensionFile(files: File[], extension: string): boolean {
    if (files.length === 0) {
        return false;
    }
    return files.every((file) => file.name.toLowerCase().endsWith(extension));
}
