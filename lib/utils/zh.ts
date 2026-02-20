import * as OpenCC from 'opencc-js';

const converter = OpenCC.Converter({ from: 'tw', to: 'cn' });

export function toSimplified(input: string): string {
    if (!input) return input;
    return converter(input);
}
