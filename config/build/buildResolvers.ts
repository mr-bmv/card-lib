import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
  return {
    // указываем расширения, которые не будут указываться при импорте
    // import component from '.component'
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    // настройка для абсолютных путей
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: { '@': options.paths.src },
  };
}
