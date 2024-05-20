<template>
        <vxe-table :data="tableData" v-bind="TableConfig">
            <vxe-colgroup title="特定列" fixed="left">
                <vxe-column field="CollectionDate" width="150px" title="采集时间" fixed="left" sortable
                    :formatter="formatDate" />
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
                <vxe-column field="OilPump" width="70px" title="油泵" sortable />
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
                <!-- <vxe-column field="ShipmentSerial" width="155px" title="出货序列" sortable /> -->
                <vxe-column field="RropSerial" width="145px" title="Rr油泵序列" sortable />
            </vxe-colgroup>

            <BasicTemp />
            <PokayokeDate :colName="'防错防误15计测日時'" :value="'PokayokeDate15'" />
            <PokayokeDate :colName="'防错防误16计测日時'" :value="'PokayokeDate16'" />
            <PokayokeDate :colName="'ラベル発券计测日时'" :value="'TagMeasDate'" />
            <PokayokeDate :colName="'防错防误18计测日時'" :value="'PokayokeDate18'" />
            <PokayokeDate :colName="'防错防误19计测日時'" :value="'PokayokeDate19'" />

            <vxe-colgroup title="シム選択">
                <vxe-column field="ShimMeas" width="165px" title="计测日时" sortable></vxe-column>
                <vxe-column field="ShimHsgt7" width="110px" title="Hsg侧差速器轴深度t7" sortable></vxe-column>
                <vxe-column field="ShimHsgt5" width="110px" title="Hsg侧转向销轴深度t5" sortable></vxe-column>
                <vxe-column field="ShimHsgt3" width="120px" title="Hsg侧马达计数器轴深度t3" sortable></vxe-column>
                <vxe-column field="ShimHsgt1" width="110px" title="Hsg侧输入轴深度t1" sortable></vxe-column>
                <vxe-column field="ShimShellt8" width="110px" title="壳体侧差速器轴高度t8" sortable></vxe-column>
                <vxe-column field="ShimShellt6" width="110px" title="壳体侧干销轴高度t6" sortable></vxe-column>
                <vxe-column field="ShimCaset4" width="120px" title="箱侧马达计数器轴高度t4" sortable></vxe-column>
                <vxe-column field="ShimCaset2" width="110px" title="箱侧输入轴深度t2" sortable></vxe-column>
                <vxe-column field="ShimSlider" width="110px" title="垫片滑块（差速器轴）" sortable></vxe-column>
                <vxe-column field="ShimGrade" width="110px" title="垫片等级（转向销轴）" sortable></vxe-column>
                <vxe-column field="ShimGradeCo" width="110px" title="垫片等级（马达Co轴)" sortable></vxe-column>
                <vxe-column field="ShimGradeIn" width="110px" title="垫片等级（输入轴）" sortable></vxe-column>
                <vxe-column field="ShimValueDiff" width="120px" title="垫片实测值（差速器轴）" sortable></vxe-column>
                <vxe-column field="ShimValuePin" width="120px" title="垫片实测值（多拉销轴）" sortable></vxe-column>
                <vxe-column field="ShimValueCo" width="120px" title="垫片实测值（马达Co轴）" sortable></vxe-column>
                <vxe-column field="ShimValueIn" width="120px" title="垫片实测值（输入轴）" sortable></vxe-column>
                <vxe-column field="ShimGear" width="90px" title="齿轮直径判定" sortable></vxe-column>
                <vxe-column field="Shimt1t2" width="110px" title="α１（t1 - t2） 修正值" sortable></vxe-column>
                <vxe-column field="Shimt3t4" width="110px" title="α２（t3 - t4） 修正值" sortable></vxe-column>
                <vxe-column field="Shimt5t6" width="110px" title="α３（t5 - t6） 修正值" sortable></vxe-column>
                <vxe-column field="Shimt7t8" width="110px" title="α４（t7 - t8） 修正值" sortable></vxe-column>
                <vxe-column field="Shimt1Main" title="t1主值" sortable></vxe-column>
                <vxe-column field="Shimt3Main" title="t3主值" sortable></vxe-column>
                <vxe-column field="Shimt5Main" title="t5主值" sortable></vxe-column>
                <vxe-column field="Shimt7Main" title="t7主值" sortable></vxe-column>
                <vxe-column field="Shimt2Main" title="t2主值" sortable></vxe-column>
                <vxe-column field="Shimt4Main" title="t4主值" sortable></vxe-column>
                <vxe-column field="Shimt6Main" title="t6主值" sortable></vxe-column>
                <vxe-column field="Shimt8Main" title="t８主值" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="Hsg圧入1">
                <vxe-column field="Hsg1MeasDate" width="165px" title="计测日时" sortable></vxe-column>
                <vxe-column field="Hsg1Stroke" width="70px" title="拐点行程" sortable></vxe-column>
                <vxe-column field="Hsg1PtLoad" width="80px" title="変曲点负重" sortable></vxe-column>
                <vxe-column field="Hsg1FinalStroke" width="70px" title="最终行程" sortable></vxe-column>
                <vxe-column field="Hsg1FinalLoad" width="80px" title="最終荷负重" sortable></vxe-column>
                <vxe-column field="Hsg1StrokeSec" width="70px" title="拐点行程" sortable></vxe-column>
                <vxe-column field="Hsg1PtLoadSec" width="80px" title="変曲点负重" sortable></vxe-column>
                <vxe-column field="Hsg1FinalStrokeSec" width="70px" title="最终行程" sortable></vxe-column>
                <vxe-column field="Hsg1FinalLoadSec" width="80px" title="最終荷负重" sortable></vxe-column>
                <vxe-column field="Hsg1MainStroke" title="主行程" sortable></vxe-column>
                <vxe-column field="Hsg1Abvalue" width="70px" title="A/B" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="Hsg圧入2">
                <vxe-column field="Hsg2MeasDate" width="165px" title="计测日时" sortable></vxe-column>
                <vxe-column field="Hsg2Stroke" width="70px" title="拐点行程" sortable></vxe-column>
                <vxe-column field="Hsg2PtLoad" width="80px" title="変曲点负重" sortable></vxe-column>
                <vxe-column field="Hsg2FinalStroke" width="70px" title="最终行程" sortable></vxe-column>
                <vxe-column field="Hsg2FinalLoad" width="80px" title="最終荷负重" sortable></vxe-column>
                <vxe-column field="Hsg2StrokeSec" width="70px" title="拐点行程" sortable></vxe-column>
                <vxe-column field="Hsg2PtLoadSec" width="80px" title="変曲点负重" sortable></vxe-column>
                <vxe-column field="Hsg2FinalStrokeSec" width="70px" title="最终行程" sortable></vxe-column>
                <vxe-column field="Hsg2FinalLoadSec" width="80px" title="最終荷负重" sortable></vxe-column>
                <vxe-column field="Hsg2MainStroke" title="主行程" sortable></vxe-column>
                <vxe-column field="Hsg2Abvalue" width="70px" title="A/B" sortable></vxe-column>
            </vxe-colgroup>

            <PokayokeDate :colName="'防错防误20计测日時'" :value="'PokayokeDate20'" />

            <vxe-colgroup title="HSG FIGP">
                <vxe-column field='HsgFigpDate' width="175px" title="HSG FIGP计测日時" sortable></vxe-column>
                <vxe-column field='HsgFigpportrait' width="80px" title='画像判定結果' sortable></vxe-column>
            </vxe-colgroup>

            <PokayokeDate :colName="'HSG合体'" :value="'HsgFitDate'" />

            <vxe-colgroup title="HSG合体紧固①">
                <vxe-column field="Hsg1Date" width="165px" title="计测日時" sortable></vxe-column>
                <vxe-column field="Hsg1AngleAxis1" width="80px" title="紧固角度1軸" sortable></vxe-column>
                <vxe-column field="Hsg1CodeAxis1" width="85px" title="第1軸判定代码" sortable></vxe-column>
                <vxe-column field="Hsg1AngleAxis2" width="80px" title="紧固角度2軸" sortable></vxe-column>
                <vxe-column field="Hsg1CodeAxis2" width="85px" title="第2軸判定代码" sortable></vxe-column>
                <vxe-column field="Hsg1AngleAxis3" width="80px" title="紧固角度3軸" sortable></vxe-column>
                <vxe-column field="Hsg1CodeAxis3" width="85px" title="第3軸判定代码" sortable></vxe-column>
                <vxe-column field="Hsg1AngleAxis4" width="80px" title="紧固角度4軸" sortable></vxe-column>
                <vxe-column field="Hsg1CodeAxis4" width="85px" title="第4軸判定代码" sortable></vxe-column>
                <vxe-column field="Hsg1AngleAxis5" width="80px" title="紧固角度5軸" sortable></vxe-column>
                <vxe-column field="Hsg1CodeAxis5" width="85px" title="第5軸判定代码" sortable></vxe-column>
                <vxe-column field="Hsg1AngleAxis6" width="80px" title="紧固角度6軸" sortable></vxe-column>
                <vxe-column field="Hsg1CodeAxis6" width="85px" title="第6軸判定代码" sortable></vxe-column>
                <vxe-column field="Hsg1AngleAxis7" width="80px" title="紧固角度7軸" sortable></vxe-column>
                <vxe-column field="Hsg1CodeAxis7" width="85px" title="第7軸判定代码" sortable></vxe-column>
                <vxe-column field="Hsg1AngleAxis8" width="80px" title="紧固角度8軸" sortable></vxe-column>
                <vxe-column field="Hsg1CodeAxis8" width="85px" title="第8軸判定代码" sortable></vxe-column>
                <vxe-column field="Hsg1AngleAxis9" width="80px" title="紧固角度9軸" sortable></vxe-column>
                <vxe-column field="Hsg1CodeAxis9" width="85px" title="第9軸判定代码" sortable></vxe-column>
                <vxe-column field="Hsg1AngleAxis10" width="80px" title="紧固角度10軸" sortable></vxe-column>
                <vxe-column field="Hsg1CodeAxis10" width="85px" title="第10軸判定代码" sortable></vxe-column>
                <vxe-column field="Hsg1AngleAxis11" width="80px" title="紧固角度11軸" sortable></vxe-column>
                <vxe-column field="Hsg1CodeAxis11" width="85px" title="第11軸判定代码" sortable></vxe-column>
                <vxe-column field="Hsg1Ab" width="70px" title="A/B" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="HSG合体紧固①">
                <vxe-column field="Hsg2Date" width="165px" title="计测日時" sortable></vxe-column>
                <vxe-column field="Hsg2AngleAxis1" width="80px" title="紧固角度1軸" sortable></vxe-column>
                <vxe-column field="Hsg2CodeAxis1" width="85px" title="第1軸判定代码" sortable></vxe-column>
                <vxe-column field="Hsg2AngleAxis2" width="80px" title="紧固角度2軸" sortable></vxe-column>
                <vxe-column field="Hsg2CodeAxis2" width="85px" title="第2軸判定代码" sortable></vxe-column>
                <vxe-column field="Hsg2AngleAxis3" width="80px" title="紧固角度3軸" sortable></vxe-column>
                <vxe-column field="Hsg2CodeAxis3" width="85px" title="第3軸判定代码" sortable></vxe-column>
                <vxe-column field="Hsg2AngleAxis4" width="80px" title="紧固角度4軸" sortable></vxe-column>
                <vxe-column field="Hsg2CodeAxis4" width="85px" title="第4軸判定代码" sortable></vxe-column>
                <vxe-column field="Hsg2AngleAxis5" width="80px" title="紧固角度5軸" sortable></vxe-column>
                <vxe-column field="Hsg2CodeAxis5" width="85px" title="第5軸判定代码" sortable></vxe-column>
                <vxe-column field="Hsg2AngleAxis6" width="80px" title="紧固角度6軸" sortable></vxe-column>
                <vxe-column field="Hsg2CodeAxis6" width="85px" title="第6軸判定代码" sortable></vxe-column>
                <vxe-column field="Hsg2AngleAxis7" width="80px" title="紧固角度7軸" sortable></vxe-column>
                <vxe-column field="Hsg2CodeAxis7" width="85px" title="第7軸判定代码" sortable></vxe-column>
                <vxe-column field="Hsg2AngleAxis8" width="80px" title="紧固角度8軸" sortable></vxe-column>
                <vxe-column field="Hsg2CodeAxis8" width="85px" title="第8軸判定代码" sortable></vxe-column>
                <vxe-column field="Hsg2AngleAxis9" width="80px" title="紧固角度9軸" sortable></vxe-column>
                <vxe-column field="Hsg2CodeAxis9" width="85px" title="第9軸判定代码" sortable></vxe-column>
                <vxe-column field="Hsg2AngleAxis10" width="80px" title="紧固角度10軸" sortable></vxe-column>
                <vxe-column field="Hsg2CodeAxis10" width="85px" title="第10軸判定代码" sortable></vxe-column>
                <vxe-column field="Hsg2AngleAxis11" width="80px" title="紧固角度11軸" sortable></vxe-column>
                <vxe-column field="Hsg2CodeAxis11" width="85px" title="第11軸判定代码" sortable></vxe-column>
                <vxe-column field="Hsg2Ab" width="70px" title="A/B" sortable></vxe-column>
            </vxe-colgroup>

            <PokayokeDate :colName="'防错防误27计测日時'" :value="'PokayokeDate27'" />

            <vxe-colgroup title="OS圧入1">
                <vxe-column field="Os1date" width="165px" title="OS圧入1计测日时" sortable></vxe-column>
                <vxe-column field="Os1lhstroke" width="110px" title="差速器LH OS拐点行程" sortable></vxe-column>
                <vxe-column field="Os1lhload" width="110px" title="差速器LH OS拐点负重" sortable></vxe-column>
                <vxe-column field="Os1lhfinalStroke" width="110px" title="差速器LH OS最终行程" sortable></vxe-column>
                <vxe-column field="Os1lhfinalLoad" width="110px" title="差速器LH OS最终负重" sortable></vxe-column>
                <vxe-column field="Os1rhstroke" width="110px" title="差速器RH OS拐点行程" sortable></vxe-column>
                <vxe-column field="Os1rhload" width="110px" title="差速器RH OS拐点负重" sortable></vxe-column>
                <vxe-column field="Os1rhfinalStroke" width="110px" title="差速器RH OS最终行程" sortable></vxe-column>
                <vxe-column field="Os1rhfinalLoad" width="110px" title="差速器RH OS最终负重" sortable></vxe-column>
                <vxe-column field="Os1mainStroke" title="主行程" sortable></vxe-column>
                <vxe-column field="Os1abvalue" width="70px" title="A/B" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="OS圧入2">
                <vxe-column field="Os2date" width="165px" title="OS圧入2计测日时" sortable></vxe-column>
                <vxe-column field="Os2stroke" width="110px" title="I/P OS拐点行程" sortable></vxe-column>
                <vxe-column field="Os2ptLoad" width="110px" title="I/P OS拐点负重" sortable></vxe-column>
                <vxe-column field="Os2finalStroke" width="110px" title="I/P OS最终行程" sortable></vxe-column>
                <vxe-column field="Os2finalLoad" width="110px" title="I/P OS最终负重" sortable></vxe-column>
                <vxe-column field="Os2mainStroke" title="主行程" sortable></vxe-column>
                <vxe-column field="Os2abvalue" width="70px" title="A/B" sortable></vxe-column>
            </vxe-colgroup>

            <PokayokeDate :colName="'防错防误21计测日時'" :value="'PokayokeDate21'" />
            <PokayokeDate :colName="'Assy正立计测日时'" :value="'AssyDate'" />
            <PokayokeDate :colName="'防错防误22计测日時'" :value="'PokayokeDate22'" />
            <PokayokeDate :colName="'防错防误23计测日時'" :value="'PokayokeDate23'" />
            <PokayokeDate :colName="'防错防误24计测日時'" :value="'PokayokeDate24'" />
            <PokayokeDate :colName="'防错防误25计测日時'" :value="'PokayokeDate25'" />

            <vxe-colgroup title="泄漏测试">
                <vxe-column field="LeakDate" width="165px" title="计测日时" sortable></vxe-column>
                <vxe-column field="LeakGear" width="85px" title="齿轮室泄漏量" sortable></vxe-column>
                <vxe-column field="LeakCorrect" width="80px" title="泄露修正值" sortable></vxe-column>
                <vxe-column field="LeakTempDec" width="70px" title="温度情报" sortable></vxe-column>
                <vxe-column field="LeakMain" width="85px" title="主值泄漏量" sortable></vxe-column>
                <vxe-column field="LeakFrontOil" width="85px" title="給油前重量" sortable></vxe-column>
                <vxe-column field="LeakEtaf" width="85px" title="e-TAF注油完了" sortable></vxe-column>
                <vxe-column field="LeakLastOil" width="85px" title="給油後重量" sortable></vxe-column>
                <vxe-column field="LeakTemp" width="70px" title="气氛温度" sortable></vxe-column>
                <vxe-column field="LeakHumidity" width="70px" title="湿度" sortable></vxe-column>
                <vxe-column field="LeakOilTempDec" width="85px" title="油温传感器判定" sortable></vxe-column>
                <vxe-column field="LeakMg1mohm" width="89px" title="絶縁电阻MG1 Ω" sortable></vxe-column>
                <vxe-column field="LeakMg1dec" width="93px" title="絶縁电阻MG1判定" sortable></vxe-column>
                <vxe-column field="LeakMg2mohm" width="89px" title="絶縁电阻MG2 Ω" sortable></vxe-column>
                <vxe-column field="LeakMg2dec" width="93px" title="絶縁电阻MG2判定" sortable></vxe-column>
                <vxe-column field="LeakMg1dielectric" width="89px" title="絶縁耐圧MG1" sortable></vxe-column>
                <vxe-column field="LeakMg1dielectricDec" width="93px" title="絶縁耐圧MG1判定" sortable></vxe-column>
                <vxe-column field="LeakMg2dielectric" width="89px" title="絶縁耐圧MG2" sortable></vxe-column>
                <vxe-column field="LeakMg2dielectricDec" width="93px" title="絶縁耐圧MG2判定" sortable></vxe-column>
                <vxe-column field="LeakThermistor" width="100px" title="热敏电阻絶縁电阻 Ω" sortable></vxe-column>
                <vxe-column field="LeakThermistorDec" width="105px" title="热敏电阻絶縁电阻判定" sortable></vxe-column>
                <vxe-column field="LeakResolver" width="110px" title="旋转变压器絶縁电阻 Ω" sortable></vxe-column>
                <vxe-column field="LeakResolverDec" width="115px" title="旋转变压器絶縁电阻判定" sortable></vxe-column>
                <vxe-column field="LeakOilTempMohmDec" width="110px" title="油温传感器絶縁电阻 Ω" sortable></vxe-column>
                <vxe-column field="LeakMg1uv" width="115px" title="油温传感器絶縁电阻判定" sortable></vxe-column>
                <vxe-column field="LeakMg1uvdec" width="115px" title="线间电阻MG1U-V Ω" sortable></vxe-column>
                <vxe-column field="LeakMg1uw" width="115px" title="线间电阻MG1U-V判定" sortable></vxe-column>
                <vxe-column field="LeakMg1uwdec" width="115px" title="线间电阻MG1V-W Ω" sortable></vxe-column>
                <vxe-column field="LeakMg1wu" width="115px" title="线间电阻MG1V-W判定" sortable></vxe-column>
                <vxe-column field="LeakMg1wudec" width="115px" title="线间电阻MG1W-U Ω" sortable></vxe-column>
                <vxe-column field="LeakMg2uv" width="115px" title="线间电阻MG1W-U判定" sortable></vxe-column>
                <vxe-column field="LeakMg2uvdec" width="115px" title="线间电阻MG2U-V Ω" sortable></vxe-column>
                <vxe-column field="LeakMg2uw" width="115px" title="线间电阻MG2U-V判定" sortable></vxe-column>
                <vxe-column field="LeakMg2uwdec" width="115px" title="线间电阻MG2V-W Ω" sortable></vxe-column>
                <vxe-column field="LeakMg2wu" width="115px" title="线间电阻MG2V-W判定" sortable></vxe-column>
                <vxe-column field="LeakMg2wudec" width="115px" title="线间电阻MG2W-U Ω" sortable></vxe-column>
                <vxe-column field="LeakThermistorMg1" width="115px" title="线间电阻MG2W-U判定" sortable></vxe-column>
                <vxe-column field="LeakThermistorMg1dec" width="115px" title="热敏电阻线间电阻MG1 Ω" sortable></vxe-column>
                <vxe-column field="LeakThermistorMg2" width="120px" title="热敏电阻线间电阻MG1判定" sortable></vxe-column>
                <vxe-column field="LeakThermistorMg2dec" width="115px" title="热敏电阻线间电阻MG2 Ω" sortable></vxe-column>
                <vxe-column field="LeakOilLine" width="120px" title="热敏电阻线间电阻MG2判定" sortable></vxe-column>
                <vxe-column field="LeakOilLineDec" width="115px" title="油温传感器线间电阻判定" sortable></vxe-column>
                <vxe-column field="LeakMg1rotateDec" width="155px" title="MG1旋转变压器连接器内相关短路判定" sortable></vxe-column>
                <vxe-column field="LeakMg2rotateDec" width="155px" title="MG2旋转变压器连接器内相关短路判定" sortable></vxe-column>
                <vxe-column field="LeakMg1wmg2v" width="125px" title="MG1W相×MG2V相短路判定" sortable></vxe-column>
                <vxe-column field="LeakOil" width="100px"  title="油温传感器絶縁电阻" sortable></vxe-column>
                <vxe-column field="LeakMg196" width="195px" title="旋转变压器线间电阻MG1 GRFG-GRF(9-6間)（Ω）" sortable></vxe-column>
                <vxe-column field="LeakMg196dec" width="195px" title="旋转变压器线间电阻MG1 GRFG-GRF(9-6間)判定" sortable></vxe-column>
                <vxe-column field="LeakMg11410" width="200px" title="旋转变压器线间电阻MG1 GCSG-GCS(14-10間)（Ω）" sortable></vxe-column>
                <vxe-column field="LeakMg11410dec" width="195px" title="旋转变压器线间电阻MG1 GCSG-GCS(14-10間)判定" sortable></vxe-column>
                <vxe-column field="LeakMg1135" width="200px" title="旋转变压器线间电阻MG1 GSN-GSNG(13-5間)（Ω）" sortable></vxe-column>
                <vxe-column field="LeakMg1135dec" width="195px" title="旋转变压器线间电阻MG1 GSN-GSNG(13-5間)判定" sortable></vxe-column>
                <vxe-column field="LeakMg281" width="195px" title="旋转变压器线间电阻MG2 MRFG-MRF(8-1間)（Ω）" sortable></vxe-column>
                <vxe-column field="LeakMg281dec" width="195px" title="旋转变压器线间电阻MG2 MRFG-MRF(8-1間)判定" sortable></vxe-column>
                <vxe-column field="LeakMg2117" width="200px" title="旋转变压器线间电阻MG2 MCSG-MCS(11-7間)（Ω）" sortable></vxe-column>
                <vxe-column field="LeakMg2117dec" width="195px" title="旋转变压器线间电阻MG2 MCSG-MCS(11-7間)判定" sortable></vxe-column>
                <vxe-column field="LeakMg232" width="195px" title="旋转变压器线间电阻MG2 MSN-MSNG(3-2間)（Ω）" sortable></vxe-column>
                <vxe-column field="LeakMg232dec" width="195px" title="旋转变压器线间电阻MG2 MSN-MSNG(3-2間)判定" sortable></vxe-column>
                <vxe-column field="LeakCol" width="70px" title="多列标识" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="ISS">
                <vxe-column field="IssDate" width="165px" title="计测日时" sortable></vxe-column>
                <vxe-column field="IssP" width="70px" title="P锁定判定" sortable></vxe-column>
                <vxe-column field="IssnotP" width="70px" title="notP判定" sortable></vxe-column>
                <vxe-column field="IssFunction" width="70px" title="官能判定" sortable></vxe-column>
                <vxe-column field="IssMg1uv" width="125px" title="MG1探测接触电阻U-V间 Ω" sortable></vxe-column>
                <vxe-column field="IssMg1uvdec" width="125px" title="MG1探测接触电阻U-V间判定" sortable></vxe-column>
                <vxe-column field="IssMg1vw" width="125px" title="MG1探测接触电阻V-W间 Ω" sortable></vxe-column>
                <vxe-column field="IssMg1vwdec" width="130px" title="MG1探测接触电阻V-W间判定" sortable></vxe-column>
                <vxe-column field="IssMg2uv" width="125px" title="MG2探测接触电阻U-V间 Ω" sortable></vxe-column>
                <vxe-column field="IssMg2uvdec" width="125px" title="MG2探测接触电阻U-V间判定" sortable></vxe-column>
                <vxe-column field="IssMg2vw" width="125px" title="MG2探测接触电阻V-W间 Ω" sortable></vxe-column>
                <vxe-column field="IssMg2vwdec" width="135px" title="MG2探测接触电阻V-W间判定" sortable></vxe-column>
                <vxe-column field="IssMg1value" width="125px" title="MG1旋转变压器偏移値" sortable></vxe-column>
                <vxe-column field="IssMg1valueDec" width="125px" title="MG1旋转变压器偏移値判定" sortable></vxe-column>
                <vxe-column field="IssMg2value" width="115px" title="MG2旋转变压器偏移値" sortable></vxe-column>
                <vxe-column field="IssMg2valueDec" width="125px" title="MG2旋转变压器偏移値判定" sortable></vxe-column>
                <vxe-column field="IssMg1disUv" width="105px" title="MG1反向电压U-V Ω" sortable></vxe-column>
                <vxe-column field="IssMg1disUvdec" width="110px" title="MG1反向电压U-V判定" sortable></vxe-column>
                <vxe-column field="IssMg1disVw" width="105px" title="MG1反向电压V-W Ω" sortable></vxe-column>
                <vxe-column field="IssMg1disVwdec" width="110px"  title="MG1反向电压V-W判定" sortable></vxe-column>
                <vxe-column field="IssMg2disUv" width="105px" title="MG2反向电压U-V Ω" sortable></vxe-column>
                <vxe-column field="IssMg2disUvdec" width="110px" title="MG2反向电压U-V判定" sortable></vxe-column>
                <vxe-column field="IssMg2disVw" width="105px" title="MG2反向电压V-W Ω" sortable></vxe-column>
                <vxe-column field="IssMg2disVwdec" width="110px" title="MG2反向电压V-W判定" sortable></vxe-column>
                <vxe-column field="IssMg2gear" width="110px" title="齿轮比確認MG2旋转数" sortable></vxe-column>
                <vxe-column field="IssMg2gearDec" width="90px" title="齿轮比確認判定" sortable></vxe-column>
                <vxe-column field="IssRevup" width="90px" title="异音測定加速判定" sortable></vxe-column>
                <vxe-column field="IssSlowup" width="90px" title="异音測定減速判定" sortable></vxe-column>
                <vxe-column field="IssRevCounter" width="105px" title="加速側计数器综合判定" sortable></vxe-column>
                <vxe-column field="IssRevLast" width="105px" title="加速側最终综合判定" sortable></vxe-column>
                <vxe-column field="IssSlowCounter" width="110px" title="減速側计数器综合判定" sortable></vxe-column>
                <vxe-column field="IssSlowLast" width="105px" title="減速側最终综合判定" sortable></vxe-column>
                <vxe-column field="IssRevAvg" width="125px" title="加速側差速器轴平均負荷扭矩" sortable></vxe-column>
                <vxe-column field="IssRevAvgDec" width="140px"  title="加速側差速器轴平均負荷扭矩判定" sortable></vxe-column>
                <vxe-column field="IssSlowAvg" width="125px" title="減速側差速器轴平均負荷扭矩" sortable></vxe-column>
                <vxe-column field="IssSlowAvgDec" width="140px" title="減速側差速器轴平均負荷扭矩判定" sortable></vxe-column>
                <vxe-column field="IssOilTemp" width="105px" title="油温传感器温度" sortable></vxe-column>
                <vxe-column field="IssRev1Noise" width="110px" title="加速側计数器区间1噪音" sortable></vxe-column>
                <vxe-column field="IssRev1Rate" width="110px" title="加速側计数器区间1频率" sortable></vxe-column>
                <vxe-column field="IssRev1" width="110px" title="加速側计数器区间1判定" sortable></vxe-column>
                <vxe-column field="IssRev2Noise" width="110px" title="加速側计数器区间2噪音" sortable></vxe-column>
                <vxe-column field="IssRev2Rate"  width="110px" title="加速側计数器区间2频率" sortable></vxe-column>
                <vxe-column field="IssRev2" width="110px" title="加速側计数器区间2判定" sortable></vxe-column>
                <vxe-column field="IssRev3Noise" width="110px" title="加速側计数器区间3噪音" sortable></vxe-column>
                <vxe-column field="IssRev3Rate" width="110px" title="加速側计数器区间3频率" sortable></vxe-column>
                <vxe-column field="IssRev3" width="110px" title="加速側计数器区间3判定" sortable></vxe-column>
                <vxe-column field="IssRev4Noise" width="110px" title="加速側计数器区间4噪音" sortable></vxe-column>
                <vxe-column field="IssRev4Rate" width="110px" title="加速側计数器区间4频率" sortable></vxe-column>
                <vxe-column field="IssRev4" width="110px" title="加速側计数器区间4判定" sortable></vxe-column>
                <vxe-column field="IssRev5Noise" width="110px" title="加速側计数器区间5噪音" sortable></vxe-column>
                <vxe-column field="IssRev5Rate" width="110px" title="加速側计数器区间5频率" sortable></vxe-column>
                <vxe-column field="IssRev5" width="110px" title="加速側计数器区间5判定" sortable></vxe-column>
                <vxe-column field="IssRevLast1Noise" width="110px" title="加速側最终区间1噪音" sortable></vxe-column>
                <vxe-column field="IssRevLast1Rate" width="110px" title="加速側最终区间1频率" sortable></vxe-column>
                <vxe-column field="IssRevLast1" width="110px" title="加速側最终区间1判定" sortable></vxe-column>
                <vxe-column field="IssRevLast2Noise" width="110px" title="加速側最终区间2噪音" sortable></vxe-column>
                <vxe-column field="IssRevLast2Rate" width="110px" title="加速側最终区间2频率" sortable></vxe-column>
                <vxe-column field="IssRevLast2" width="110px" title="加速側最终区间2判定" sortable></vxe-column>
                <vxe-column field="IssRevLast3Noise" width="110px" title="加速側最终区间3噪音" sortable></vxe-column>
                <vxe-column field="IssRevLast3Rate" width="110px" title="加速側最终区间3频率" sortable></vxe-column>
                <vxe-column field="IssRevLast3" width="110px" title="加速側最终区间3判定" sortable></vxe-column>
                <vxe-column field="IssRevLast4Noise" width="110px" title="加速側最终区间4噪音" sortable></vxe-column>
                <vxe-column field="IssRevLast4Rate" width="110px" title="加速側最终区间4频率" sortable></vxe-column>
                <vxe-column field="IssRevLast4" width="110px" title="加速側最终区间4判定" sortable></vxe-column>
                <vxe-column field="IssRevLast5Noise" width="110px" title="加速側最终区间5噪音" sortable></vxe-column>
                <vxe-column field="IssRevLast5Rate" width="110px" title="加速側最终区间5频率" sortable></vxe-column>
                <vxe-column field="IssSlow1Noise" width="110px"  title="減速側计数器区间1噪音" sortable></vxe-column>
                <vxe-column field="IssSlow1Rate" width="110px" title="減速側计数器区间1频率" sortable></vxe-column>
                <vxe-column field="IssSlow1" width="110px" title="減速側计数器区间1判定" sortable></vxe-column>
                <vxe-column field="IssSlow2Noise" width="110px" title="減速側计数器区间2噪音" sortable></vxe-column>
                <vxe-column field="IssSlow2Rate" width="110px" title="減速側计数器区间2频率" sortable></vxe-column>
                <vxe-column field="IssSlow2" width="110px" title="減速側计数器区间2判定" sortable></vxe-column>
                <vxe-column field="IssSlow3Noise" width="110px" title="減速側计数器区间3噪音" sortable></vxe-column>
                <vxe-column field="IssSlow3Rate" width="110px" title="減速側计数器区间3频率" sortable></vxe-column>
                <vxe-column field="IssSlow3" width="110px"  title="減速側计数器区间3判定" sortable></vxe-column>
                <vxe-column field="IssSlow4Noise" width="110px" title="減速側计数器区间4噪音" sortable></vxe-column>
                <vxe-column field="IssSlow4Rate" width="110px" title="減速側计数器区间4频率" sortable></vxe-column>
                <vxe-column field="IssSlow4" width="110px" title="減速側计数器区间4判定" sortable></vxe-column>
                <vxe-column field="IssSlow5Noise" width="110px" title="減速側计数器区间5噪音" sortable></vxe-column>
                <vxe-column field="IssSlow5Rate" width="110px" title="減速側计数器区间5频率" sortable></vxe-column>
                <vxe-column field="IssSlow5" width="110px" title="減速側计数器区间5判定" sortable></vxe-column>
                <vxe-column field="IssSlowLast1Noise" width="110px" title="減速側最终区间1噪音" sortable></vxe-column>
                <vxe-column field="IssSlowLast1Rate" width="110px" title="減速側最终区间1频率" sortable></vxe-column>
                <vxe-column field="IssSlowLast1" width="110px" title="減速側最终区间1判定" sortable></vxe-column>
                <vxe-column field="IssSlowLast2Noise" width="110px" title="減速側最终区间2噪音" sortable></vxe-column>
                <vxe-column field="IssSlowLast2Rate" width="110px" title="減速側最终区间2频率" sortable></vxe-column>
                <vxe-column field="IssSlowLast2" width="110px" title="減速側最终区间2判定" sortable></vxe-column>
                <vxe-column field="IssSlowLast3Noise" width="110px" title="減速側最终区间3噪音" sortable></vxe-column>
                <vxe-column field="IssSlowLast3Rate" width="110px" title="減速側最终区间3频率" sortable></vxe-column>
                <vxe-column field="IssSlowLast3" width="110px" title="減速側最终区间3判定" sortable></vxe-column>
                <vxe-column field="IssSlowLast4Noise" width="110px" title="減速側最终区间4噪音" sortable></vxe-column>
                <vxe-column field="IssSlowLast4Rate" width="110px" title="減速側最终区间4频率" sortable></vxe-column>
                <vxe-column field="IssSlowLast4" width="110px" title="減速側最终区间4判定" sortable></vxe-column>
                <vxe-column field="IssSlowLast5Noise" width="110px" title="減速側最终区间5噪音" sortable></vxe-column>
                <vxe-column field="IssSlowLast5Rate" width="110px" title="減速側最终区间5频率" sortable></vxe-column>
                <vxe-column field="IssSlowLast5" width="110px" title="減速側最终区间5判定" sortable></vxe-column>
                <vxe-column field="IssRevColor" width="110px" title="加速颜色映射综合判定" sortable></vxe-column>
                <vxe-column field="IssSlowColor" width="110px" title="減速颜色映射综合判定" sortable></vxe-column>
                <vxe-column field="IssRevColor1dB" width="130px"  title="①加速颜色映射判定噪音(dB)" sortable></vxe-column>
                <vxe-column field="IssRevColor1Hz" width="130px" title="①加速颜色映射判定频率(Hz)" sortable></vxe-column>
                <vxe-column field="IssRevColor1rpm" width="140px" title="①加速颜色映射判定旋转数(rpm)" sortable></vxe-column>
                <vxe-column field="IssRevColor1sum" width="130px"  title="①加速颜色映射判定次数" sortable></vxe-column>
                <vxe-column field="IssRevColor1Dec" width="110px" title="①加速颜色映射判定" sortable></vxe-column>
                <vxe-column field="IssSlowColor1dB" width="130px" title="①減速颜色映射判定噪音(dB)" sortable></vxe-column>
                <vxe-column field="IssSlowColor1Hz" width="130px" title="①減速颜色映射判定频率(Hz)" sortable></vxe-column>
                <vxe-column field="IssSlowColor1rpm" width="140px" title="①減速颜色映射判定旋转数(rpm)" sortable></vxe-column>
                <vxe-column field="IssSlowColor1sum" width="130px" title="①減速颜色映射判定次数" sortable></vxe-column>
                <vxe-column field="IssSlowColor1Dec" width="110px" title="①減速颜色映射判定" sortable></vxe-column>
                <vxe-column field="IssRevColor2dB" width="140px" title="②加速颜色映射判定噪音(dB)" sortable></vxe-column>
                <vxe-column field="IssRevColor2Hz" width="130px" title="②加速颜色映射判定频率(Hz)" sortable></vxe-column>
                <vxe-column field="IssRevColor2rpm" width="140px" title="②加速颜色映射判定旋转数(rpm)" sortable></vxe-column>
                <vxe-column field="IssRevColor2sum" width="130px" title="②加速颜色映射判定次数" sortable></vxe-column>
                <vxe-column field="IssRevColor2Dec" width="110px" title="②加速颜色映射判定" sortable></vxe-column>
                <vxe-column field="IssSlowColor2dB" width="140px" title="②減速颜色映射判定噪音(dB)" sortable></vxe-column>
                <vxe-column field="IssSlowColor2Hz" width="130px" title="②減速颜色映射判定频率(Hz)" sortable></vxe-column>
                <vxe-column field="IssSlowColor2rpm" width="140px" title="②減速颜色映射判定旋转数(rpm)" sortable></vxe-column>
                <vxe-column field="IssSlowColor2sum" width="130px" title="②減速颜色映射判定次数" sortable></vxe-column>
                <vxe-column field="IssSlowColor2Dec" width="110px" title="②減速颜色映射判定" sortable></vxe-column>
                <vxe-column field="IssRevColor3dB" width="130px" title="③加速颜色映射判定噪音(dB)" sortable></vxe-column>
                <vxe-column field="IssRevColor3Hz" width="130px" title="③加速颜色映射判定频率(Hz)" sortable></vxe-column>
                <vxe-column field="IssRevColor3rpm" width="140px" title="③加速颜色映射判定旋转数(rpm)" sortable></vxe-column>
                <vxe-column field="IssRevColor3sum" width="130px" title="③加速颜色映射判定次数" sortable></vxe-column>
                <vxe-column field="IssRevColor3Dec" width="110px" title="③加速颜色映射判定" sortable></vxe-column>
                <vxe-column field="IssSlowColor3dB" width="130px" title="③減速颜色映射判定噪音(dB)" sortable></vxe-column>
                <vxe-column field="IssSlowColor3Hz" width="130px" title="③減速颜色映射判定频率(Hz)" sortable></vxe-column>
                <vxe-column field="IssSlowColor3rpm" width="140px" title="③減速颜色映射判定旋转数(rpm)" sortable></vxe-column>
                <vxe-column field="IssSlowColor3sum" width="130px"  title="③減速颜色映射判定次数" sortable></vxe-column>
                <vxe-column field="IssSlowColor3Dec" width="110px" title="③減速颜色映射判定" sortable></vxe-column>
                <vxe-column field="IssCol" width="70px" title="多行识别" sortable></vxe-column>
                <vxe-column field="IssOilPump" width="70px" title="油泵油圧" sortable></vxe-column>
                <vxe-column field="IssOilPumpDec" width="80px" title="油泵油圧判定" sortable></vxe-column>
                <vxe-column field="IssReliefValve" width="75px" title="溢流阀油圧" sortable></vxe-column>
                <vxe-column field="IssReliefValveDec" width="85px"  title="溢流阀油圧判定" sortable></vxe-column>
            </vxe-colgroup>
            <PokayokeDate :colName="'防错防误26计测日時'" :value="'PokayokeDate26'" />
            <PokayokeDate :colName="'防错防误28计测日時'" :value="'PokayokeDate28'" />
            <PokayokeDate :colName="'防错防误29计测日時'" :value="'PokayokeDate29'" />
            <PokayokeDate :colName="'刻印计测日時'" :value="'EngravingDate'" />
            <PokayokeDate :colName="'防错防误30计测日時'" :value="'PokayokeDate30'" />
            <PokayokeDate :colName="'防错防误31计测日時'" :value="'PokayokeDate31'" />
            <PokayokeDate :colName="'外観検査计测日時'" :value="'InspectionDate'" />
            <PokayokeDate :colName="'防错防误32计测日時'" :value="'PokayokeDate32'" />
            <PokayokeDate :colName="'HSG セット计测日時'" :value="'HsgSetDate'" />
            <PokayokeDate :colName="'防错防误30计测日時'" :value="'PokayokeDate30'" />

            <vxe-colgroup title="D托盘重量">
                <vxe-column field="DtrayWeight" width="70px" title="托盘 No" sortable></vxe-column>
            </vxe-colgroup>
        </vxe-table>
</template>
<script setup>
import { defineProps } from 'vue';
import { TableConfig } from '@/service/GetDataMethod/utils'
import XEUtils from 'xe-utils'
import BasicTemp from './BasicTemp.vue';
import PokayokeDate from './PokayokeDate.vue';

defineProps({
    tableData: Array,
})
const formatDate = ({ cellValue }) => {
    return XEUtils.toDateString(cellValue, 'yyyy-MM-dd HH:mm:ss')
}
</script>