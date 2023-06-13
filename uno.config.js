import { defineConfig } from 'unocss';
import { presetUno, presetAttributify } from 'unocss';
export default defineConfig({
  presets: [presetUno(), presetAttributify()],
  rules: [
    // custom-margin
    [/^ml-(\d+)$/, ([, d]) => ({ 'margin-left': `${d}px` })],
    [/^mr-(\d+)$/, ([, d]) => ({ 'margin-right': `${d}px` })],
    [/^mt-(\d+)$/, ([, d]) => ({ 'margin-top': `${d}px` })],
    [/^mb-(\d+)$/, ([, d]) => ({ 'margin-bottom': `${d}px` })],
    [/^m-(\d+)$/, match => ({ margin: `${match[1]}px` })],
    // custom-padding
    [/^pb-(\d+)$/, ([, d]) => ({ 'padding-bottom': `${d}px` })],
    [/^pt-(\d+)$/, ([, d]) => ({ 'padding-top': `${d}px` })],
    [/^pl-(\d+)$/, ([, d]) => ({ 'padding-left': `${d}px` })],
    [/^pr-(\d+)$/, ([, d]) => ({ 'padding-right': `${d}px` })],
    [/^p-(\d+)$/, match => ({ padding: `${match[1]}px` })],
  ],
  shortcuts: {
    'init-btn': 'border-none cursor-pointer outline-none',
    'space-between': 'flex flex-row justify-between items-center',
    'flex-start': 'flex flex-row justify-start items-center',
  },
});
