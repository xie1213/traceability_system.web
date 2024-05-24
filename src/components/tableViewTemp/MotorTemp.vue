<template>
    <vxe-table :data="tableData" v-bind="TableConfig">
      <vxe-colgroup title="上传时间和序列号" fixed="left">
        <vxe-column field="CollectionDate" width="150px" title="上传时间" fixed="left" :formatter="formatDate" sortable />
        <vxe-column field="ShipmentSerial" width="150px" title="出荷序列" fixed="left" sortable />
      </vxe-colgroup>
      <vxe-colgroup title="基本信息">
        <vxe-column field="InterNo" width="61px" title="接口No" sortable />
        <vxe-column field="CaseDec" width="62px" title="箱体识别" sortable />
        <vxe-column field="RrCoverDec" width="63px" title="Rr盖判别" sortable />
        <vxe-column field="ParkingDec" width="62px" title="停车识别" sortable />
        <vxe-column field="GearDec" width="62px" title="齿轮识别" sortable />
        <vxe-column field="DefLingDec" width="62px" title="变形判别" sortable />
        <vxe-column field="HsgDec" width="62px" title="Hsg识别" sortable />
        <vxe-column field="Mg1statorDec" width="80px" title="MG1定子判別" sortable />
        <vxe-column field="Mg2statorDec" width="80px" title="MG2定子判別" sortable />
        <vxe-column field="Mg1rotorDec" width="80px" title="MG1转子判別" sortable />
        <vxe-column field="Mg2rotorDec" width="80px" title="MG2转子判別" sortable />
        <vxe-column field="LineDec" width="62px" title="线体判別" sortable />
        <vxe-column field="Dfcase" width="62px" title="DF箱体" sortable />
        <vxe-column field="OilPump" width="62px" title="油泵" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="序列">
        <vxe-column field="CaseSerial" width="145px" title="CASE序列" sortable />
        <vxe-column field="HsgSerial" width="145px" title="HSG序列" sortable />
        <vxe-column field="Mg1sserial" width="145px" title="MG1定子序列" sortable></vxe-column>
        <vxe-column field="Mg2sserial" width="145px" title="MG2定子序列" sortable></vxe-column>

        <vxe-column field="Mg1rserial" width="145px" title="MG1转子序列" sortable />
        <vxe-column field="Mg2rserial" width="145px" title="MG2转子序列" sortable />

        <vxe-column field="CoDriveSerial" width="155px" title="计数器驱动器序列" sortable />
        <vxe-column field="MoDriveSerial" width="145px" title="MG2修正序列" sortable />
        <vxe-column field="DrivenSerial" width="145px" title="受驱动序列" sortable />
        <vxe-column field="DorpinSerial" width="145px" title="差速器销序列" sortable />
        <vxe-column field="DfringSerial" width="145px" title="齿圈序列" sortable />
        <vxe-column field="DfcaseSerial" width="145px" title="差速器箱序列" sortable />
        <vxe-column field="RrcoverSerial" width="155px" title="Rr盖序列" sortable />
        <!-- <vxe-column field="ShipmentSerial" title="出货序列" sortable /> -->
        <vxe-column field="RropSerial" width="145px" title="Rr油泵序列" sortable />
      </vxe-colgroup>

      <BasicTemp/>
      <vxe-colgroup title="防错防误１计测日時">
        <vxe-column field="PokayokeDate1" width="165px" title="防错防误1计测日時" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="防错防误2计测日時">
        <vxe-column field="PokayokeDate2"  width="165px" title="防错防误2计测日時" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="Hsg面壳Brg压入">
        <vxe-column field="HsgBrgDate" width="165px" title="计测日时" sortable />
        <vxe-column field="HsgBrgStroke" width="70px" title="拐点行程" sortable />
        <vxe-column field="HsgBrgLoad" width="75px" title="変曲点负重" sortable />
        <vxe-column field="HsgBrgFinalStroke" width="70px" title="最终行程" sortable />
        <vxe-column field="HsgBrgFinalLoad" width="75px" title="最終荷负重" sortable />
        <vxe-column field="HsgBrgStrokeSec" width="70px" title="拐点行程" sortable />
        <vxe-column field="HsgBrgLoadSec" width="75px" title="変曲点负重" sortable />
        <vxe-column field="HsgBrgFinalStrokeSec" width="70px" title="最终行程" sortable />
        <vxe-column field="HsgBrgFinalLoadSec" width="70px" title="最終荷负重" sortable />
        <vxe-column field="HsgBrgMainStroke" title="主行程" sortable />
        <vxe-column field="HsgBrgAbvalue" width="70px" title=A/B sortable />
      </vxe-colgroup>

      <vxe-colgroup title="Hsg面定位销压入">
        <vxe-column field="HsgKnockDate" width="165px" title="计测日时" sortable />
        <vxe-column field="HsgKnockStroke" width="70px" title="拐点行程" sortable />
        <vxe-column field="HsgKnockLoad" width="75px" title="変曲点负重" sortable />
        <vxe-column field="HsgKnockFinalStroke" width="70px" title="最终行程" sortable />
        <vxe-column field="HsgKnockFinalLoad" width="75px" title="最終荷负重" sortable />
        <vxe-column field="HsgKnockStrokeSec" width="70px" title="拐点行程" sortable />
        <vxe-column field="HsgKnockLoadSec" width="75px" title="変曲点负重" sortable />
        <vxe-column field="HsgKnockFinalStrokeSec" width="70px" title="最终行程" sortable />
        <vxe-column field="HsgKnockFinalLoadSec" width="75px" title="最終荷负重" sortable />
        <vxe-column field="HsgKnockMainStroke" title="主行程" sortable />
        <vxe-column field="HsgKnockAbvalue" width="70px" title=A/B sortable />
      </vxe-colgroup>

      <vxe-colgroup title="防错防误3计测日時">
        <vxe-column field="PokayokeDate3" width="165px" title="防错防误3计测日時" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="防错防误4计测日時">
        <vxe-column field="PokayokeDate4" width="165px" title="防错防误4计测日時" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="RR面壳体Brg压入">
        <vxe-column field="RrbrgDate" width="165px" title="计测日时" sortable />
        <vxe-column field="RrbrgStroke" width="70px" title="拐点行程" sortable />
        <vxe-column field="RrbrgLoad" width="75px" title="変曲点负重" sortable />
        <vxe-column field="RrbrgFinalStroke" width="70px" title="最终行程" sortable />
        <vxe-column field="RrbrgFinalLoad" width="75px" title="最終荷负重" sortable />
        <vxe-column field="RrbrgStrokeSec" width="70px" title="拐点行程" sortable />
        <vxe-column field="RrbrgLoadSec" width="75px" title="変曲点负重" sortable />
        <vxe-column field="RrbrgFinalStrokeSec" width="70px" title="最终行程" sortable />
        <vxe-column field="RrbrgFinalLoadSec" width="75px" title="最終荷负重" sortable />
        <vxe-column field="RrbrgMainStroke" title="主行程" sortable />
        <vxe-column field="RrbrgAbvalue" width="70px" title=A/B sortable />
      </vxe-colgroup>

      <vxe-colgroup title="RR面定位销压入">
        <vxe-column field="RrknockDate" width="165px" title="计测日时" sortable />
        <vxe-column field="RrknockStroke" width="70px" title="拐点行程" sortable />
        <vxe-column field="RrknockLoad" width="75px" title="変曲点负重" sortable />
        <vxe-column field="RrknockFinalStroke" width="70px" title="最终行程" sortable />
        <vxe-column field="RrknockFinalLoad" width="75px" title="最終荷负重" sortable />
        <vxe-column field="RrknockStrokeSec" width="70px" title="拐点行程" sortable />
        <vxe-column field="RrknockLoadSec" width="75px" title="変曲点负重" sortable />
        <vxe-column field="RrknockFinalStrokeSec" width="70px" title="最终行程" sortable />
        <vxe-column field="RrknockFinalLoadSec" width="75px" title="最終荷负重" sortable />
        <vxe-column field="RrknockMainStroke" title="主行程" sortable />
        <vxe-column field="RrknockAbvalue" width="70px" title=A/B sortable />
      </vxe-colgroup>

      <vxe-colgroup title="MG1组装・端子台紧固">
        <vxe-column field="Mg1date" width="165px" title="计测日时" sortable />
        <vxe-column field="Mg1torqAngleAxis1" width="80px" title="紧固角度1轴" sortable />
        <vxe-column field="Mg1codeAxis1" width="85px" title="第1轴判定代码" sortable />
        <vxe-column field="Mg1torqAngleAxis2" width="80px" title="紧固角度2轴" sortable />
        <vxe-column field="Mg1codeAxis2" width="85px" title="第2轴判定代码" sortable />
        <vxe-column field="Mg1torqAngleAxis3" width="80px" title="紧固角度3轴" sortable />
        <vxe-column field="Mg1codeAxis3" width="85px" title="第3轴判定代码" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="MG2组装・端子台紧固">
        <vxe-column field="Mg2date"  width="165px" title="计测日时" sortable />
        <vxe-column field="Mg2torqAngleAxis1"  width="80px" title="紧固角度1轴" sortable />
        <vxe-column field="Mg2codeAxis1" width="85px" title="第1轴判定代码" sortable />
        <vxe-column field="Mg2torqAngleAxis2"  width="80px" title="紧固角度2轴" sortable />
        <vxe-column field="Mg2codeAxis2" width="85px" title="第2轴判定代码" sortable />
        <vxe-column field="Mg2torqAngleAxis3" width="80px" title="紧固角度3轴" sortable />
        <vxe-column field="Mg2codeAxis3" width="85px" title="第3轴判定代码" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="防错防误5计测日時">
        <vxe-column field="PokayokeDate5" width="165px" title="防错防误5计测日時" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="定子本体紧固">
        <vxe-column field="StatorDate" width="165px" title="计测日时" sortable />
        <vxe-column field="TorqAngleAxis1" width="80px" title="紧固角度1軸" sortable />
        <vxe-column field="CodeAxis1" width="85px" title="第1轴判定代码" sortable />
        <vxe-column field="TorqAngleAxis2" width="80px" title="紧固角度2軸" sortable />
        <vxe-column field="CodeAxis2" width="85px" title="第2轴判定代码" sortable />
        <vxe-column field="TorqAngleAxis3" width="80px" title="紧固角度3軸1" sortable />
        <vxe-column field="CodeAxis3" width="85px" title="第3轴1判定代码" sortable />
        <vxe-column field="AngleAxis1Sec" width="80px" title="紧固角度1軸" sortable />
        <vxe-column field="AxisCode1Sec" width="85px" title="第一轴判定代码" sortable />
        <vxe-column field="AngleAxis2Sec" width="80px" title="紧固角度2軸" sortable />
        <vxe-column field="AxisCode2Sec" width="85px" title="第2轴判定代码" sortable />
        <vxe-column field="AngleAxis3Sec" width="80px" title="紧固角度3軸" sortable />
        <vxe-column field="AxisCode3Sec" width="85px" title="第3轴判定代码" sortable />
        <vxe-column field="Mg1stator1" width="140px" title="MG1定子1軸塑性区紧固扭矩" sortable />
        <vxe-column field="Mg1stator2" width="140px" title="MG1定子2軸塑性区紧固扭矩" sortable />
        <vxe-column field="Mg1stator3" width="140px" title="MG1定子3軸塑性区紧固扭矩" sortable />
        <vxe-column field="Mg2stator1" width="140px" title="MG2定子1軸塑性区紧固扭矩" sortable />
        <vxe-column field="Mg2stator2" width="140px" title="MG2定子2軸塑性区紧固扭矩" sortable />
        <vxe-column field="Mg2stator3" width="140px" title="MG2定子3軸塑性区紧固扭矩" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="防错防误6计测日時">
        <vxe-column field="PokayokeDate6" width="165px" title="防错防误6计测日時" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="防错防误7计测日時">
        <vxe-column field="PokayokeDate7" width="165px" title="防错防误7计测日時" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="转子磁化移载">
        <vxe-column field="MeasDate" width="165px" title="计测日时" sortable />
        <vxe-column field="Mg1workTemp" width="85px" title="MG1工件温度" sortable />
        <vxe-column field="Mg1fluxValue" width="85px" title="MG1通量值" sortable />
        <vxe-column field="Mg1dec" width="80px" title="MG1判定" sortable />
        <vxe-column field="Mg2workTemp" width="85px" title="MG2工件温度" sortable />
        <vxe-column field="Mg2fluxValue" width="85px" title="MG2通量值" sortable />
        <vxe-column field="Mg2dec" width="80px" title="MG2判定" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="RrFIGP">
        <vxe-column field="RrFigpdate"  width="165px" title="计测日时" sortable />
        <vxe-column field="ImgResult"  width="80px" title="画像判定結果" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="Rr罩子组装">
        <vxe-column field="RrcoverDate"  width="165px" title="计测日時" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="合体①">
        <vxe-column field="TotalDate1"  width="165px" title="计测日时合体" sortable />
        <vxe-column field="Total1AngleAxis1"  width="80px" title="紧固角度1軸" sortable />
        <vxe-column field="Total1Axis1Code"  width="85px" title="第1轴判定代码" sortable />
        <vxe-column field="Total1AngleAxis2" width="80px" title="紧固角度2軸" sortable />
        <vxe-column field="Total1Axis2Code" width="85px" title="第2轴判定代码" sortable />
        <vxe-column field="Total1AngleAxis3" width="80px" title="紧固角度3軸" sortable />
        <vxe-column field="Total1Axis3Code" width="85px" title="第3轴判定代码" sortable />
        <vxe-column field="Total1AngleAxis4" width="80px" title="紧固角度4軸" sortable />
        <vxe-column field="Total1Axis4Code" width="85px" title="第4轴判定代码" sortable />
        <vxe-column field="Total1AngleAxis5" width="80px" title="紧固角度5軸" sortable />
        <vxe-column field="Total1Axis5Code" width="85px" title="5軸目判定代码" sortable />
        <vxe-column field="Total1AngleAxis6" width="80px" title="紧固角度6軸" sortable />
        <vxe-column field="Total1Axis6Code" width="85px" title="6軸目判定代码" sortable />
        <vxe-column field="Total1AngleAxis7" width="80px" title="紧固角度7軸" sortable />
        <vxe-column field="Total1Axis7Code" width="85px" title="7軸目判定代码" sortable />
        <vxe-column field="Total1AngleAxis8" width="80px" title="紧固角度8軸" sortable />
        <vxe-column field="Total1Axis8Code" width="85" title="8軸目判定代码" sortable />
        <vxe-column field="Total1AngleAxis9" width="80px" title="紧固角度9軸" sortable />
        <vxe-column field="Total1Axis9Code" width="85px" title="9軸目判定代码" sortable />
        <vxe-column field="Total1AngleAxis10"  width="80px" title="紧固角度10軸" sortable />
        <vxe-column field="Total1Axis10Code" width="85px" title="10軸目判定代码" sortable />
        <vxe-column field="Total1AngleAxis11" width="80px" title="紧固角度11軸" sortable />
        <vxe-column field="Total1Axis11Code" width="85px" title="第1轴判定代码" sortable />
        <vxe-column field="Total1Abvalue" title=A/B sortable />
      </vxe-colgroup>

      <vxe-colgroup title="合体②">
        <vxe-column field="Total2Date" width="165" title="计测日时" sortable />
        <vxe-column field="Angle1Axis" width="80px" title="紧固角度1軸" sortable />
        <vxe-column field="Axis1Code" width="85px" title="第1轴判定代码" sortable />
        <vxe-column field="Angle2Axis" width="80px" title="紧固角度2軸" sortable />
        <vxe-column field="Axis2Code" width="85px" title="第2轴判定代码" sortable />
        <vxe-column field="Angle3Axis" width="80px" title="紧固角度3軸" sortable />
        <vxe-column field="Axis3Code" width="85px" title="第3轴判定代码" sortable />
        <vxe-column field="Angle4Axis" width="80px" title="紧固角度4軸" sortable />
        <vxe-column field="Axis4Code" width="85px" title="第4轴判定代码" sortable />
        <vxe-column field="Angle5Axis" width="80px" title="紧固角度5軸" sortable />
        <vxe-column field="Axis5Code" width="85px" title="5軸目判定代码" sortable />
        <vxe-column field="Angle6Axis" width="80px" title="紧固角度6軸" sortable />
        <vxe-column field="Axis6Code" width="85px" title="6軸目判定代码" sortable />
        <vxe-column field="Angle7Axis" width="80px" title="紧固角度7軸" sortable />
        <vxe-column field="Axis7Code" width="85px" title="第7轴判定代码" sortable />
        <vxe-column field="Angle8Axis" width="80px" title="紧固角度8軸" sortable />
        <vxe-column field="Axis8Code" width="85px" title="第8轴判定代码" sortable />
        <vxe-column field="Angle9Axis" width="80px" title="紧固角度9軸" sortable />
        <vxe-column field="Axis9Code" width="85px" title="第9轴判定代码" sortable />
        <vxe-column field="Angle10Axis" width="80px" title="紧固角度10軸" sortable />
        <vxe-column field="Axis10Code" width="85px" title="第10轴判定代码" sortable />
        <vxe-column field="Ab" title=A/B sortable />
      </vxe-colgroup>

      <vxe-colgroup title="箱体反转">
        <vxe-column field="ReDate" width="165px" title="计测日時" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="防错防误预备计测日時">
        <vxe-column field="PokayokeDateBas" width="175px" title="防错防误预备计测日時" sortable />
      </vxe-colgroup>

      <vxe-colgroup title="防错防误计测日時">
        <vxe-column field="PokayokeDate8" width="165px" title="防错防误8计测日時" sortable />
        <vxe-column field="PokayokeDate9" width="165px" title="防错防误9计测日時" sortable />
        <vxe-column field="PokayokeDate10" width="175px" title="防错防误10计测日時" sortable />
        <vxe-column field="PokayokeDate11" width="175px" title="防错防误11计测日時" sortable />
        <vxe-column field="PokayokeDate12" width="175px" title="防错防误12计测日時" sortable />
        <vxe-column field="PokayokeDate13" width="175px" title="防错防误13计测日時" sortable />
        <vxe-column field="PokayokeDate14"  width="175px" title="防错防误14计测日時" sortable />
      </vxe-colgroup>
    </vxe-table>

</template>
<script setup>
import { defineProps } from 'vue';
import { TableConfig } from '@/service/GetDataMethod/utils';
import XEUtils from 'xe-utils'
import BasicTemp from './BasicTemp.vue';

defineProps({
  tableData: Array,
})

const formatDate = ({ cellValue }) => {
  return XEUtils.toDateString(cellValue, 'yyyy-MM-dd HH:mm:ss')
}
</script>