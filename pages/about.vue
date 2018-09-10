<template>
  <div class="about">
    <BaseHeading1 text="About."/>
    <div class="text">
      本作の主人公は普遍的な愛についての課題を抱え、そしてそれは最後まで上手くいくことがありません。世の中において、何かを頑張ったから何かが報われる、というのは幻想に過ぎず、どうにもならないことは確実に存在しています。私たちはその理不尽や矛盾から生まれる嫉妬や憎悪、悲哀、そういった誰しもがうちに秘める感情を、否定することなくそのまま受け入れたいと考えました。
      <br><br>
      また、芸術やスポーツという舞台の上では、磨き上げられた技術や表現こそが最重要視されるべきだと感じています。本作は Wheelchair Dance というダンスの1ジャンルに焦点をあて、その面白さ、深さを改めて構築するべく制作をいたしました。障害の有無といった前提からくる評価ではなく、Wheelchair Dance そのものの表現としての素晴らしさが直感的に伝われば幸いです。
      <br><br>
      個人のもつ秘められたインナーな感情が、単純で直接的な“カッコ良い”、“凄い”といったオープンで拡がりをもつ感情を作り出すこと。これこそが僕たちの目指す世界です。その世界のなかで人々が繋がり合うことで、新しいコンテンツや持続可能な文化を生みだすことが出来れば嬉しく思います。
      <br><br>
      最後に、参加してくれたアーティストやクリエイター達に最大の感謝と尊敬を。
    </div>
  </div>
</template>

<script>
import BaseHeading1 from '~/components/BaseHeading1.vue'

export default {
  components: {
    BaseHeading1
  }
}
</script>

<style lang='scss' scoped>
.about {
  padding: 60px 20px;
  width: 100%;
  color: #555;
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
