<template>
  <div class="about">
    <h1>About.</h1>
    <div class="text">
      7月24日にハウスコムの創業20周年を祝う感謝祭がパシフィコ横浜で行われました。昨年の11月には渋谷のセルリアンタワーで普段お世話になっている家主様や関連企業様に感謝を伝えるイベントを開かせていただきましたが、今回は会社から従業員とそのご家族に20年分の感謝を伝えたいと思い、その日は全国のハウスコム店舗をお休みにして、従業員・ご家族約2000人に横浜にお集まりいただきました。
      <br><br>
      もう何ヶ月も前から本社のスタッフを中心に様々なアイディアを持ち寄っては「どういったイベントにしようか?」と相談し、私自身もイベントの前日まで「どうやったら感謝の気持ちを率直に伝えられるだろうか?」と考えておりましたので、当日の従業員やそのご家族の楽しんでいるを顔を見て、本当に嬉しく思いました。
    </div>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style lang='scss' scoped>
.about {
  padding: 60px 20px;
  width: 100%;
  height: 100%;
  color: #333;
  h1 {
    font-family: 'Shadows Into Light', cursive;
    width: 100%;
    font-size: 50px;
    font-weight: bold;
    line-height: 1;
    text-align: center;
  }
  .text {
    margin-top: 50px;
    font-size: 12px;
    font-weight: normal;
    line-height: 2;
  }
}
</style>
