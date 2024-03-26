<template>
    <vxe-colgroup title="MotorTable">
        <vxe-colgroup field="" title="防错防误１计测日時">
            <vxe-column field="MoPokayokeDate1" title="防错防误１计测日時" />
        </vxe-colgroup>

        <vxe-colgroup field="" title="防错防误2计测日時">
            <vxe-column field="MoPokayokeDate2" title="防错防误2计测日時" />
        </vxe-colgroup>

        <vxe-colgroup field="" title="Hsg面壳Brg压入">
            <vxe-column field="MoHsgBrgDate" title="计测日时" />
            <vxe-column field="MoHsgBrgStroke" title="拐点行程" />
            <vxe-column field="MoHsgBrgLoad" title="変曲点负重" />
            <vxe-column field="MoHsgBrgFinalStroke" title="最终行程" />
            <vxe-column field="MoHsgBrgFinalLoad" title="最終荷负重" />
            <vxe-column field="MoHsgBrgStrokeSec" title="拐点行程" />
            <vxe-column field="MoHsgBrgLoadSec" title="変曲点负重" />
            <vxe-column field="MoHsgBrgFinalStrokeSec" title="最终行程" />
            <vxe-column field="MoHsgBrgFinalLoadSec" title="最終荷负重" />
            <vxe-column field="MoHsgBrgMainStroke" title="主行程" />
            <vxe-column field="MoHsgBrgAbvalue" title="A/B" />
        </vxe-colgroup>

        <vxe-colgroup field="" title="Hsg面定位销压入">
            <vxe-column field="MoHsgKnockDate" title="计测日时" />
            <vxe-column field="MoHsgKnockStroke" title="拐点行程" />
            <vxe-column field="MoHsgKnockLoad" title="変曲点负重" />
            <vxe-column field="MoHsgKnockFinalStroke" title="最终行程" />
            <vxe-column field="MoHsgKnockFinalLoad" title="最終荷负重" />
            <vxe-column field="MoHsgKnockStrokeSec" title="拐点行程" />
            <vxe-column field="MoHsgKnockLoadSec" title="変曲点负重" />
            <vxe-column field="MoHsgKnockFinalStrokeSec" title="最终行程" />
            <vxe-column field="MoHsgKnockFinalLoadSec" title="最終荷负重" />
            <vxe-column field="MoHsgKnockMainStroke" title="主行程" />
            <vxe-column field="MoHsgKnockAbvalue" title="A/B" />
        </vxe-colgroup>

        <vxe-colgroup field="" title="防错防误3计测日時">
            <vxe-column field="MoPokayokeDate3" title="防错防误3计测日時" />
        </vxe-colgroup>

        <vxe-colgroup field="" title="防错防误4计测日時">
            <vxe-column field="MoPokayokeDate4" title="防错防误4计测日時" />
        </vxe-colgroup>

        <vxe-colgroup field="" title="RR面壳体Brg压入">
            <vxe-column field="MoRrbrgDate" title="计测日时" />
            <vxe-column field="MoRrbrgStroke" title="拐点行程" />
            <vxe-column field="MoRrbrgLoad" title="変曲点负重" />
            <vxe-column field="MoRrbrgFinalStroke" title="最终行程" />
            <vxe-column field="MoRrbrgFinalLoad" title="最終荷负重" />
            <vxe-column field="MoRrbrgStrokeSec" title="拐点行程" />
            <vxe-column field="MoRrbrgLoadSec" title="変曲点负重" />
            <vxe-column field="MoRrbrgFinalStrokeSec" title="最终行程" />
            <vxe-column field="MoRrbrgFinalLoadSec" title="最終荷负重" />
            <vxe-column field="MoRrbrgMainStroke" title="主行程" />
            <vxe-column field="MoRrbrgAbvalue" title="A/B" />
        </vxe-colgroup>

        <vxe-colgroup field="" title="RR面定位销压入">
            <vxe-column field="MoRrknockDate" title="计测日时" />
            <vxe-column field="MoRrknockStroke" title="拐点行程" />
            <vxe-column field="MoRrknockLoad" title="変曲点负重" />
            <vxe-column field="MoRrknockFinalStroke" title="最终行程" />
            <vxe-column field="MoRrknockFinalLoad" title="最終荷负重" />
            <vxe-column field="MoRrknockStrokeSec" title="拐点行程" />
            <vxe-column field="MoRrknockLoadSec" title="変曲点负重" />
            <vxe-column field="MoRrknockFinalStrokeSec" title="最终行程" />
            <vxe-column field="MoRrknockFinalLoadSec" title="最終荷负重" />
            <vxe-column field="MoRrknockMainStroke" title="主行程" />
            <vxe-column field="MoRrknockAbvalue" title="A/B" />
        </vxe-colgroup>

        <vxe-colgroup field="" title="MG1组装・端子台紧固">
            <vxe-column field="MoMg1date" title="计测日时" />
            <vxe-column field="MoMg1torqAngleAxis1" title="紧固角度1轴" />
            <vxe-column field="MoMg1codeAxis1" title="第1轴判定代码" />
            <vxe-column field="MoMg1torqAngleAxis2" title="紧固角度2轴" />
            <vxe-column field="MoMg1codeAxis2" title="第2轴判定代码" />
            <vxe-column field="MoMg1torqAngleAxis3" title="紧固角度3轴" />
            <vxe-column field="MoMg1codeAxis3" title="第3轴判定代码" />
        </vxe-colgroup>

        <vxe-colgroup field="" title="MG2组装・端子台紧固">
            <vxe-column field="MoMg2date" title="计测日时" />
            <vxe-column field="MoMg2torqAngleAxis1" title="紧固角度1轴" />
            <vxe-column field="MoMg2codeAxis1" title="第1轴判定代码" />
            <vxe-column field="MoMg2torqAngleAxis2" title="紧固角度2轴" />
            <vxe-column field="MoMg2codeAxis2" title="第2轴判定代码" />
            <vxe-column field="MoMg2torqAngleAxis3" title="紧固角度3轴" />
            <vxe-column field="MoMg2codeAxis3" title="第3轴判定代码" />
        </vxe-colgroup>

        <vxe-colgroup field="" title="防错防误５计测日時">
            <vxe-column field="MoPokayokeDate5" title="防错防误５计测日時" />
        </vxe-colgroup>

        <vxe-colgroup field="" title="定子本体紧固">
            <vxe-column field="MoStatorDate" title="计测日时" />
            <vxe-column field="MoTorqAngleAxis1" title="紧固角度1軸" />
            <vxe-column field="MoCodeAxis1" title="第1轴判定代码" />
            <vxe-column field="MoTorqAngleAxis2" title="紧固角度2軸" />
            <vxe-column field="MoCodeAxis2" title="第2轴判定代码" />
            <vxe-column field="MoTorqAngleAxis3" title="紧固角度3軸1" />
            <vxe-column field="MoCodeAxis3" title="第3轴1判定代码" />
            <vxe-column field="MoAngleAxis1Sec" title="紧固角度1軸" />
            <vxe-column field="MoAxisCode1Sec" title="第一轴判定代码" />
            <vxe-column field="MoAngleAxis2Sec" title="紧固角度2軸" />
            <vxe-column field="MoAxisCode2Sec" title="第2轴判定代码" />
            <vxe-column field="MoAngleAxis3Sec" title="紧固角度3軸" />
            <vxe-column field="MoAxisCode3Sec" title="第3轴判定代码" />
            <vxe-column field="MoMg1stator1" title="MG1定子1軸塑性区紧固扭矩" />
            <vxe-column field="MoMg1stator2" title="MG1定子2軸塑性区紧固扭矩" />
            <vxe-column field="MoMg1stator3" title="MG1定子3軸塑性区紧固扭矩" />
            <vxe-column field="MoMg2stator1" title="MG2定子1軸塑性区紧固扭矩" />
            <vxe-column field="MoMg2stator2" title="MG2定子2軸塑性区紧固扭矩" />
            <vxe-column field="MoMg2stator3" title="MG2定子3軸塑性区紧固扭矩" />
        </vxe-colgroup>

        <vxe-colgroup field="" title="防错防误6计测日時">
            <vxe-column field="MoPokayokeDate6" title="防错防误6计测日時" />
        </vxe-colgroup>

        <vxe-colgroup field="" title="防错防误7计测日時">
            <vxe-column field="MoPokayokeDate7" title="防错防误7计测日時" />
        </vxe-colgroup>

        <vxe-colgroup field="" title="转子磁化移载">
            <vxe-column field="MoMeasDate" title="计测日时" />
            <vxe-column field="MoMg1workTemp" title="MG1工件温度" />
            <vxe-column field="MoMg1fluxValue" title="MG1通量值" />
            <vxe-column field="MoMg1dec" title="MG1判定" />
            <vxe-column field="MoMg2workTemp" title="MG2工件温度" />
            <vxe-column field="MoMg2fluxValue" title="MG2通量值" />
            <vxe-column field="MoMg2dec" title="MG2判定" />
        </vxe-colgroup>

        <vxe-colgroup field="" title="RrFIGP">
            <vxe-column field="MoRrFigpdate" title="计测日时" />
            <vxe-column field="MoImgResult" title="画像判定結果" />
        </vxe-colgroup>

        <vxe-colgroup field="" title="Rr罩子组装">
            <vxe-column field="MoRrcoverDate" title="计测日時" />
        </vxe-colgroup>

        <vxe-colgroup field="" title="合体①">
            <vxe-column field="MoTotalDate1" title="计测日时合体" />
            <vxe-column field="MoTotal1AngleAxis1" title="紧固角度1軸" />
            <vxe-column field="MoTotal1Axis1Code" title="第1轴判定代码" />
            <vxe-column field="MoTotal1AngleAxis2" title="紧固角度2軸" />
            <vxe-column field="MoTotal1Axis2Code" title="第2轴判定代码" />
            <vxe-column field="MoTotal1AngleAxis3" title="紧固角度3軸" />
            <vxe-column field="MoTotal1Axis3Code" title="第3轴判定代码" />
            <vxe-column field="MoTotal1AngleAxis4" title="紧固角度4軸" />
            <vxe-column field="MoTotal1Axis4Code" title="第4轴判定代码" />
            <vxe-column field="MoTotal1AngleAxis5" title="紧固角度5軸" />
            <vxe-column field="MoTotal1Axis5Code" title="5軸目判定代码" />
            <vxe-column field="MoTotal1AngleAxis6" title="紧固角度6軸" />
            <vxe-column field="MoTotal1Axis6Code" title="6軸目判定代码" />
            <vxe-column field="MoTotal1AngleAxis7" title="紧固角度7軸" />
            <vxe-column field="MoTotal1Axis7Code" title="7軸目判定代码" />
            <vxe-column field="MoTotal1AngleAxis8" title="紧固角度8軸" />
            <vxe-column field="MoTotal1Axis8Code" title="8軸目判定代码" />
            <vxe-column field="MoTotal1AngleAxis9" title="紧固角度9軸" />
            <vxe-column field="MoTotal1Axis9Code" title="9軸目判定代码" />
            <vxe-column field="MoTotal1AngleAxis10" title="紧固角度10軸" />
            <vxe-column field="MoTotal1Axis10Code" title="10軸目判定代码" />
            <vxe-column field="MoTotal1AngleAxis11" title="紧固角度11軸" />
            <vxe-column field="MoTotal1Axis11Code" title="第1轴判定代码" />
            <vxe-column field="MoTotal1Abvalue" title="A/B" />
        </vxe-colgroup>

        <vxe-colgroup field="" title="合体②">
            <vxe-column field="MoTotal2Date" title="计测日时" />
            <vxe-column field="MoAngle1Axis" title="紧固角度1軸" />
            <vxe-column field="MoAxis1Code" title="第1轴判定代码" />
            <vxe-column field="MoAngle2Axis" title="紧固角度2軸" />
            <vxe-column field="MoAxis2Code" title="第2轴判定代码" />
            <vxe-column field="MoAngle3Axis" title="紧固角度3軸" />
            <vxe-column field="MoAxis3Code" title="第3轴判定代码" />
            <vxe-column field="MoAngle4Axis" title="紧固角度4軸" />
            <vxe-column field="MoAxis4Code" title="第4轴判定代码" />
            <vxe-column field="MoAngle5Axis" title="紧固角度5軸" />
            <vxe-column field="MoAxis5Code" title="5軸目判定代码" />
            <vxe-column field="MoAngle6Axis" title="紧固角度6軸" />
            <vxe-column field="MoAxis6Code" title="6軸目判定代码" />
            <vxe-column field="MoAngle7Axis" title="紧固角度7軸" />
            <vxe-column field="MoAxis7Code" title="第7轴判定代码" />
            <vxe-column field="MoAngle8Axis" title="紧固角度8軸" />
            <vxe-column field="MoAxis8Code" title="第8轴判定代码" />
            <vxe-column field="MoAngle9Axis" title="紧固角度9軸" />
            <vxe-column field="MoAxis9Code" title="第9轴判定代码" />
            <vxe-column field="MoMoAngle10Axis" title="紧固角度10軸" />
            <vxe-column field="MoAxis10Code" title="第10轴判定代码" />
            <vxe-column field="MoAb" title="A/B" />
        </vxe-colgroup>

        <vxe-colgroup field="" title="箱体反转">
            <vxe-column field="MoReDate" title="计测日時" />
        </vxe-colgroup>

        <vxe-colgroup field="" title="防错防误预备计测日時">
            <vxe-column field="MoPokayokeDateBas" title="防错防误预备计测日時" />
        </vxe-colgroup>

        <vxe-colgroup field="" title="防错防误计测日時">
            <vxe-column field="MoPokayokeDate8" title="防错防误8计测日時" />
            <vxe-column field="MoPokayokeDate9" title="防错防误9计测日時" />
            <vxe-column field="MoPokayokeDate10" title="防错防误10计测日時" />
            <vxe-column field="MoPokayokeDate11" title="防错防误11计测日時" />
            <vxe-column field="MoPokayokeDate12" title="防错防误12计测日時" />
            <vxe-column field="MoPokayokeDate13" title="防错防误13计测日時" />
            <vxe-column field="MoPokayokeDate14" title="防错防误14计测日時" />
        </vxe-colgroup>
    </vxe-colgroup>

</template>