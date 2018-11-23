# blackjack

```
- 初期カードは52枚。引く際にカードの重複は無いようにする
- プレイヤーとディーラーの2人対戦。プレイヤーは実行者、ディーラーは自動的に実行
- 実行開始時、プレイヤーとディーラーはそれぞれ、カードを2枚引く。引いたカードは画面に表示する。ただし、ディーラーの2枚目のカードは分からないようにする
- その後、先にプレイヤーがカードを引く。プレイヤーが21を超えていたらバースト、その時点でゲーム終了
- プレイヤーは、カードを引くたびに、次のカードを引くか選択できる
- プレイヤーが引き終えたら、その後ディーラーは、自分の手札が17以上になるまで引き続ける
- プレイヤーとディーラーが引き終えたら勝負。より21に近い方の勝ち
- JとQとKは10として扱う
- ダブルダウンなし、スプリットなし、サレンダーなし、その他特殊そうなルールなし
```

## Build Setup

``` bash
# install dependencies
yarn init
yarn add --dev vue-cli
yarn vue init webpack-simple .
yarn

# use sass
npm install sass-loader node-sass --save-dev

# serve with hot reload at localhost:8080
yarn dev

# build for production with minification
npm run build

```
