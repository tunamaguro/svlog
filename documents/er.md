## 必要なテーブル

- バトル結果テーブル
- 使用者テーブル?

## 各テーブルに必要な要素

1. バトル結果テーブル
   - バトル結果 ID
   - 使用者 ID
   - 勝敗
   - 使用者リーダ名
   - 使用者デッキ名
   - 対戦相手リーダ名
   - 対戦相手デッキ名
   - 経過ターン数
   - フォーマット
   - ランクかフリーか
   - 作成日時

## ER

```mermaid
erDiagram

battle_results ||..|| leaders:"leadersはleaderのenum"
battle_results }o..|| formats:"formatsはformatのenum"
battle_results }o..|| battle_types:"typesはtypeのenum"

battle_results {
  UUID battle_id
  string user_id
  string result
  string user_leader
  string user_deck
  string opponent_leader
  string opponent_deck
  int end_turn
  string format
  string type
  date created_at
}

leaders{
    string leader_en
    string leader_ja
}

formats{
    string format_en
    string format_ja
}

battle_types{
    string type_en
    string type_ja
}

```
