---
id: 5900f54a1000cf542c51005c
title: '問題 477: 数列ゲーム'
challengeType: 5
forumTopicId: 302154
dashedName: problem-477-number-sequence-game
---

# --description--

数列ゲームは、一列に書かれた $N$ 個の数からなる数列 $S$ で始まります。

2 人のプレイヤーが交互にプレイします。 プレイヤーは自分のターンで、数列に残っている最初の数または最後の数を選択し、取り除きます。

取った数の和がそのプレイヤーのスコアになります。 各プレイヤーは自分の数の和を最大にしようとします。

$N = 4$ かつ $S = \\{1, 2, 10, 3\\}$ の場合、各プレイヤーは次のようにスコアを最大化します。

- プレイヤー 1: 最初の数 (1) を取り除く
- プレイヤー 2: 残りの数列から最後の数 (3) を取り除く
- プレイヤー 1: 残りの数列から最後の数 (10) を取り除く
- プレイヤー 2: 残りの数 (2) を取り除く

プレイヤー 1 のスコアは $1 + 10 = 11$ です。

次のように定義される数列 $S = \\{s_1, s_2, \ldots, s_N\\}$ の最適な戦略に両プレイヤーが従った場合の、プレイヤー 1 のスコアを $F(N)$ とします。

- $s_1 = 0$
- $s_{i + 1} = ({s_i}^2 + 45)$ mod $1\\,000\\,000\\,007$

数列は $S = \\{0, 45, 2\\,070, 4\\,284\\,945, 753\\,524\\,550, 478\\,844, 894\\,218\\,625, \ldots\\}$ で始まります。

$F(2) = 45$, $F= 4\\,284\\,990$, $F(100) = 26\\,365\\,463\\,243$, $F(104) = 2\\,495\\,838\\,522\\,951$ が与えられます。

$F({10}^8)$ を求めなさい。

# --hints--

`numberSequenceGame()` は `25044905874565164` を返す必要があります。

```js
assert.strictEqual(numberSequenceGame(), 25044905874565164);
```

# --seed--

## --seed-contents--

```js
function numberSequenceGame() {

  return true;
}

numberSequenceGame();
```

# --solutions--

```js
// solution required
```
