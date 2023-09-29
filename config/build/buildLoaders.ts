import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const styleLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            // будем обрабатывать название классов только для файлов с
            // раcширением module. Для остальных будем оставлять как назвали в scss
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            // что бы не тянуть в продакшен длинные назавания классов для стилей
            // мы будем отслеживать mode и при деве выводить длинный понятный класс
            // а при проде его сжать до 8 символов
            localIdentName: options.isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };

  // babel теперь не нужен
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const fileLoader = {
    test: /\.(png|jpe?g|webp|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  return [typescriptLoader, styleLoader, svgLoader, fileLoader];
}
