import { execFileSync } from 'node:child_process';

export function toSimplified(input: string): string {
    if (!input) {
        return input;
    }

    try {
        // Use system opencc: Traditional -> Simplified
        const output = execFileSync(
            'opencc',
            ['-c', 't2s'],
            {
                input,
                encoding: 'utf-8',
                maxBuffer: 10 * 1024 * 1024,
            }
        );

        return output;
    } catch (err) {
        // Fail safe: return original content
        return input;
    }
}
