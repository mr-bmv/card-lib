import { Configuration } from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

// главный конфиг webpack
export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { mode, paths, isDev } = options;
  return {
    mode,

    // откуда собираем проект
    // автоматически присвоится название main
    // path - библиотека для сборки путей
    // __dirname - захват текущей директории
    entry: paths.entry,
    // куда собираем проект
    output: {
      // имя файла
      filename: '[name].js',
      // имя папки
      path: paths.build,
      // очистка старых сборок проекта
      clean: true,
      // что бы работать с динамическими путями типа /cart:123
      publicPath: '/',
    },

    plugins: buildPlugins(options),

    // правила для обработки файлов, которыми не занимается js
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    // настраиваем сервер разработки. для продакшена он не нужен
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
