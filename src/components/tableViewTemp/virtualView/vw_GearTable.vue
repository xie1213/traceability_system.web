<template>
    <vxe-colgroup title="GearTable">
        <PokayokeDate :colName="'防错防误39计测日時'" :value="'PokayokeDate39'" />
            <PokayokeDate :colName="'防错防误40计测日時'" :value="'PokayokeDate40'" />

            <vxe-colgroup title="RrBrg圧入">
                <vxe-column field="GeHsgBrgMeasDate" width="100px" title="RrBrg圧入计测日时" sortable></vxe-column>
                <vxe-column field="GeHsgBrgInflectPtStroke" width="100px" title="RrBrg圧入拐点行程1" sortable></vxe-column>
                <vxe-column field="GeHsgBrgInflectPtLoad" width="100px" title="RrBrg圧入拐点负重1" sortable></vxe-column>
                <vxe-column field="GeHsgBrgFinalStroke" width="100px" title="RrBrg圧入最终行程1" sortable></vxe-column>
                <vxe-column field="GeHsgBrgFinalLoad" width="100px" title="RrBrg圧入最终负重1" sortable></vxe-column>
                <vxe-column field="GeHsgBrgInflectPtStrokeSec" width="100px" title="RrBrg圧入拐点行程2" sortable></vxe-column>
                <vxe-column field="GeHsgBrgInflectPtLoadSec" width="100px" title="RrBrg圧入拐点负重2" sortable></vxe-column>
                <vxe-column field="GeHsgBrgFinalStrokeSec" width="100px" title="RrBrg圧入最终行程2" sortable></vxe-column>
                <vxe-column field="GeHsgBrgFinalLoadSec" width="100px" title="RrBrg圧入最终负重2" sortable></vxe-column>
                <vxe-column field="GeHsgBrgMaasterStroke" width="100px" title="RrBrg圧入主行程" sortable></vxe-column>
            </vxe-colgroup>
            <PokayokeDate :colName="'防错防误41计测日時'" :value="'GePokayokeDate41'" />
            <PokayokeDate :colName="'防错防误42计测日時'" :value="'GePokayokeDate42'" />
            <PokayokeDate :colName="'防错防误43计测日時'" :value="'GePokayokeDate43'" />
            <PokayokeDate :colName="'防错防误44计测日時'" :value="'GePokayokeDate44'" />
            <PokayokeDate :colName="'翻转机'" :value="'GeUpenderDate'" />
            <PokayokeDate :colName="'防错防误45计测日時'" :value="'GePokayokeDate45'" />
            <PokayokeDate :colName="'拒绝计测日時'" :value="'GeRejectTimeDate'" />
            <PokayokeDate :colName="'防错防误33计测日時'" :value="'GePokayokeDate33'" />

            <vxe-colgroup title="差速器装配">
                <vxe-column field="GeDgameasDate" width="165px" title="计测日时" sortable></vxe-column>
                <vxe-column field="GeDgapos3Axis" width="80px" title="推进位置3轴" sortable></vxe-column>
                <vxe-column field="GeDgaload3Axis" width="95px" title="负重（电流值）3轴" sortable></vxe-column>
                <vxe-column field="GeDgapos4Axis" width="80px" title="推进位置4轴" sortable></vxe-column>
                <vxe-column field="GeDgaload4Axis" width="95px" title="负重（电流值）4轴" sortable></vxe-column>
            </vxe-colgroup>
            <PokayokeDate :colName="'防错防误34计测日時'" :value="'PokayokeDate34'" />

            <vxe-colgroup title="差动齿轮测量">
                <vxe-column field="GeDgmmeasDate" width="165px" title="计测日时" sortable></vxe-column>
                <vxe-column field="GeDgmdagjudge" width="85px" title="作齿轮判定" sortable></vxe-column>
                <vxe-column field="GeDgmlhRh" title="変位量" sortable></vxe-column>
                <vxe-column field="GeDgmmaxTorque" width="70px" title="上限扭矩" sortable></vxe-column>
                <vxe-column field="GeDgmminTorque" width="70px" title="下限扭矩" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="差速器销铆接">
                <vxe-column field="GeDprmeasDate" width="165px" title="计测日时" sortable></vxe-column>
                <vxe-column field="GeDprfrs" width="70px" title="最终行程" sortable></vxe-column>
                <vxe-column field="GeDprfrl" width="85px" title="铆接最终负重" sortable></vxe-column>
                <vxe-column field="GeContact" width="85px" title="ワーク接触位置" sortable></vxe-column>

            </vxe-colgroup>

            <PokayokeDate :colName="'防错防误35计测日時'" :value="'PokayokeDate35'" />

            <vxe-colgroup title="齿轮压入1">
                <vxe-column field="GeGearMeasDate" width="165px" title="计测日时" sortable></vxe-column>
                <vxe-column field="GeGearStroke" width="70px" title="拐点行程" sortable></vxe-column>
                <vxe-column field="GeGearLoad" width="75px" title="変曲点负重" sortable></vxe-column>
                <vxe-column field="GeGearFinalStroke" width="70px" title="最终行程" sortable></vxe-column>
                <vxe-column field="GeGearFinalLoad" width="75px" title="最終荷负重" sortable></vxe-column>
                <vxe-column field="GeGearStrokeSec" width="70px" title="拐点行程" sortable></vxe-column>
                <vxe-column field="GeGearLoadSec" width="75px" title="変曲点负重" sortable></vxe-column>
                <vxe-column field="GeGearFinalStrokeSec" width="70px" title="最终行程" sortable></vxe-column>
                <vxe-column field="GeGearFinalLoadSec" width="70px" title="最終荷负重" sortable></vxe-column>
                <vxe-column field="GeGearMainStroke" title="主行程" sortable></vxe-column>
                <vxe-column field="GeGearAbvalue" width="70px" title="A/B" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="齿轮压入2">
                <vxe-column field="GeGear2Date" width="165px" title=计测日时 sortable></vxe-column>
                <vxe-column field="GeGear2Stroke" width="70px" title=拐点行程 sortable></vxe-column>
                <vxe-column field="GeGear2Load" width="75px" title=変曲点负重 sortable></vxe-column>
                <vxe-column field="GeGear2FinalStroke" width="70px" title=最终行程 sortable></vxe-column>
                <vxe-column field="GeGear2FinalLoad" width="75px" title=最終荷负重 sortable></vxe-column>
                <vxe-column field="GeGear2StrokeSec" width="70px" title=拐点行程 sortable></vxe-column>
                <vxe-column field="GeGear2LoadSec" width="75px" title=変曲点负重 sortable></vxe-column>
                <vxe-column field="GeGear2FinalStrokeSec" width="70px" title=最终行程 sortable></vxe-column>
                <vxe-column field="GeGear2FinalLoadSec" width="75px" title=最終荷负重 sortable></vxe-column>
                <vxe-column field="GeGear2MainStroke" title=主行程 sortable></vxe-column>
                <vxe-column field="GeGear2Abvalue" width="70px" title=A/B sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="差速器销l螺母紧固">
                <vxe-column field="GeDpntDate" width="165px" title="计测日时" sortable></vxe-column>
                <vxe-column field="GeDpntTorqueAxis1" width="80px" title="紧固扭矩1軸" sortable></vxe-column>
                <vxe-column field="GeDpntAngleAxis1" width="80px" title="紧固角度1軸" sortable></vxe-column>
                <vxe-column field="GeDpntJudgment" width="70px" title="判定代码" sortable></vxe-column>
                <vxe-column field="GeDpntSeating" width="80px" title="着座扭矩1軸" sortable></vxe-column>
                <vxe-column field="GeDpntDrop" width="80px" title="下降角度1軸" sortable></vxe-column>
                <vxe-column field="GeDpntSlack" width="100px" title="松弛监视器扭矩1軸" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="差速器销螺母铆接">
                <vxe-column field="GeDpnfMeasDate" width="165px" title=计测日时 sortable></vxe-column>
                <vxe-column field="GeDpnfFinalStroke" width="70px" title=最终行程 sortable></vxe-column>
                <vxe-column field="GeDpnfFinalLoad" width="70px" title=最终负重 sortable></vxe-column>
                <vxe-column field="GeDpnfMainStroke" title=主行程 sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="DF BRG＋环圧入">
                <vxe-column field="GeDfbrgDate" width="165px" title=计测日时 sortable></vxe-column>
                <vxe-column field="GeDfbrgstroke" width="70px" title=拐点行程 sortable></vxe-column>
                <vxe-column field="GeDfbrgload" width="70px" title=拐点负重 sortable></vxe-column>
                <vxe-column field="GeDfbrgfinalStroke" width="70px" title=最终行程 sortable></vxe-column>
                <vxe-column field="GeDfbrgfinalLoad" width="70px" title=最终负重 sortable></vxe-column>
                <vxe-column field="GeDfbrgstrokeSec" width="70px" title=拐点行程 sortable></vxe-column>
                <vxe-column field="GeDfbrgloadSec" width="70px" title=拐点负重 sortable></vxe-column>
                <vxe-column field="GeDfbrgfinalStrokeSec" width="70px" title=最终行程 sortable></vxe-column>
                <vxe-column field="GeDfbrgfinalLoadSec" width="70px" title=最终负重 sortable></vxe-column>
                <vxe-column field="GeDfbrgmainStroke" title=主行程 sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="DF紧固1">
                <vxe-column field="GeDf1Date" width="165px" title="计测日时" sortable></vxe-column>
                <vxe-column field='GeDf1angleAxis1' width="80px" title="紧固角度 1軸" sortable></vxe-column>
                <vxe-column field='GeDf1codeAxis1' width="85px" title='第1軸 判定代码' sortable></vxe-column>
                <vxe-column field='GeDf1angleAxis2' width="80px" title="紧固角度 2軸" sortable></vxe-column>
                <vxe-column field='GeDf1codeAxis2' width="85px" title="第２軸 判定代码" sortable></vxe-column>
                <vxe-column field='GeDf1angleAxis3' width="80px" title="紧固角度 3軸" sortable></vxe-column>
                <vxe-column field='GeDf1codeAxis3' width="85px" title="第３軸 判定代码" sortable></vxe-column>
                <vxe-column field='GeDf1angleAxis4' width="80px" title="紧固角度 4軸" sortable></vxe-column>
                <vxe-column field='GeDf1codeAxis4' width="85px" title="第4軸 判定代码" sortable></vxe-column>
                <vxe-column field='GeDf1angleAxis5' width="80px" title="紧固角度 5軸" sortable></vxe-column>
                <vxe-column field='GeDf1codeAxis5' width="85px" title="第5軸 判定代码" sortable></vxe-column>
                <vxe-column field='GeDf1angleAxis6' width="80px" title="紧固角度 6軸" sortable></vxe-column>
                <vxe-column field='GeDf1codeAxis6' width="85px" title="第6軸 判定代码" sortable></vxe-column>
                <vxe-column field='GeDf1abvalue' width="70px" title="A/B" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="DF紧固2">
                <vxe-column field="GeDf2Date" width="165px" title="计测日时" sortable></vxe-column>
                <vxe-column field="GeDf2angleAxis1" width="80px" title="紧固角度 1軸" sortable></vxe-column>
                <vxe-column field="GeDf2codeAxis1" width="85px" title="第1軸 判定代码" sortable></vxe-column>
                <vxe-column field='GeDf2angleAxis2' width="80px" title="紧固角度 2軸" sortable></vxe-column>
                <vxe-column field="GeDf2codeAxis2" width="85px" title="第２軸 判定代码" sortable></vxe-column>
                <vxe-column field="GeDf2angleAxis3" width="80px" title="紧固角度 3軸" sortable></vxe-column>
                <vxe-column field="GeDf2codeAxis3" width="85px" title='第３軸 判定代码' sortable></vxe-column>
                <vxe-column field="GeDf2angleAxis4" width="80px" title="紧固角度 4軸" sortable></vxe-column>
                <vxe-column field="GeDf2codeAxis4" width="85px" title="第4軸 判定代码" sortable></vxe-column>
                <vxe-column field="GeDf2angleAxis5" width="80px" title="紧固角度 5軸" sortable></vxe-column>
                <vxe-column field="GeDf2codeAxis5" width="85px" title="第5軸 判定代码" sortable></vxe-column>
                <vxe-column field="GeDf2angleAxis6" width="80px" title="紧固角度 6軸" sortable></vxe-column>
                <vxe-column field="GeDf2codeAxis6" width="85px" title="第6軸 判定代码" sortable></vxe-column>
                <vxe-column field="GeDf2abvalue" width="70px" title="A/B" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="DF反転">
                <vxe-column field="GeDfreverseDate" width="175px" title="DF反転计测日時" sortable></vxe-column>
                <vxe-column field="GePinposition" width="80px" title="ピン検査位置" sortable></vxe-column>
            </vxe-colgroup>

            <PokayokeDate :colName="'防错防误36计测日時'" :value="'GePokayokeDate36'" />

            <PokayokeDate :colName="'防错防误37计测日時'" :value="'GePokayokeDate37'" />

            <PokayokeDate :colName="'防错防误38计测日時'" :value="'GePokayokeDate38'" />

            <vxe-colgroup title="MG1磁化">
                <vxe-column field='GeMg1workTemp' width="80px" title="MG1工件温度" sortable></vxe-column>
                <vxe-column field="GeMg1fluxValue" width="80px" title="MG1通量值" sortable></vxe-column>
                <vxe-column field="GeMg1dec" width="70px" title="MG1判定" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="MG2磁化">
                <vxe-column field="GeMg2workTemp" width="80px" title="MG2工件温度" sortable></vxe-column>
                <vxe-column field="GeMg2fluxValue" width="80px" title="MG2通量值" sortable></vxe-column>
                <vxe-column field="GeMg2dec" width="70px" title="MG2判定" sortable></vxe-column>
            </vxe-colgroup>

            <PokayokeDate :colName="'轴移載计测日時'" :value="'AslDate'" />
            <PokayokeDate :colName="'铁芯移載计测日時'" :value="'IctlDate'" />

            <vxe-colgroup title="转子铁芯序列">
                <vxe-column field="GeRcserial" width="80px" title="转子铁芯序列" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="轴序列">
                <vxe-column field="GeAxisSerial" title="轴序列" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="铁芯加熱">
                <vxe-column field="GeProcDate" width="165px" title="加工開始日時" sortable></vxe-column>
                <vxe-column field="GeIsRcheat" width="80px" title="铁芯加熱有無" sortable></vxe-column>
                <vxe-column field="GeHeatSt" title="加熱ST" sortable></vxe-column>
                <vxe-column field="GeHeatProcedure" width="70px" title="加热程序" sortable></vxe-column>
                <vxe-column field="GeRoomTemp" width="85px" title="室温（℃）" sortable></vxe-column>
                <vxe-column field="GeAxisTemp" width="85px" title="轴温度（℃）" sortable></vxe-column>
                <vxe-column field="GeCoreBefore" width="110px" title="加熱前铁芯温度（℃）" sortable></vxe-column>
                <vxe-column field="GeCoreAfter" width="120px" title="加熱完了時铁芯温度（℃）" sortable></vxe-column>
                <vxe-column field="GeIhbefore" width="120px" title="加熱前IH盘管温度（℃）" sortable></vxe-column>
                <vxe-column field='GeIhafter' width="120px" title="加熱後IH盘管温度（℃）" sortable></vxe-column>
                <vxe-column field="GeCdtemp" width="100px" title="冷却空气温度（℃）" sortable></vxe-column>
                <vxe-column field="GeHeatTime" width="90px" title="加熱通電時間(秒)" sortable></vxe-column>
                <vxe-column field="GeHeatOutput" width="80px" title="加熱输出(％）" sortable></vxe-column>
                <vxe-column field='GeHeatEndTime' width="80px" title="加熱完了日時" sortable></vxe-column>
                <vxe-column field='GeJudgmentCode' width="70px" title='判定代码' sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="轴圧入">
                <vxe-column field="GeApiDate" width="165px" title="计测日時" sortable></vxe-column>
                <vxe-column field="GeApistroke" width="70px" title="拐点行程" sortable></vxe-column>
                <vxe-column field="GeApiload" width="70px" title="拐点负重" sortable></vxe-column>
                <vxe-column field="GeApifinalStroke" width="80px" title="圧入最终行程" sortable></vxe-column>
                <vxe-column field="GeApimainStroke" title="主行程" sortable></vxe-column>
                <vxe-column field="GeApicoreTemp" width="110px" title="圧入時铁芯温度（℃）" sortable></vxe-column>
                <vxe-column field="GeApisttime" width="100px" title="圧入ST滞在時間(s)" sortable></vxe-column>
                <vxe-column field="GeApiinitTilt" width="90px" title="初始倾斜(kN/mm)" sortable></vxe-column>
                <vxe-column field="GeApipos" width="100px" title="偏离检测位置(mm)" sortable></vxe-column>
                <vxe-column field="GeApideviationLoad" width="100px" title="偏离检负重(kN)" sortable></vxe-column>
                <vxe-column field="GeApicode" width="70px" title="判定代码" sortable></vxe-column>
                <vxe-column field="GeApimachine" title="圧入機" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="l螺母紧固">
                <vxe-column field='GeNtDate' width="165px" title=计测日時 sortable></vxe-column>
                <vxe-column field='GeNttorqueAxis1' width="80px" title="紧固扭矩1軸" sortable></vxe-column>
                <vxe-column field='GeNtangleAxis1' width="80px" title="紧固角度1軸" sortable></vxe-column>
                <vxe-column field='GeNtcode' width="70px" title="判定代码" sortable></vxe-column>
                <vxe-column field='GeNthistory' width="70px" title="抽样履历" sortable></vxe-column>
                <vxe-column field='GeNtseating1' width="80px" title="着座扭矩1軸" sortable></vxe-column>
                <vxe-column field='GeNtdrop1' width="80px" title="下降角度1軸" sortable></vxe-column>
                <vxe-column field='GeNtslack1' width="90px" title="松监视器扭矩1軸" sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="铆接圧入">
                <vxe-column field='GeRapDate' width="165px" title="计测日時" sortable></vxe-column>
                <vxe-column field='GeRapbefore' width="95px" title="铆接行程（0前）" sortable></vxe-column>
                <vxe-column field='GeRapafter' width="95px" title="铆接行程（0後）" sortable></vxe-column>
                <vxe-column field='GeRapload' width="70px" title="铆接荷重" sortable></vxe-column>
                <vxe-column field='GeRapmainStroke' title='主行程' sortable></vxe-column>
                <vxe-column field='GeRapcode' width="70px" title='判定代码' sortable></vxe-column>
                <vxe-column field='GeRapwashSensor' width="90px" title='垫圈检测传感器値' sortable></vxe-column>
                <vxe-column field='GeRapwashMain' width="80px" title='垫圈检测主値' sortable></vxe-column>
                <vxe-column field='GeRapwashPos' width="80px" title='垫圈确认位置' sortable></vxe-column>
                <vxe-column field='GeRapstroke' width="70px" title='拐点行程' sortable></vxe-column>
                <vxe-column field='GeRaploadSec' width="70px" title='拐点负重' sortable></vxe-column>
                <vxe-column field='GeRapfinalStroke' width="80px" title='圧入最终行程' sortable></vxe-column>
                <vxe-column field='GeRapmain2Stroke' title='主行程' sortable></vxe-column>
                <vxe-column field='GeRapcode2' width="70px" title='判定代码' sortable></vxe-column>
            </vxe-colgroup>

            <vxe-colgroup title="旋转变压器圧入">
                <vxe-column field="GeRtpstartDate" width="165px" title="加工開始日時" sortable></vxe-column>
                <vxe-column field="GeRtpstroke" width="70px" title="拐点行程" sortable></vxe-column>
                <vxe-column field="GeRtpload" width="70px" title="拐点负重" sortable></vxe-column>
                <vxe-column field="GeRtpfinalStroke" width="80px" title="圧入最终行程" sortable></vxe-column>
                <vxe-column field="GeRtpmainStroke" title="主行程" sortable></vxe-column>
                <vxe-column field="GeRtpcode" width="70px" title="判定代码" sortable></vxe-column>
                <vxe-column field="GeRtphistory" width="70px" title="抽样履历" sortable></vxe-column>
            </vxe-colgroup>
    </vxe-colgroup>

</template>
<script setup>
import PokayokeDate from '@/components/tableViewTemp/PokayokeDate'

</script>