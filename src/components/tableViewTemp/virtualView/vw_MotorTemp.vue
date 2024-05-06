<template>
    <vxe-colgroup title="MotorTable">
        <vxe-colgroup title="防错防误１计测日時">
        <vxe-column field="MoPokayokeDate1" width="165px" title="防错防误1计测日時" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="防错防误2计测日時">
        <vxe-column field="MoPokayokeDate2"  width="165px" title="防错防误2计测日時" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="Hsg面壳Brg压入">
        <vxe-column field="MoHsgBrgDate" width="165px" title="计测日时" sortable />
        <vxe-column field="MoHsgBrgStroke" width="70px" title="拐点行程" sortable />
        <vxe-column field="MoHsgBrgLoad" width="75px" title="変曲点负重" sortable />
        <vxe-column field="MoHsgBrgFinalStroke" width="70px" title="最终行程" sortable />
        <vxe-column field="MoHsgBrgFinalLoad" width="75px" title="最終荷负重" sortable />
        <vxe-column field="MoHsgBrgStrokeSec" width="70px" title="拐点行程" sortable />
        <vxe-column field="MoHsgBrgLoadSec" width="75px" title="変曲点负重" sortable />
        <vxe-column field="MoHsgBrgFinalStrokeSec" width="70px" title="最终行程" sortable />
        <vxe-column field="MoHsgBrgFinalLoadSec" width="70px" title="最終荷负重" sortable />
        <vxe-column field="MoHsgBrgMainStroke" title="主行程" sortable />
        <vxe-column field="MoHsgBrgAbvalue" width="70px" title=A/B sortable />
      </vxe-colgroup>

      <vxe-colgroup title="Hsg面定位销压入">
        <vxe-column field="MoHsgKnockDate" width="165px" title="计测日时" sortable />
        <vxe-column field="MoHsgKnockStroke" width="70px" title="拐点行程" sortable />
        <vxe-column field="MoHsgKnockLoad" width="75px" title="変曲点负重" sortable />
        <vxe-column field="MoHsgKnockFinalStroke" width="70px" title="最终行程" sortable />
        <vxe-column field="MoHsgKnockFinalLoad" width="75px" title="最終荷负重" sortable />
        <vxe-column field="MoHsgKnockStrokeSec" width="70px" title="拐点行程" sortable />
        <vxe-column field="MoHsgKnockLoadSec" width="75px" title="変曲点负重" sortable />
        <vxe-column field="MoHsgKnockFinalStrokeSec" width="70px" title="最终行程" sortable />
        <vxe-column field="MoHsgKnockFinalLoadSec" width="75px" title="最終荷负重" sortable />
        <vxe-column field="MoHsgKnockMainStroke" title="主行程" sortable />
        <vxe-column field="MoHsgKnockAbvalue" width="70px" title=A/B sortable />
      </vxe-colgroup>

      <vxe-colgroup title="防错防误3计测日時">
        <vxe-column field="MoPokayokeDate3" width="165px" title="防错防误3计测日時" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="防错防误4计测日時">
        <vxe-column field="MoPokayokeDate4" width="165px" title="防错防误4计测日時" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="RR面壳体Brg压入">
        <vxe-column field="MoRrbrgDate" width="165px" title="计测日时" sortable />
        <vxe-column field="MoRrbrgStroke" width="70px" title="拐点行程" sortable />
        <vxe-column field="MoRrbrgLoad" width="75px" title="変曲点负重" sortable />
        <vxe-column field="MoRrbrgFinalStroke" width="70px" title="最终行程" sortable />
        <vxe-column field="MoRrbrgFinalLoad" width="75px" title="最終荷负重" sortable />
        <vxe-column field="MoRrbrgStrokeSec" width="70px" title="拐点行程" sortable />
        <vxe-column field="MoRrbrgLoadSec" width="75px" title="変曲点负重" sortable />
        <vxe-column field="MoRrbrgFinalStrokeSec" width="70px" title="最终行程" sortable />
        <vxe-column field="MoRrbrgFinalLoadSec" width="75px" title="最終荷负重" sortable />
        <vxe-column field="MoRrbrgMainStroke" title="主行程" sortable />
        <vxe-column field="MoRrbrgAbvalue" width="70px" title=A/B sortable />
      </vxe-colgroup>

      <vxe-colgroup title="RR面定位销压入">
        <vxe-column field="MoRrknockDate" width="165px" title="计测日时" sortable />
        <vxe-column field="MoRrknockStroke" width="70px" title="拐点行程" sortable />
        <vxe-column field="MoRrknockLoad" width="75px" title="変曲点负重" sortable />
        <vxe-column field="MoRrknockFinalStroke" width="70px" title="最终行程" sortable />
        <vxe-column field="MoRrknockFinalLoad" width="75px" title="最終荷负重" sortable />
        <vxe-column field="MoRrknockStrokeSec" width="70px" title="拐点行程" sortable />
        <vxe-column field="MoRrknockLoadSec" width="75px" title="変曲点负重" sortable />
        <vxe-column field="MoRrknockFinalStrokeSec" width="70px" title="最终行程" sortable />
        <vxe-column field="MoRrknockFinalLoadSec" width="75px" title="最終荷负重" sortable />
        <vxe-column field="MoRrknockMainStroke" title="主行程" sortable />
        <vxe-column field="MoRrknockAbvalue" width="70px" title=A/B sortable />
      </vxe-colgroup>

      <vxe-colgroup title="MG1组装・端子台紧固">
        <vxe-column field="MoMg1Date" width="165px" title="计测日时" sortable />
        <vxe-column field="MoMg1torqAngleAxis1" width="80px" title="紧固角度1轴" sortable />
        <vxe-column field="MoMg1codeAxis1" width="85px" title="第1轴判定代码" sortable />
        <vxe-column field="MoMg1torqAngleAxis2" width="80px" title="紧固角度2轴" sortable />
        <vxe-column field="MoMg1codeAxis2" width="85px" title="第2轴判定代码" sortable />
        <vxe-column field="MoMg1torqAngleAxis3" width="80px" title="紧固角度3轴" sortable />
        <vxe-column field="MoMg1codeAxis3" width="85px" title="第3轴判定代码" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="MG2组装・端子台紧固">
        <vxe-column field="MoMg2Date"  width="165px" title="计测日时" sortable />
        <vxe-column field="MoMg2torqAngleAxis1"  width="80px" title="紧固角度1轴" sortable />
        <vxe-column field="MoMg2codeAxis1" width="85px" title="第1轴判定代码" sortable />
        <vxe-column field="MoMg2torqAngleAxis2"  width="80px" title="紧固角度2轴" sortable />
        <vxe-column field="MoMg2codeAxis2" width="85px" title="第2轴判定代码" sortable />
        <vxe-column field="MoMg2torqAngleAxis3" width="80px" title="紧固角度3轴" sortable />
        <vxe-column field="MoMg2codeAxis3" width="85px" title="第3轴判定代码" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="防错防误5计测日時">
        <vxe-column field="MoPokayokeDate5" width="165px" title="防错防误5计测日時" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="定子本体紧固">
        <vxe-column field="MoStatorDate" width="165px" title="计测日时" sortable />
        <vxe-column field="MoTorqAngleAxis1" width="80px" title="紧固角度1軸" sortable />
        <vxe-column field="MoCodeAxis1" width="85px" title="第1轴判定代码" sortable />
        <vxe-column field="MoTorqAngleAxis2" width="80px" title="紧固角度2軸" sortable />
        <vxe-column field="MoCodeAxis2" width="85px" title="第2轴判定代码" sortable />
        <vxe-column field="MoTorqAngleAxis3" width="80px" title="紧固角度3軸1" sortable />
        <vxe-column field="MoCodeAxis3" width="85px" title="第3轴1判定代码" sortable />
        <vxe-column field="MoAngleAxis1Sec" width="80px" title="紧固角度1軸" sortable />
        <vxe-column field="MoAxisCode1Sec" width="85px" title="第一轴判定代码" sortable />
        <vxe-column field="MoAngleAxis2Sec" width="80px" title="紧固角度2軸" sortable />
        <vxe-column field="MoAxisCode2Sec" width="85px" title="第2轴判定代码" sortable />
        <vxe-column field="MoAngleAxis3Sec" width="80px" title="紧固角度3軸" sortable />
        <vxe-column field="MoAxisCode3Sec" width="85px" title="第3轴判定代码" sortable />
        <vxe-column field="MoMg1stator1" width="140px" title="MG1定子1軸塑性区紧固扭矩" sortable />
        <vxe-column field="MoMg1stator2" width="140px" title="MG1定子2軸塑性区紧固扭矩" sortable />
        <vxe-column field="MoMg1stator3" width="140px" title="MG1定子3軸塑性区紧固扭矩" sortable />
        <vxe-column field="MoMg2stator1" width="140px" title="MG2定子1軸塑性区紧固扭矩" sortable />
        <vxe-column field="MoMg2stator2" width="140px" title="MG2定子2軸塑性区紧固扭矩" sortable />
        <vxe-column field="MoMg2stator3" width="140px" title="MG2定子3軸塑性区紧固扭矩" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="防错防误6计测日時">
        <vxe-column field="MoPokayokeDate6" width="165px" title="防错防误6计测日時" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="防错防误7计测日時">
        <vxe-column field="MoPokayokeDate7" width="165px" title="防错防误7计测日時" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="转子磁化移载">
        <vxe-column field="MoMeasDate" width="165px" title="计测日时" sortable />
        <vxe-column field="MoMg1workTemp" width="85px" title="MG1工件温度" sortable />
        <vxe-column field="MoMg1fluxValue" width="85px" title="MG1通量值" sortable />
        <vxe-column field="MoMg1dec" width="80px" title="MG1判定" sortable />
        <vxe-column field="MoMg2workTemp" width="85px" title="MG2工件温度" sortable />
        <vxe-column field="MoMg2fluxValue" width="85px" title="MG2通量值" sortable />
        <vxe-column field="MoMg2dec" width="80px" title="MG2判定" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="RrFIGP">
        <vxe-column field="MoRrFigpdate"  width="165px" title="计测日时" sortable />
        <vxe-column field="MoImgResult"  width="80px" title="画像判定結果" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="Rr罩子组装">
        <vxe-column field="MoRrcoverDate"  width="165px" title="计测日時" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="合体①">
        <vxe-column field="MoTotalDate1"  width="165px" title="计测日时合体" sortable />
        <vxe-column field="MoTotal1AngleAxis1"  width="80px" title="紧固角度1軸" sortable />
        <vxe-column field="MoTotal1Axis1Code"  width="85px" title="第1轴判定代码" sortable />
        <vxe-column field="MoTotal1AngleAxis2" width="80px" title="紧固角度2軸" sortable />
        <vxe-column field="MoTotal1Axis2Code" width="85px" title="第2轴判定代码" sortable />
        <vxe-column field="MoTotal1AngleAxis3" width="80px" title="紧固角度3軸" sortable />
        <vxe-column field="MoTotal1Axis3Code" width="85px" title="第3轴判定代码" sortable />
        <vxe-column field="MoTotal1AngleAxis4" width="80px" title="紧固角度4軸" sortable />
        <vxe-column field="MoTotal1Axis4Code" width="85px" title="第4轴判定代码" sortable />
        <vxe-column field="MoTotal1AngleAxis5" width="80px" title="紧固角度5軸" sortable />
        <vxe-column field="MoTotal1Axis5Code" width="85px" title="5軸目判定代码" sortable />
        <vxe-column field="MoTotal1AngleAxis6" width="80px" title="紧固角度6軸" sortable />
        <vxe-column field="MoTotal1Axis6Code" width="85px" title="6軸目判定代码" sortable />
        <vxe-column field="MoTotal1AngleAxis7" width="80px" title="紧固角度7軸" sortable />
        <vxe-column field="MoTotal1Axis7Code" width="85px" title="7軸目判定代码" sortable />
        <vxe-column field="MoTotal1AngleAxis8" width="80px" title="紧固角度8軸" sortable />
        <vxe-column field="MoTotal1Axis8Code" width="85" title="8軸目判定代码" sortable />
        <vxe-column field="MoTotal1AngleAxis9" width="80px" title="紧固角度9軸" sortable />
        <vxe-column field="MoTotal1Axis9Code" width="85px" title="9軸目判定代码" sortable />
        <vxe-column field="MoTotal1AngleAxis10"  width="80px" title="紧固角度10軸" sortable />
        <vxe-column field="MoTotal1Axis10Code" width="85px" title="10軸目判定代码" sortable />
        <vxe-column field="MoTotal1AngleAxis11" width="80px" title="紧固角度11軸" sortable />
        <vxe-column field="MoTotal1Axis11Code" width="85px" title="第1轴判定代码" sortable />
        <vxe-column field="MoTotal1Abvalue" title=A/B sortable />
      </vxe-colgroup>

      <vxe-colgroup title="合体②">
        <vxe-column field="MoTotal2Date" width="165" title="计测日时" sortable />
        <vxe-column field="MoAngle1Axis" width="80px" title="紧固角度1軸" sortable />
        <vxe-column field="MoAxis1Code" width="85px" title="第1轴判定代码" sortable />
        <vxe-column field="MoAngle2Axis" width="80px" title="紧固角度2軸" sortable />
        <vxe-column field="MoAxis2Code" width="85px" title="第2轴判定代码" sortable />
        <vxe-column field="MoAngle3Axis" width="80px" title="紧固角度3軸" sortable />
        <vxe-column field="MoAxis3Code" width="85px" title="第3轴判定代码" sortable />
        <vxe-column field="MoAngle4Axis" width="80px" title="紧固角度4軸" sortable />
        <vxe-column field="MoAxis4Code" width="85px" title="第4轴判定代码" sortable />
        <vxe-column field="MoAngle5Axis" width="80px" title="紧固角度5軸" sortable />
        <vxe-column field="MoAxis5Code" width="85px" title="5軸目判定代码" sortable />
        <vxe-column field="MoAngle6Axis" width="80px" title="紧固角度6軸" sortable />
        <vxe-column field="MoAxis6Code" width="85px" title="6軸目判定代码" sortable />
        <vxe-column field="MoAngle7Axis" width="80px" title="紧固角度7軸" sortable />
        <vxe-column field="MoAxis7Code" width="85px" title="第7轴判定代码" sortable />
        <vxe-column field="MoAngle8Axis" width="80px" title="紧固角度8軸" sortable />
        <vxe-column field="MoAxis8Code" width="85px" title="第8轴判定代码" sortable />
        <vxe-column field="MoAngle9Axis" width="80px" title="紧固角度9軸" sortable />
        <vxe-column field="MoAxis9Code" width="85px" title="第9轴判定代码" sortable />
        <vxe-column field="MoAngle10Axis" width="80px" title="紧固角度10軸" sortable />
        <vxe-column field="MoAxis10Code" width="85px" title="第10轴判定代码" sortable />
        <vxe-column field="MoAb" title=A/B sortable />
      </vxe-colgroup>

      <vxe-colgroup title="箱体反转">
        <vxe-column field="MoReDate" width="165px" title="计测日時" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="防错防误预备计测日時">
        <vxe-column field="MoPokayokeDateBas" width="175px" title="防错防误预备计测日時" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="防错防误计测日時">
        <vxe-column field="MoPokayokeDate8" width="165px" title="防错防误8计测日時" sortable />
        <vxe-column field="MoPokayokeDate9" width="165px" title="防错防误9计测日時" sortable />
        <vxe-column field="MoPokayokeDate10" width="175px" title="防错防误10计测日時" sortable />
        <vxe-column field="MoPokayokeDate11" width="175px" title="防错防误11计测日時" sortable />
        <vxe-column field="MoPokayokeDate12" width="175px" title="防错防误12计测日時" sortable />
        <vxe-column field="MoPokayokeDate13" width="175px" title="防错防误13计测日時" sortable />
        <vxe-column field="MoPokayokeDate14"  width="175px" title="防错防误14计测日時" sortable />
      </vxe-colgroup>
    </vxe-colgroup>

</template>
<!-- <script setup>
// import PokayokeDate from '@/components/tableViewTemp/PokayokeDate'

</script> -->